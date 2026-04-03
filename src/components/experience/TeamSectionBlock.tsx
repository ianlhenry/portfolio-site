import type { EmployerRole } from "../../types/resumeTypes";
import { formatJobDateRange } from "../../utils/dateUtils";

export type TeamSectionBlockProps = {
  role: EmployerRole;
};

export function TeamSectionBlock(props: TeamSectionBlockProps) {
  const { role } = props;
  const dateLabel = formatJobDateRange(role.startDate, role.endDate);
  const ariaLabel = [role.teamName, role.jobTitle, dateLabel]
    .filter(Boolean)
    .join(" · ");
  return (
    <section className="team-section-block" aria-label={ariaLabel}>
      <h4 className="team-section-heading">
        <span className="team-section-name">{role.teamName}</span>
        {role.jobTitle ? (
          <>
            <span className="team-section-sep" aria-hidden>
              {" "}
              ·{" "}
            </span>
            <span className="team-section-job">{role.jobTitle}</span>
          </>
        ) : null}
        {dateLabel ? (
          <span className="team-section-dates">
            {" "}
            · {dateLabel}
          </span>
        ) : null}
      </h4>
      {role.jobResponsibilities?.length ? (
        <ul className="team-section-list">
          {role.jobResponsibilities.map((responsibility) => (
            <li key={responsibility} className="team-section-line">
              {responsibility}
            </li>
          ))}
        </ul>
      ) : null}
      {role.languages?.length ? (
        <ul className="team-section-tags" aria-label="Languages">
          {role.languages.map((language, languageIndex) => (
            <li
              key={`${language}-${languageIndex}`}
              className="team-section-tag"
            >
              {language}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
