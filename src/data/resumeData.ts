import type {
  EducationEntry,
  Employer,
  Person,
  ResumePdf,
} from "../types/resumeTypes";

export const person = {
  name: "Ian Henry",
  title: "Staff Software Engineer",
  location: "Seattle, WA",
  email: "ian@ianhenry.ca",
  githubUrl: "https://github.com/ianlhenry",
  linkedinUrl: "https://www.linkedin.com/in/ianlhenry",
  summary:
    "Staff software engineer specializing in performance, reliability, and zero-to-one product launches.",
  highlights: [
    "Co-founded multiple greenfield initiatives at Meta, driving technical and organizational alignment from ideation to scale, reaching millions of users",
    "Diverse and deep experience across many platforms, languages and frameworks: JavaScript, React, C/C++, PHP/Hack, Python, C#, Objective-C",
    "Skilled at parachuting into new tech stacks and large legacy codebases, delivering impact quickly",
    "Cultivates cohesive team culture rooted in technical craftsmanship, dedicating time to onboard, mentor and teach engineers across all seniority levels",
    "Energized by data-driven performance and reliability optimization work",
  ],
} satisfies Person;

/** CV PDF — place file at this path under `public/` */
export const RESUME_PDF = {
  url: "/ian-henry-cv.pdf",
} satisfies ResumePdf;

/**
 * Each employer has `roles`: each entry is a team stint with
 * `teamName`, `jobTitle`, `startDate` / `endDate`, `languages`, and `jobResponsibilities` (bullets).
 *
 * Employer-level `startDate` / `endDate`: `{ month: 1–12, year: number }`.
 * Set employer `endDate` to `null` for a current position; the UI shows "Present".
 */
export const experience = [
  {
    company: "Meta",
    companyUrl: "https://www.meta.com/",
    startDate: { month: 8, year: 2018 },
    endDate: { month: 4, year: 2025 },
    roles: [
      {
        jobTitle: "Staff Software Engineer",
        teamName: "Instagram for Oculus",
        startDate: { month: 5, year: 2024 },
        endDate: { month: 4, year: 2025 },
        languages: [
          "JavaScript",
          "React Native",
          "GraphQL",
          "Python",
        ],
        jobResponsibilities: [
          "Early member of team building brand new Instagram app for Oculus VR headsets",
          "Owned most ambiguous and complex features, requiring full-stack expertise across front-end (JavaScript, React Native) and back-end GraphQL and REST APIs in Python",
          "Onboarded performance and reliability metrics, dashboards, and alerting",
          "Tech lead for the core app surfaces team post-launch: managed roadmap, scoped feature work, collaborated with PM and design team, onboarded and mentored junior engineers",
        ],
      },
      {
        jobTitle: "Staff Software Engineer",
        teamName: "Messenger for iOS & Android",
        startDate: { month: 2, year: 2024 },
        endDate: { month: 5, year: 2024 },
        languages: ["Java", "C++", "PHP"],
        jobResponsibilities: [
          "Tech lead for short-term high-priority cross-org initiative tasked with improving media quality for the Messenger mobile apps",
          "Reverse engineered huge Java, C++ and PHP codebases for Messenger mobile and authored doc summarizing problem domain, technical/architectural overview, workstreams",
          "Built system to quantify quality of media sent and received via MS-SSIM, and built out roadmap of features to improve quality",
        ],
      },
      {
        jobTitle: "Staff Software Engineer",
        teamName: "Messenger for Desktop, Foundations",
        startDate: { month: 1, year: 2022 },
        endDate: { month: 2, year: 2024 },
        languages: ["JavaScript", "C++", "C"],
        jobResponsibilities: [
          "Engineer focused on product performance and reliability; solved hardest technical problems requiring deep expertise in JavaScript and C/C++ codebases",
          "Data, metrics and observability champion: ensured performance and reliability of all features could be quantified and visualized on dashboards",
          "Crash reliability expert: consistently solved obscure crashes and improved reliability of crash reporting infrastructure in JavaScript and C++",
          "Performance expert: significantly improved speed of core app functionality (app launch, message sending, chat thread loading), leveraging framework and OS tooling",
          "Release process owner: ensured new product releases maintained a high quality bar",
          "Onboarded, mentored and taught junior and senior engineers across the org",
        ],
      },
      {
        jobTitle: "Senior Software Engineer",
        teamName: "Messenger for Desktop V2, Product",
        startDate: { month: 7, year: 2020 },
        endDate: { month: 1, year: 2022 },
        languages: [
          "JavaScript",
          "React Native",
          "C++",
          "PHP",
        ],
        jobResponsibilities: [
          "Product engineer, fully rebuilding Messenger Desktop using React Native (for improved performance and reliability)",
          "Go-to engineer for the hardest technical problems across the full tech stack, C/C++ and JavaScript",
          "Wrote a codegen engine in JavaScript that generates 30k+ lines of C++",
          "Data and telemetry infrastructure in JavaScript, C++, PHP/Hack",
          "Build/release/continuous integration tooling/automation in PHP/Hack, JavaScript",
          "Data and metrics expert, partnering with data science to ensure that the performance and reliability of all features can be quantified and visualized on dashboards",
          "Tech lead for launch, managed team of 10+ engineers across multiple teams tasked with ensuring engagement metric match v1: tracked work, ran daily meetings, communicated progress",
        ],
      },
      {
        jobTitle: "Software Engineer II",
        teamName: "Messenger for Desktop, Product",
        startDate: { month: 8, year: 2018 },
        endDate: { month: 7, year: 2020 },
        languages: ["JavaScript", "React", "Electron", "PHP"],
        jobResponsibilities: [
          "Built multiple prototype products on desktop using JavaScript/React and PHP",
          "Shipped the first version of Messenger for Desktop, built using Electron and JavaScript/React",
          "Expertise in authentication (single sign on), Windows push notifications",
          "Tech lead for launch, for build/release infrastructure, and release process",
          "Reliability expert, reduced crash rate post-launch by 3x",
        ],
      },
    ],
  },
  {
    company: "Microsoft",
    companyUrl: "https://www.microsoft.com/",
    startDate: { month: 8, year: 2012 },
    endDate: { month: 8, year: 2018 },
    roles: [
      {
        jobTitle: "Software Engineer II",
        teamName: "Web Services",
        startDate: { month: 8, year: 2017 },
        endDate: { month: 8, year: 2018 },
        languages: ["C#", "ASP.NET"],
        jobResponsibilities: [
          "Built, maintained, and monitored scalable web services for the Microsoft Universal Store using C# and ASP.NET WebAPI.",
          "On-call engineer responsible for keeping various high-volume services running 24/7; investigated, debugged and quickly resolved issues in order to maintain 99.9% reliability SLA on high-volume services.",
        ],
      },
      {
        jobTitle: "Software Engineer II",
        teamName: "First Party Apps",
        startDate: { month: 7, year: 2015 },
        endDate: { month: 8, year: 2017 },
        languages: ["C#", "XAML", "C++/CX", "C++", "Objective-C"],
        jobResponsibilities: [
          "Worked across the full stack to implement features in the Groove Music App (C#, C++/CX, XAML) and the Office for iOS/Mac (Objective-C)",
          "Tech lead for brand new Universal Windows Podcast app; wrote the design doc, onboarded and mentored new engineers, built core parts of the app using XAML and C# including background audio support, subscription management, collection page, and more",
        ],
      },
      {
        jobTitle: "Software Engineer II",
        teamName: "Windows Phone OS & Apps",
        startDate: { month: 8, year: 2014 },
        endDate: { month: 6, year: 2015 },
        languages: ["C++", "C#"],
        jobResponsibilities: [
          "Windows Phone mobile engineer, worked in C++ and C# across the Windows Phone OS codebase; implemented new features in Kid's Corner, Action Center, Settings, Notifications, Alarms, Podcast app, and others",
          "Designed and implemented a major enterprise email security feature that required changes to core Windows Phone OS components across the entire stack, including the e-mail app, the email sync service, the database layer, and the email notification service",
        ],
      },
      {
        jobTitle: "Software Engineer",
        teamName: "Windows Phone Engineering Systems",
        startDate: { month: 8, year: 2012 },
        endDate: { month: 4, year: 2014 },
        languages: [
          "ASP.NET MVC",
          "ASP.NET WebAPI",
          "JavaScript",
          "jQuery",
          "CSS",
          "C#",
        ],
        jobResponsibilities: [
          "Built a web application to manage build and test runs for the Windows Phone OS codebase using ASP.NET MVC, ASP.NET WebAPI, JavaScript, jQuery and CSS",
          "Implemented new features and fixed bugs in existing tools and services in C#",
        ],
      },
    ],
  },
] satisfies Employer[];

export const volunteering = [
  {
    company: "Mountaineers",
    companyUrl: "https://www.mountaineers.org/blog/technology-changelog",
    startDate: { month: 11, year: 2025 },
    endDate: null,
    roles: [
      {
        jobTitle: "Software Engineer",
        teamName: "",
        startDate: { month: 11, year: 2025 },
        endDate: null,
        languages: ["Javascript", "React", "Python", "Plone/Zope", "Cursor AI IDE", "Claude Code"],
        jobResponsibilities: [
          "Implemented various website features requested by trip leaders and members using Javascript & Python in a Plone & Zope based tech stack",
        ],
      },
    ],
  },
] satisfies Employer[];

export const projects = [
  {
    company: "BetaCast",
    companyUrl: "https://betacast.ianhenry.ca/",
    startDate: { month: 5, year: 2026 },
    endDate: null,
    roles: [
      {
        jobTitle: "",
        teamName: "",
        startDate: { month: 5, year: 2026 },
        endDate: null,
        languages: [
          "Javascript",
          "React",
          "Cursor AI IDE",
        ],
        jobResponsibilities: [
          "Built a web application using agentic flows with Cursor AI IDE to aggregate mountaineering trip-planning resources for a specific location into a single interface, including weather forecasting, snow depth, air quality, mapping tools, and others.",
        ],
      },
    ],
  },
] satisfies Employer[];

export const education = [
  {
    degree: "Bachelor of Applied Science in Computer Engineering",
    school: "University of British Columbia",
    location: "Vancouver, Canada",
    startYear: 2008,
    endYear: 2012,
  },
] satisfies EducationEntry[];
