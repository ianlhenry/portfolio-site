import type { Person, ResumePdf } from "../../types/resumeTypes";
import { DownloadIcon } from "../icons/DownloadIcon";
import { GitHubIcon } from "../icons/GitHubIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { MailIcon } from "../icons/MailIcon";

export type SidebarContactProps = {
  person: Person;
  resumePdf: ResumePdf;
};

export function SidebarContact(props: SidebarContactProps) {
  const { person, resumePdf } = props;
  return (
    <div className="sidebar-contact" aria-label="Contact">
      <ul className="sidebar-social">
        <li>
          <a
            href={person.githubUrl}
            className="sidebar-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <GitHubIcon className="sidebar-social-icon" />
          </a>
        </li>
        <li>
          <a
            href={person.linkedinUrl}
            className="sidebar-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <LinkedInIcon className="sidebar-social-icon" />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${person.email}`}
            className="sidebar-social-link"
            aria-label={`Email ${person.email}`}
            title="Email"
          >
            <MailIcon className="sidebar-social-icon" />
          </a>
        </li>
        <li>
          <a
            href={resumePdf.url}
            download={resumePdf.downloadAs}
            className="sidebar-social-link"
            aria-label="Download resume PDF"
            title="Resume PDF"
          >
            <DownloadIcon className="sidebar-social-icon" />
          </a>
        </li>
      </ul>
      <span className="sidebar-contact-line">{person.location}</span>
    </div>
  );
}
