import "./App.css";
import { EducationBlock } from "./components/education/EducationBlock";
import { ExperienceBlock } from "./components/experience/ExperienceBlock";
import { Section } from "./components/Section";
import { Sidebar } from "./components/sidebar/Sidebar";
import {
  education,
  experience,
  person,
  projects,
  RESUME_PDF,
  volunteering,
} from "./data/resumeData";

export default function App() {
  return (
    <div className="app">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="shell layout">
        <Sidebar person={person} resumePdf={RESUME_PDF} />
        <div className="main-column">
          <main id="main" tabIndex={-1}>
            <Section id="highlights" title="Highlights">
              <p className="highlights-intro">{person.summary}</p>
              <ul className="highlights-list">
                {person.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </Section>
            <Section id="experience" title="Experience">
              <ExperienceBlock experience={experience} />
            </Section>
            <Section id="volunteering" title="Volunteering">
              <ExperienceBlock experience={volunteering} />
            </Section>
            <Section id="projects" title="Projects">
              <ExperienceBlock
                experience={projects}
                leftColumnStartDateOnly
              />
            </Section>
            <Section id="education" title="Education">
              <EducationBlock education={education} />
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}
