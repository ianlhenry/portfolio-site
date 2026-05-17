import type { Employer } from "../../types/resumeTypes";
import { RoleEntryList } from "./RoleEntryList";

export type ExperienceBlockProps = {
  experience: Employer[];
  leftColumnYearsOnly?: boolean;
  leftColumnStartDateOnly?: boolean;
};

export function ExperienceBlock(props: ExperienceBlockProps) {
  const {
    experience,
    leftColumnYearsOnly = true,
    leftColumnStartDateOnly = false,
  } = props;
  return (
    <RoleEntryList
      entries={experience}
      leftColumnYearsOnly={leftColumnYearsOnly}
      leftColumnStartDateOnly={leftColumnStartDateOnly}
    />
  );
}
