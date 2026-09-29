import { describe, expect, it } from "vitest";
import { parseInlineLinks } from "./inlineLinks";

describe("parseInlineLinks", () => {
  it("returns plain text as a single segment", () => {
    expect(parseInlineLinks("No links here.")).toEqual([
      { kind: "text", text: "No links here." },
    ]);
  });

  it("splits text around a link", () => {
    expect(
      parseInlineLinks("See the [changelog](https://example.com/log) for details."),
    ).toEqual([
      { kind: "text", text: "See the " },
      { kind: "link", text: "changelog", href: "https://example.com/log" },
      { kind: "text", text: " for details." },
    ]);
  });

  it("handles multiple and adjacent links", () => {
    expect(parseInlineLinks("[a](https://a.com)[b](https://b.com)")).toEqual([
      { kind: "link", text: "a", href: "https://a.com" },
      { kind: "link", text: "b", href: "https://b.com" },
    ]);
  });
});
