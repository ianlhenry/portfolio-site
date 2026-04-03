import type { ReactNode } from "react";

export type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section(props: SectionProps) {
  const { id, title, children } = props;
  return (
    <section className="section" id={id} aria-labelledby={`${id}-heading`}>
      <div className="section-header">
        <h2 className="section-title" id={`${id}-heading`}>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
