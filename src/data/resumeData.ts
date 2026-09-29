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
    "Staff software engineer with 13 years of experience shipping consumer apps at Meta and Microsoft, from zero-to-one launches to products at scale.",
  highlights: [
    "Co-founded multiple greenfield initiatives at Meta, driving technical and organizational alignment from ideation to scale, reaching millions of users.",
    "Diverse and deep experience across many platforms, languages and frameworks: JavaScript, React, C/C++, PHP/Hack, Python, C#, Objective-C.",
    "Product-minded engineer who cares about UX: designs independently when needed, partners closely with designers, and turns Figma designs into polished, pixel-perfect UI.",
    "Skilled at parachuting into new tech stacks and large legacy codebases, delivering impact quickly.",
    "Brings a measurement-first approach: defines metrics, builds dashboards, and uses data to guide product decisions.",
    "Energized by cross-team collaboration, cultivating cohesive team culture rooted in technical craftsmanship, dedicating time to onboard, mentor and teach engineers across all seniority levels.",
  ],
} satisfies Person;

/** CV PDF — place file at this path under `public/` */
export const RESUME_PDF = {
  url: "/ian-henry-cv.pdf",
} satisfies ResumePdf;

/**
 * Each employer has `roles`: each entry is a team stint with
 * `teamName`, `jobTitle`, `startDate` / `endDate`, `languages`, and `jobResponsibilities`.
 * A responsibility is a string, or `{ text, subBullets }` for one level of nested bullets.
 * Responsibility and sub-bullet text can include Markdown-style links: `[label](https://…)`.
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
          "Figma"
        ],
        jobResponsibilities: [
          { 
            text: "Early member of the team building a new Instagram app for Oculus VR, owning ambiguous and technically complex features end to end:", 
            subBullets: [
              "Teen accounts: built quiet hours and daily time limits, porting existing backend APIs to GraphQL for reuse and building the front end from scratch. Covered the unusually complex business logic thoroughly with tests and team bug bashes.",
              "Content reporting: evaluated architecture options by studying how reporting worked on Instagram for web, iOS, and Android, then chose a novel approach that reused code across platforms, reducing development and maintenance costs while meeting all legal requirements.",
              "Settings: embedded Instagram's web settings into the native Oculus app, avoiding a costly native rebuild and ongoing maintenance. Restyled it to match the native app's look and feel, and made sure settings changes stayed in sync with the app.",
              "Privacy features: delivered a complex set of legally required privacy features under strict deadlines. Identified and coordinated stakeholders across Instagram, gathered requirements, and built the implementations with no margin for error.",
            ]},
          "UX design: took on design independently when designer bandwidth was limited, then partnered with the design team to iterate and implement final Figma specs pixel-perfect.",
          "Logging and observability: instrumented most core app functionality so we could track usage, reliability, and performance on dashboards, with alerting. Scaled the effort across the team by writing best-practice docs, building helper APIs, tracking telemetry tasks for new features, and giving tech talks.",
          "Leadership: led the core app surfaces team after launch, managing the roadmap, scoping work, partnering with PM and design, and mentoring junior engineers.",
        ],
      },
      {
        jobTitle: "Staff Software Engineer",
        teamName: "Messenger for iOS & Android",
        startDate: { month: 2, year: 2024 },
        endDate: { month: 5, year: 2024 },
        languages: ["Java", "C++", "PHP", "Kotlin"],
        jobResponsibilities: [
          {
            text: "Tech lead: led a short-term, high-priority, cross-org initiative to improve media quality in Messenger's mobile apps, joining with no prior knowledge of the Android codebase.",
            subBullets: [
              "Ramp-up: quickly learned the Android app's architecture and diagrammed every component affecting media quality across the full stack, from Java/Kotlin UI code through the C/C++ native layer to server-side PHP/Hack.", 
              "Alignment: met with stakeholders across the Messenger org, including PM, data science, program management, and several performance, rendering, and media platform teams, to understand their view of the problem.",
              "Strategy: wrote a state-of-media-quality document for the cross-org working group. It mapped user research findings to existing metrics to expose gaps, explained how image sending and rendering worked, identified the levers for improving quality, and divided the work into owned workstreams with roadmaps.",
              "Measurement: began building image quality metrics, adding MS-SSIM scoring on the sender side and laying the groundwork for receiver-side scoring. The initiative was wound down in a reorg before launch."
            ]
          },
        ],
      },
      {
        jobTitle: "Senior → Staff Software Engineer",
        teamName: "Messenger for Desktop, Foundations",
        startDate: { month: 1, year: 2022 },
        endDate: { month: 2, year: 2024 },
        languages: ["JavaScript", "C++", "C", "React Native"],
        jobResponsibilities: [
          {
            text: "Crash reliability: set the direction, then cut crashes by more than two-thirds, first through my own work and then by leading a team.",
            subBullets: [
              "Made the case for prioritizing crash reliability: wrote posts on why it mattered, what we should aim for, and how to get there. Set goals and shared regular status updates and results with the org.",
              "Consistently solved the hardest crashes in JavaScript and C++, cutting the share of users experiencing crashes from 2% to 1% in six months. Improved the crash reporting infrastructure itself (reliability, symbolication success rate, and stack trace quality) and added richer crash metadata to make crashes faster to diagnose.",
              "Led a workstream of 4 engineers that further improved tooling and fixed crashes, bringing that share down to 0.6% on Windows and 0.4% on macOS.",
            ]
          },
          "Incident response: trusted go-to engineer for the most complex production incidents, resolving dozens of high-severity issues across JavaScript and C++, often under time pressure.",
          {
            text: "Performance: set the direction, measuring and improving the speed of the most critical user flows.",
            subBullets: [
              "Defined the performance strategy: wrote posts on why performance mattered, which flows to prioritize, and how to improve them. Built accurate telemetry for every core scenario, analyzed the data to set goals, and shared regular status updates and results.",
              "Drove many performance improvements across key flows, including cold start, message sending, and chat thread loading. The most impactful change cut cold-start latency by 20% and increased daily active users by 1.2%. Added better tracing to make performance problems easier to diagnose.",
              "Performance tech lead for the end-to-end encrypted messaging launch: identified the biggest gaps and opportunities, fixed many issues directly, and mentored product engineers across teams to fix others, including an in-person tech talk for the team in London.",
            ]
          },
          {
            text: "Release process: led the release process for Messenger Desktop, keeping quality high across every release.",
            subBullets: [
              "Defined and documented the release process, including cadence, staged rollout (alpha, beta, production), on-call responsibilities, and metric regression thresholds.",
              "Caught and fixed metric regressions during beta before they reached production, sharing knowledge with on-call along the way.",
              "Ran release review meetings, then deliberately handed them off to on-call engineers so the whole team learned how releases work.",
            ]
          },
          {
            text: "Mentorship and knowledge sharing: onboarded, mentored, and taught engineers at all levels across the org.",
            subBullets: [
              "Held regular one-on-one mentoring sessions with engineers on my team and beyond.",
              "Regularly wrote detailed posts explaining how I solved difficult problems, so others could apply the same approaches.",
              "Gave dozens of tech talks on crashes, performance, release processes, and other areas.",
            ]
          }
        ],
      },
      {
        jobTitle: "Senior Software Engineer",
        teamName: "Messenger for Desktop V2",
        startDate: { month: 7, year: 2020 },
        endDate: { month: 1, year: 2022 },
        languages: [
          "JavaScript",
          "React Native",
          "C++",
          "PHP",
        ],
        jobResponsibilities: [
          "Rebuild: part of the team that rebuilt Messenger Desktop from scratch in React Native to improve performance and reliability.",
          {
            text: "Launch parity lead: led a cross-functional team of 10+ engineers and data scientists that investigated and fixed engagement regressions in the rebuilt app, taking it to a 100% rollout.",  
            subBullets: [
              "Ran daily war-room meetings, tracked every investigation, assigned owners and next steps, and posted regular updates to keep the team and leadership informed.",
              "Drove the most complex investigations myself through data analysis, hypothesis generation, and experiments. Found the root cause of a major daily-active-user regression: missing telemetry from an unreliable new telemetry stack.",
              "Investigated a message-sending regression on Windows by analyzing churn, user behavior, locales, and message types, added new telemetry, and designed and ran an experiment to test whether missing spell check was reducing sends.",
              "Found that open-at-login wasn't enabled by default on macOS and wasn't supported at all for Windows Store users, a cause of engagement regressions. Fixed both, which helped close the gap.",
            ]
          },
          "Code generation: built an engine that produced 171 APIs across 457 files, about 30,000 lines of JavaScript-to-C++ bindings, eliminating hand-written boilerplate.",
          "Cross-stack features: one of the few engineers working across both JavaScript and C/C++, building some of the most complex features, such as rich deep linking from Messenger on the web (via a local HTTP server) and local and push notifications.",
          "Telemetry and data: owned the app's data and telemetry, partnering with data science to keep metrics accurate and adding instrumentation to support the launch.",
          "Build and release: developed build, release, and update infrastructure, ran release review meetings, fixed crashes, and mentored another engineer through leading the rollout.", 
        ],
      },
      {
        jobTitle: "Software Engineer II → Senior Software Engineer",
        teamName: "Messenger for Desktop V1",
        startDate: { month: 8, year: 2018 },
        endDate: { month: 7  , year: 2020 },
        languages: ["JavaScript", "React", "Electron", "PHP"],
        jobResponsibilities: [
          "Early team member: joined the small team building Messenger's first desktop app from scratch in Electron and React, starting with its predecessor, Messenger Video.",
          {
            text: "Feature work: built and owned key parts of the app, including:",
            subBullets: [
              "Authentication: built a secure single sign-on framework with security engineering, used by 72% of users who logged in.",
              "Push notifications: built Windows push notifications for calls, spanning the desktop client, push infrastructure, and Microsoft's platform.",
              "Workplace Chat: created the Workplace Chat version of the app, which led that team to adopt Messenger Desktop as their platform.",
            ]
          },
          "Launch and migration: planned and led the migration of legacy Windows Store Messenger users to the new app, growing daily active users from 1k to 600k and monthly to over 3M. Kept users logged in by reverse-engineering the legacy app's token storage and building secure token exchange with security teams.",
          {
            text: "Scaling after launch:",
            subBullets: [
              "Release process: owned the release process as ship captain, fully automating Windows and Mac app store submissions.",
              "Auto-update: led 4 engineers to overhaul auto-update, getting 85%+ of users onto current versions.",
              "Reliability: led 6 engineers investigating a crash regression, cutting the share of Windows users experiencing crashes from 5.6% to about 2%.",
            ]
          },
          "Team: mentored an intern from project scoping through a return offer, onboarded new teammates, and ran a biweekly tech talk series.",
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
          "On-call engineer responsible for keeping various high-volume services running 24/7; resolved production issues quickly to maintain 99.9% reliability SLA on high-volume services.",
        ],
      },
      {
        jobTitle: "Software Engineer II",
        teamName: "First Party Apps",
        startDate: { month: 7, year: 2015 },
        endDate: { month: 8, year: 2017 },
        languages: ["C#", "XAML", "C++/CX", "C++", "Objective-C"],
        jobResponsibilities: [
          {
            text: "Mobile and desktop developer across a variety of first-party apps:",
            subBullets: [
              "Podcast App: tech lead for brand new app; wrote the design doc, onboarded and mentored new engineers, built core parts of the app using XAML and C# including background audio support, subscription management, collection page, and more.",
              "Groove Music App: implemented features using C#, C++/CX and XAML.",
              "Office for iOS/Mac: built new features using Objective-C."
            ],
          },
        ],
      },
      {
        jobTitle: "Software Engineer II",
        teamName: "Windows Phone OS & Apps",
        startDate: { month: 8, year: 2014 },
        endDate: { month: 6, year: 2015 },
        languages: ["C++", "C#"],
        jobResponsibilities: [
          "Windows Phone mobile engineer, worked in C++ and C# across the Windows Phone OS codebase; implemented new features in Kid's Corner, Action Center, Settings, Notifications, Alarms, Podcast app, and others.",
          "Designed and built a major enterprise email security feature, changing core Windows Phone OS components across the stack: the email app, sync service, database layer, and notification service.",
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
          "Front-end web developer, building applications to manage build and test runs for the Windows Phone OS codebase using ASP.NET MVC, ASP.NET WebAPI, JavaScript, jQuery and CSS.",
        ],
      },
    ],
  },
] satisfies Employer[];

export const volunteering = [
  {
    company: "The Mountaineers",
    companyUrl: "https://www.mountaineers.org",
    startDate: { month: 11, year: 2025 },
    endDate: null,
    roles: [
      {
        jobTitle: "Software Engineer",
        teamName: "",
        startDate: { month: 11, year: 2025 },
        endDate: null,
        languages: ["JavaScript", "React", "Python", "Plone/Zope", "Cursor AI", "Claude Code"],
        jobResponsibilities: [
          "Implemented various website features and performance improvements requested by trip leaders and members using JavaScript & Python in a Plone & Zope based tech stack; see the [Mountaineers Technology Changelog](https://www.mountaineers.org/blog/technology-changelog) for details.",
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
