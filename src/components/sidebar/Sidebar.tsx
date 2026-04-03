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
          <h1 className="sidebar-name" id="site-title">
            {person.name}
          </h1>
          <p className="sidebar-tagline">{person.title}</p>
        </div>
        <nav className="sidebar-nav" aria-label="On this page">
          <ul className="sidebar-nav-list">
            {NAV_LINKS.map((navLink) => (
              <li key={navLink.href}>
                <a href={navLink.href} className="sidebar-nav-link">
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
