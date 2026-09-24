import { cn } from "@/lib/utils";

type AnimatedBrandMarkProps = {
  className?: string;
};

export function AnimatedBrandMark({ className }: AnimatedBrandMarkProps) {
  return (
    <div
      className={cn(
        "relative mx-auto grid size-[min(100%,280px)] place-items-center",
        className
      )}
      aria-hidden="true"
    >
      <span className="inc-not-found-orbit absolute inset-[8%] rounded-full border border-dashed border-white/35" />
      <span className="inc-not-found-orbit-reverse absolute inset-[2%] rounded-full border border-white/20" />
      <span className="inc-not-found-glow absolute inset-[18%] rounded-full bg-[radial-gradient(circle,rgba(95,176,236,0.28)_0%,rgba(5,101,207,0.06)_52%,transparent_72%)]" />

      <div className="inc-not-found-brand relative z-[1] flex flex-col items-center gap-3 rounded-[22px] border border-white/70 bg-white/95 px-8 py-6 shadow-[0_18px_44px_rgba(8,37,56,0.16)] backdrop-blur-sm">
        <div className="flex flex-col items-center gap-0.5 text-center">
          <span className="whitespace-nowrap text-[21px] leading-none font-medium tracking-[-0.043em] text-[#182329]">
            <span className="font-semibold text-inc-blue">In</span>Central
          </span>
          <span className="text-[9.5px] leading-[1.15] font-medium text-[#75848c]">
            Powered by{" "}
            <span className="font-semibold text-[#56666e]">Intangles</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inc-not-found-dot size-2 rounded-full bg-inc-blue" />
          <span className="inc-not-found-dot size-2 rounded-full bg-inc-blue [animation-delay:160ms]" />
          <span className="inc-not-found-dot size-2 rounded-full bg-inc-blue [animation-delay:320ms]" />
        </div>
      </div>
    </div>
  );
}
