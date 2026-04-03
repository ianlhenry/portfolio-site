import { describe, expect, it } from "vitest";
import { formatJobDateRange, formatJobDatesToYearsOnly } from "./dateUtils";

describe("formatJobDateRange", () => {
  it("returns empty string when start is missing", () => {
    expect(formatJobDateRange(undefined, undefined)).toBe("");
    expect(formatJobDateRange(undefined, { month: 4, year: 2025 })).toBe("");
  });

  it("formats a closed range with month and year", () => {
    expect(
      formatJobDateRange(
        { month: 8, year: 2018 },
        { month: 4, year: 2025 },
      ),
    ).toBe("Aug 2018 — Apr 2025");
  });

  it('uses "Present" when endDate is null', () => {
    expect(formatJobDateRange({ month: 1, year: 2024 }, null)).toBe(
      "Jan 2024 — Present",
    );
  });

  it("returns empty when start month is out of range", () => {
    expect(formatJobDateRange({ month: 0, year: 2020 }, null)).toBe("");
  });
});

describe("formatJobDatesToYearsOnly", () => {
  it("falls back to formatJobDateRange when start year is unavailable", () => {
    expect(formatJobDatesToYearsOnly(undefined, { month: 1, year: 2020 })).toBe(
      "",
    );
  });

  it('uses "Present" when endDate is null', () => {
    expect(formatJobDatesToYearsOnly({ month: 6, year: 2018 }, null)).toBe(
      "2018 — Present",
    );
  });

  it("returns a single year when start and end share the same year", () => {
    expect(
      formatJobDatesToYearsOnly(
        { month: 1, year: 2020 },
        { month: 12, year: 2020 },
      ),
    ).toBe("2020");
  });

  it("returns a year span when years differ", () => {
    expect(
      formatJobDatesToYearsOnly(
        { month: 8, year: 2012 },
        { month: 4, year: 2014 },
      ),
    ).toBe("2012 — 2014");
  });
});
