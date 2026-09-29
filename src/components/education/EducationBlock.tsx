import type { EducationEntry } from "../../types/resumeTypes";

export type EducationBlockProps = {
  education: EducationEntry[];
};

export function EducationBlock(props: EducationBlockProps) {
  const { education } = props;
  return (
    <>
      {education.map((educationEntry) => (
        <div key={educationEntry.degree} className="education-item">
          <div className="education-heading">
            <h3>{educationEntry.degree}</h3>
            <span className="role-dates">
              {educationEntry.startYear} — {educationEntry.endYear}
            </span>
          </div>
          <p className="institution">
            {educationEntry.school} · {educationEntry.location}
          </p>
        </div>
      ))}
    </>
  );
}
