import type { Person, ResumePdf } from "../../types/resumeTypes";
import { NAV_LINKS } from "./navLinks";
import { SidebarContact } from "./SidebarContact";

export type SidebarProps = {
  person: Person;
  resumePdf: ResumePdf;
};

export function Sidebar(props: SidebarProps) {
  const { person, resumePdf } = props;
  return (
    <aside className="sidebar" aria-label="Introduction">
      <div className="sidebar-inner">
        <div className="sidebar-intro">
          {person.photoUrl ? (
            <img
              className="sidebar-photo"
              src={person.photoUrl}
              alt={person.name}
              width={136}
              height={136}
            />
          ) : null}
          <h1 className="sidebar-name" id="site-title">
            {person.name}
          </h1>
          <p className="sidebar-tagline">{person.title}</p>
          <p className="sidebar-contact-line">{person.location}</p>
        </div>
        <nav className="sidebar-nav" aria-label="On this page">
          <ul className="sidebar-nav-list">
            {NAV_LINKS.map((navLink) => (
              <li key={navLink.label}>
                <a
                  href={navLink.href}
                  className="sidebar-nav-link"
                  {...(navLink.external
                    ? {
                        target: "_blank" as const,
                        rel: "noopener noreferrer",
                        "aria-label": "Projects (opens GitHub in a new tab)",
                      }
                    : {})}
                >
                  {navLink.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SidebarContact person={person} resumePdf={resumePdf} />
      </div>
    </aside>
  );
}
