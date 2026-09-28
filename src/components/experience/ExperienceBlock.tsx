import type { Employer } from "../../types/resumeTypes";
import { RoleEntryList } from "./RoleEntryList";

export type ExperienceBlockProps = {
  experience: Employer[];
  leftColumnYearsOnly?: boolean;
};

export function ExperienceBlock(props: ExperienceBlockProps) {
  const { experience, leftColumnYearsOnly = true } = props;
  return (
    <RoleEntryList
      entries={experience}
      leftColumnYearsOnly={leftColumnYearsOnly}
    />
  );
}
