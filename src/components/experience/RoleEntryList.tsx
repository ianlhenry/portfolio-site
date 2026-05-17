import type { Employer } from "../../types/resumeTypes";
import {
  formatJobDateRange,
  formatJobDatesToYearsOnly,
  formatJobStartDate,
} from "../../utils/dateUtils";
import { RoleTitle } from "./RoleTitle";
import { TeamSectionBlock } from "./TeamSectionBlock";

export type RoleEntryListProps = {
  entries: Employer[];
  leftColumnYearsOnly?: boolean;
  leftColumnStartDateOnly?: boolean;
};

export function RoleEntryList(props: RoleEntryListProps) {
  const {
    entries,
    leftColumnYearsOnly = false,
    leftColumnStartDateOnly = false,
  } = props;
  return (
    <>
      {entries.map((employer) => {
        const unifiedHover = employer.roles.length === 1;
        return (
          <article
            key={`${employer.company}-${employer.startDate?.month}-${employer.startDate?.year}-${employer.endDate?.month ?? "x"}-${employer.endDate?.year ?? "x"}`}
            className={
              unifiedHover
                ? "role role-team-sections role-unified-hover"
                : "role role-team-sections"
            }
          >
            <div className="role-grid">
              <header
                className="role-column-meta"
                aria-label={
                  leftColumnStartDateOnly
                    ? formatJobStartDate(employer.startDate)
                    : formatJobDateRange(employer.startDate, employer.endDate)
                }
              >
                <time className="role-dates-col">
                  {leftColumnStartDateOnly
                    ? formatJobStartDate(employer.startDate)
                    : leftColumnYearsOnly
                      ? formatJobDatesToYearsOnly(
                          employer.startDate,
                          employer.endDate,
                        )
                      : formatJobDateRange(
                          employer.startDate,
                          employer.endDate,
                        )}
                </time>
              </header>
              <div className="role-column-body">
                <RoleTitle job={employer} />
                <div className="team-sections-highlights">
                  {employer.roles.map((teamRole, roleIndex) => (
                    <TeamSectionBlock
                      key={`${teamRole.teamName}-${teamRole.startDate.month}-${teamRole.startDate.year}-${roleIndex}`}
                      role={teamRole}
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}
