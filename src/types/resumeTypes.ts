/** Calendar month (1–12) and year. */
export interface YearMonth {
  month: number;
  year: number;
}

/** One responsibility bullet, with an optional single level of sub-bullets. */
export type JobResponsibility =
  | string
  | {
      text: string;
      subBullets: string[];
    };

export interface EmployerRole {
  jobTitle: string;
  teamName: string;
  startDate: YearMonth;
  endDate: YearMonth | null;
  languages: string[];
  jobResponsibilities: JobResponsibility[];
}

export interface Employer {
  company: string;
  companyUrl?: string;
  startDate: YearMonth;
  endDate: YearMonth | null;
  roles: EmployerRole[];
}

export interface Person {
  name: string;
  title: string;
  /** Headshot shown as a circle above the name; path under `public/`. Omit to hide. */
  photoUrl?: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  summary: string;
  highlights: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  location: string;
  startYear: number;
  endYear: number;
}

export interface ResumePdf {
  url: string;
}
