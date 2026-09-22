export type HelpSearchRecord = {
  id: string;
  kind: "topic" | "faq";
  title: string;
  searchText: string;
  href?: string;
};

export function normalizeHelpSearch(value: string): string {
  return (value || "").toLowerCase().replace(/[^a-z0-9+]+/g, " ").trim();
}

export function scoreHelpSearch(
  record: HelpSearchRecord,
  tokens: string[]
): number {
  let score = 0;
  const title = normalizeHelpSearch(record.title);
  const haystack = normalizeHelpSearch(`${record.searchText} ${record.title}`);

  for (const token of tokens) {
    if (title === token) score += 12;
    else if (title.includes(token)) score += 7;
    if (haystack.includes(token)) score += 2;
  }

  return score;
}

export function searchHelpRecords(
  records: HelpSearchRecord[],
  query: string,
  limit = 7
): HelpSearchRecord[] {
  const normalizedQuery = normalizeHelpSearch(query);
  if (!normalizedQuery) return [];

  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
  if (!tokens.length) return [];

  return records
    .map((record, index) => ({
      record,
      index,
      score: scoreHelpSearch(record, tokens),
      matches: tokens.every((token) =>
        normalizeHelpSearch(`${record.searchText} ${record.title}`).includes(token)
      ),
    }))
    .filter((entry) => entry.matches && entry.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map((entry) => entry.record);
}
