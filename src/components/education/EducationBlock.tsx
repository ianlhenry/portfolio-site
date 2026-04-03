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
          <h3>{educationEntry.degree}</h3>
          <p className="institution">{educationEntry.school}</p>
          <p className="location">{educationEntry.location}</p>
          <p className="detail">
            {educationEntry.startYear}–{educationEntry.endYear}
          </p>
        </div>
      ))}
    </>
  );
}
