import {
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
  type SyntheticEvent,
} from "react";

export type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  /** Open on first paint at mobile widths. Desktop always shows every section. */
  defaultOpen?: boolean;
};

const DESKTOP_QUERY = "(min-width: 901px)";

export function Section(props: SectionProps) {
  const { id, title, children, defaultOpen = false } = props;
  const [open, setOpen] = useState(defaultOpen);
  const [summaryTabIndex, setSummaryTabIndex] = useState<-1 | 0>(-1);
  const userToggled = useRef(false);

  useLayoutEffect(() => {
    const desktopQuery = window.matchMedia(DESKTOP_QUERY);

    const sync = () => {
      const isDesktop = desktopQuery.matches;
      setSummaryTabIndex(isDesktop ? -1 : 0);
      if (isDesktop) {
        setOpen(true);
        return;
      }
      if (!userToggled.current) setOpen(defaultOpen);
    };

    desktopQuery.addEventListener("change", sync);
    sync();
    return () => desktopQuery.removeEventListener("change", sync);
  }, [defaultOpen]);

  const onSummaryClick = (event: MouseEvent<HTMLElement>) => {
    if (window.matchMedia(DESKTOP_QUERY).matches) {
      event.preventDefault();
      return;
    }
    userToggled.current = true;
  };

  const onToggle = (event: SyntheticEvent<HTMLDetailsElement>) => {
    if (window.matchMedia(DESKTOP_QUERY).matches) return;
    setOpen(event.currentTarget.open);
  };

  return (
    <section className="section" id={id} aria-labelledby={`${id}-heading`}>
      <details className="section-details" open={open} onToggle={onToggle}>
        <summary
          className="section-header"
          tabIndex={summaryTabIndex}
          onClick={onSummaryClick}
        >
          <h2 className="section-title" id={`${id}-heading`}>
            {title}
          </h2>
        </summary>
        <div className="section-body">{children}</div>
      </details>
    </section>
  );
}
