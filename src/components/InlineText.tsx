import { parseInlineLinks } from "../utils/inlineLinks";

export type InlineTextProps = {
  text: string;
};

export function InlineText(props: InlineTextProps) {
  return (
    <>
      {parseInlineLinks(props.text).map((segment, index) =>
        segment.kind === "link" ? (
          <a
            key={index}
            className="inline-link"
            href={segment.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {segment.text}
          </a>
        ) : (
          segment.text
        ),
      )}
    </>
  );
}
