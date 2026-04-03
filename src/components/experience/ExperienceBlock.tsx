import type { Employer } from "../../types/resumeTypes";
import { RoleEntryList } from "./RoleEntryList";

export type ExperienceBlockProps = {
  experience: Employer[];
};

export function ExperienceBlock(props: ExperienceBlockProps) {
  const { experience } = props;
  return <RoleEntryList entries={experience} leftColumnYearsOnly />;
}
