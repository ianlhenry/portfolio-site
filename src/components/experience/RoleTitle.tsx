import type { Employer } from "../../types/resumeTypes";
import { ExternalArrowIcon } from "../icons/ExternalArrowIcon";

export type RoleTitleProps = {
  job: Employer;
};

export function RoleTitle(props: RoleTitleProps) {
  const { job } = props;
  const companyName = job.company || "";
  if (!companyName) return null;
  if (job.companyUrl) {
    return (
      <h3 className="role-title">
        <a
          href={job.companyUrl}
          className="role-title-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${companyName} (opens in a new tab)`}
        >
          <span className="role-title-link-label">{companyName}</span>
          <ExternalArrowIcon className="role-title-link-icon" />
        </a>
      </h3>
    );
  }
  return (
    <h3 className="role-title">
      <span className="role-title-static">{companyName}</span>
    </h3>
  );
}
