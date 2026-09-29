import type {
  EmployerRole,
  JobResponsibility,
} from "../../types/resumeTypes";
import { formatJobDateRange } from "../../utils/dateUtils";
import { InlineText } from "../InlineText";

function responsibilityText(responsibility: JobResponsibility): string {
  return typeof responsibility === "string" ? responsibility : responsibility.text;
}

function responsibilitySubBullets(responsibility: JobResponsibility): string[] {
  return typeof responsibility === "string" ? [] : responsibility.subBullets;
}

export type TeamSectionBlockProps = {
  role: EmployerRole;
};

export function TeamSectionBlock(props: TeamSectionBlockProps) {
  const { role } = props;
  const dateLabel = formatJobDateRange(role.startDate, role.endDate);
  const showHeading = Boolean(role.teamName || role.jobTitle);
  const ariaLabel = [role.teamName, role.jobTitle, dateLabel]
    .filter(Boolean)
    .join(" · ");
  return (
    <section className="team-section-block" aria-label={ariaLabel}>
      {showHeading ? (
      <h4 className="team-section-heading">
        {role.teamName ? (
          <span className="team-section-name">{role.teamName}</span>
        ) : null}
        {role.jobTitle ? (
          <>
            {role.teamName ? (
              <span className="team-section-sep" aria-hidden>
                {" "}
                ·{" "}
              </span>
            ) : null}
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
      ) : null}
      {role.jobResponsibilities?.length ? (
        <ul className="team-section-list">
          {role.jobResponsibilities.map((responsibility, index) => {
            const text = responsibilityText(responsibility);
            const subBullets = responsibilitySubBullets(responsibility);
            return (
              <li key={`${text}-${index}`} className="team-section-line">
                <InlineText text={text} />
                {subBullets.length > 0 ? (
                  <ul className="team-section-sublist">
                    {subBullets.map((subBullet, subIndex) => (
                      <li
                        key={`${subBullet}-${subIndex}`}
                        className="team-section-subline"
                      >
                        <InlineText text={subBullet} />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
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
