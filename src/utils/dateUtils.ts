import type { YearMonth } from "../types/resumeTypes";

const MONTH_ABBREV = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/** `{ month: 1–12, year }` → e.g. "Aug 2018". */
function formatMonthYear(datePart: YearMonth | null | undefined): string {
  if (datePart == null) return "";
  const monthAbbrev = MONTH_ABBREV[datePart.month - 1];
  if (monthAbbrev === undefined) return "";
  return `${monthAbbrev} ${datePart.year}`;
}

/** `{ month: 1–12, year }` → e.g. "May 2026" (start date only, no range). */
export function formatJobStartDate(
  startDate: YearMonth | null | undefined,
): string {
  return formatMonthYear(startDate);
}

/** E.g. "Aug 2018 — Apr 2025"; `endDate` null → "Aug 2018 — Present". */
export function formatJobDateRange(
  startDate: YearMonth | null | undefined,
  endDate: YearMonth | null | undefined,
): string {
  const formattedStart = formatMonthYear(startDate);
  if (!formattedStart) return "";
  if (endDate == null) {
    return `${formattedStart} — Present`;
  }
  return `${formattedStart} — ${formatMonthYear(endDate)}`;
}

/** E.g. "2018 — 2025"; ongoing → "2018 — Present". */
export function formatJobDatesToYearsOnly(
  startDate: YearMonth | null | undefined,
  endDate: YearMonth | null | undefined,
): string {
  const startYear = startDate?.year;
  if (startYear == null) {
    return formatJobDateRange(startDate, endDate);
  }
  if (endDate == null) {
    return `${startYear} — Present`;
  }
  const endYear = endDate.year;
  if (startYear === endYear) return String(startYear);
  return `${startYear} — ${endYear}`;
}
