"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";

import { helpPage } from "@/config/help";
import {
  normalizeHelpSearch,
  searchHelpRecords,
  type HelpSearchRecord,
} from "@/lib/help-search";
import { cn } from "@/lib/utils";

type HelpSearchProps = {
  records: HelpSearchRecord[];
  onActivateFaq: (id: string) => void;
};

export function HelpSearch({ records, onActivateFaq }: HelpSearchProps) {
  const router = useRouter();
  const inputId = useId();
  const resultsId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");

  const { hero } = helpPage;
  const matches = useMemo(
    () => searchHelpRecords(records, query),
    [records, query]
  );

  const closeResults = useCallback(() => {
    setOpen(false);
  }, []);

  const activateRecord = useCallback(
    (record: HelpSearchRecord) => {
      closeResults();

      if (record.kind === "faq") {
        onActivateFaq(record.id);
        return;
      }

      if (!record.href) return;

      if (record.href.includes("#")) {
        const [, hash] = record.href.split("#");
        if (hash) {
          onActivateFaq(hash);
        }
        return;
      }

      router.push(record.href);
    },
    [closeResults, onActivateFaq, router]
  );

  const handleInput = (value: string) => {
    setQuery(value);
    if (!value.trim()) {
      closeResults();
      setStatus("");
      return;
    }

    const nextMatches = searchHelpRecords(records, value);
    setOpen(true);
    setStatus(
      nextMatches.length
        ? `${nextMatches.length} matching help ${nextMatches.length === 1 ? "item" : "items"}.`
        : "No matching help topics."
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (matches.length) {
      activateRecord(matches[0]);
    }
  };

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!wrapRef.current?.contains(target)) {
        closeResults();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [closeResults]);

  return (
    <>
      <div ref={wrapRef} className="relative z-[12] mt-7 max-w-[760px] max-[640px]:mt-[22px]">
        <form
          role="search"
          onSubmit={handleSubmit}
          className={cn(
            "grid min-h-[60px] grid-cols-[28px_minmax(0,1fr)_40px] items-center gap-2.5 rounded-2xl border border-[#bfd0da] bg-white px-2.5 pl-[18px] shadow-[0_12px_30px_rgba(24,44,58,0.07)] transition-[border-color,box-shadow] duration-150",
            "focus-within:border-[#0565cf] focus-within:shadow-[0_0_0_3px_rgba(5,101,207,0.10),0_12px_30px_rgba(24,44,58,0.07)]",
            "max-[640px]:min-h-14 max-[640px]:grid-cols-[24px_minmax(0,1fr)_38px] max-[640px]:px-2 max-[640px]:pl-3.5"
          )}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-[22px] stroke-[#4d6c7d] stroke-[1.8] [fill:none] [stroke-linecap:round]"
          >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4 4" />
          </svg>

          <label htmlFor={inputId} className="sr-only">
            Search Help
          </label>
          <input
            ref={inputRef}
            id={inputId}
            type="search"
            value={query}
            autoComplete="off"
            aria-autocomplete="list"
            aria-controls={resultsId}
            aria-expanded={open}
            placeholder={hero.searchPlaceholder}
            onChange={(event) => handleInput(event.target.value)}
            onFocus={() => {
              if (query.trim()) setOpen(true);
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                closeResults();
                inputRef.current?.blur();
              }
            }}
            className="h-[58px] min-w-0 border-0 bg-transparent text-base outline-none [appearance:none] placeholder:text-[#81919a] max-[640px]:h-[54px] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
          />

          {query ? (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => {
                setQuery("");
                closeResults();
                setStatus("");
                inputRef.current?.focus();
              }}
              className="grid size-9 min-h-9 place-items-center rounded-full bg-[#edf5ff] text-[22px] leading-none font-normal text-[#0565cf]"
            >
              ×
            </button>
          ) : (
            <span aria-hidden="true" className="size-9" />
          )}
        </form>

        {open && query.trim() ? (
          <div
            id={resultsId}
            className="absolute inset-x-0 top-[calc(100%+8px)] z-40 max-h-[360px] overflow-auto rounded-2xl border border-[#cbdbe5] bg-white p-2 shadow-[0_18px_42px_rgba(20,43,58,0.16)] max-[640px]:max-h-[310px] max-[640px]:rounded-[14px]"
          >
            {matches.length ? (
              <>
                <div className="flex items-center justify-between gap-4 px-2.5 pt-2 pb-1.5 text-[11.5px] text-[#647681]">
                  <strong className="text-xs text-[#213b49]">
                    {matches.length} {matches.length === 1 ? "result" : "results"}
                  </strong>
                  <span>Choose an answer</span>
                </div>
                {matches.map((record) => (
                  <button
                    key={`${record.kind}-${record.id}`}
                    type="button"
                    onClick={() => activateRecord(record)}
                    className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3.5 border-0 border-t border-[#e7edf0] bg-white px-[11px] py-3 text-left first:border-t-0 hover:bg-[#f3f8ff] focus-visible:bg-[#f3f8ff] focus-visible:outline-none"
                  >
                    <span className="min-w-0">
                      <span className="mb-[3px] block text-[10px] font-semibold tracking-[0.08em] text-[#0565cf] uppercase">
                        {record.kind === "faq" ? "Quick answer" : "Help topic"}
                      </span>
                      <span className="block text-[13.5px] leading-[1.35] font-semibold text-[#1c3542]">
                        {record.title}
                      </span>
                    </span>
                    <span aria-hidden="true" className="text-lg text-[#0565cf]">
                      →
                    </span>
                  </button>
                ))}
              </>
            ) : (
              <div className="px-4 py-5 text-left">
                <strong className="block text-sm text-[#1e3744]">
                  No matching help topic.
                </strong>
                <span className="mt-1.5 block text-[12.5px] leading-[1.45] text-[#6a7b84]">
                  Try a broader search, or contact Support for a case-specific question.
                </span>
                <Link
                  href="/support"
                  className="mt-3 inline-flex text-[12.5px] font-semibold text-[#0565cf] no-underline"
                >
                  Contact Support →
                </Link>
              </div>
            )}
          </div>
        ) : null}
      </div>

      <div aria-label="Popular help searches" className="mt-3.5 flex flex-wrap gap-2">
        {hero.quickSearches.map((chip) => {
          const pressed = normalizeHelpSearch(chip) === normalizeHelpSearch(query);

          return (
            <button
              key={chip}
              type="button"
              aria-pressed={pressed}
              onClick={() => {
                setQuery(chip);
                handleInput(chip);
                inputRef.current?.focus();
              }}
              className={cn(
                "min-h-10 rounded-full border border-[#d5e1e7] bg-white px-3.5 text-xs font-semibold text-[#4d6572] transition-colors hover:border-[#9dc1e6] hover:bg-[#f7fbff] hover:text-[#0565cf]",
                pressed && "border-[#8dbbe9] bg-[#edf5ff] text-[#0565cf]"
              )}
            >
              {chip}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {status}
      </p>
    </>
  );
}
