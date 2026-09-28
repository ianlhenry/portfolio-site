import { person } from "../../data/resumeData";

export const NAV_LINKS = [
  { href: "#highlights", label: "Highlights", external: false },
  { href: "#experience", label: "Experience", external: false },
  { href: "#volunteering", label: "Volunteering", external: false },
  { href: person.githubUrl, label: "Projects", external: true },
  { href: "#education", label: "Education", external: false },
] as const;
