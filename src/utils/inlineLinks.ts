export type InlineSegment =
  | { kind: "text"; text: string }
  | { kind: "link"; text: string; href: string };

const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Splits text containing Markdown-style `[label](url)` links into segments. */
export function parseInlineLinks(input: string): InlineSegment[] {
  const segments: InlineSegment[] = [];
  let lastIndex = 0;
  for (const match of input.matchAll(LINK_PATTERN)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      segments.push({ kind: "text", text: input.slice(lastIndex, index) });
    }
    segments.push({ kind: "link", text: match[1], href: match[2] });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < input.length) {
    segments.push({ kind: "text", text: input.slice(lastIndex) });
  }
  return segments;
}
