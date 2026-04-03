/** Calendar month (1–12) and year. */
export interface YearMonth {
  month: number;
  year: number;
}

export interface EmployerRole {
  jobTitle: string;
  teamName: string;
  startDate: YearMonth;
  endDate: YearMonth | null;
  languages: string[];
  jobResponsibilities: string[];
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
