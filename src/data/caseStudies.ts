import Worklog from "../assets/worklog.png";
import contactApp from "../assets/contactApp.png";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  meta: {
    role: string;
    timeline: string;
    team: string;
    stack: string[];
  };
  overview: string;
  problem: {
    summary: string;
    challenges: string[];
  };
  goals: string[];
  process: {
    phases: { title: string; description: string }[];
  };
  solution: {
    summary: string;
    features: { title: string; description: string }[];
  };
  outcomes: {
    summary: string;
    metrics: { label: string; value: string }[];
  };
  reflection: {
    learned: string[];
    next: string[];
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "worklog-tracker",
    title: "Worklog Tracker",
    subtitle:
      "A simpler project-management layer for remote teams who were new to Jira — track tasks, daily hours, and key metrics without drowning in Atlassian complexity.",
    cover: Worklog,
    liveUrl: "https://www.bmpcworklogtracker.com/",
    githubUrl: "https://github.com/",
    tags: ["WebApp Development", "Jira Integration", "Fullstack"],
    meta: {
      role: "Product & Fullstack Developer",
      timeline: "Built for a small-to-mid remote team",
      team: "Solo build with stakeholder feedback from remote operators",
      stack: ["Jira API", "Jira OAuth", "MongoDB", "Node.js", "NextJS"],
    },
    overview:
      "Worklog Tracker sits on top of Jira for small and mid-size remote teams that adopted Atlassian but struggled to use it day to day. Instead of forcing everyone through Jira’s full surface, the app uses the Jira API and OAuth to pull the work that matters, then adds a focused experience for logging hours, tracking what people worked on, viewing key metrics, and running team habits Jira does not cover well — like attendance and automated weekly report emails.",
    problem: {
      summary:
        "The team needed project management, but Jira was too complex for people who were new to both remote work rituals and Atlassian products. Contributors often felt lost: unclear which issues to update, how to log time, or how managers would see progress. Leadership still wanted Jira as the system of record — just not as the only interface everyone had to master.",
      challenges: [
        "Newcomers to project management got overwhelmed by Jira’s boards, fields, and workflows.",
        "Remote teammates needed a clear view of their tasks and what they actually worked on each day.",
        "Daily hour logging and visibility into effort were inconsistent or buried inside Jira.",
        "Managers lacked simple metrics and a reliable weekly pulse without manually assembling reports.",
        "The team still needed Jira-backed data — rebuilding everything from scratch was not an option.",
      ],
    },
    goals: [
      "Give remote teammates a simpler place to see tasks and log daily hours against real Jira work.",
      "Surface key metrics managers care about without requiring deep Jira expertise.",
      "Authenticate securely with Jira OAuth and stay synced through the Jira API.",
      "Extend beyond core Jira with team-fit features like attendance and weekly report emails.",
      "Stay lightweight enough for small-to-mid remote teams that find full Atlassian tooling too heavy.",
    ],
    process: {
      phases: [
        {
          title: "Understanding the Jira gap",
          description:
            "Mapped where remote teammates got stuck in Jira — finding assigned work, logging time, and explaining weekly progress — versus what managers still needed from Atlassian as the source of truth.",
        },
        {
          title: "Integration architecture",
          description:
            "Designed auth and data flow around Jira OAuth and the Jira API, with MongoDB storing app-specific state (sessions, attendance, report preferences) that Jira alone did not model cleanly.",
        },
        {
          title: "Focused product UI",
          description:
            "Built a narrower experience than Jira: task visibility, daily worklogs, hour totals, and metric dashboards aimed at people still learning project management habits.",
        },
        {
          title: "Team workflows on top of Jira",
          description:
            "Layered features Jira did not cover for this team — attendance tracking and automated weekly report emails — then iterated with the remote group on clarity and trust in the sync.",
        },
      ],
    },
    solution: {
      summary:
        "Worklog Tracker keeps Jira as the backend for issues and work history, while the product itself becomes the friendly front door: OAuth into Jira, sync tasks and worklogs via the API, persist team workflows in MongoDB, and present a dashboard tuned for remote teammates who are not Jira power users.",
      features: [
        {
          title: "Jira OAuth & API sync",
          description:
            "Secure sign-in with Jira OAuth and continuous use of the Jira API so tasks and worklogs stay tied to the team’s Atlassian workspace.",
        },
        {
          title: "Task & daily work tracking",
          description:
            "A clear view of what people are assigned, what they worked on, and how many hours they logged each day — without navigating Jira’s full UI.",
        },
        {
          title: "Key metrics dashboard",
          description:
            "At-a-glance metrics for effort, activity, and progress so managers and teammates share the same simple signal of how the week is going.",
        },
        {
          title: "Attendance",
          description:
            "Lightweight attendance tracking suited to remote routines, stored alongside the Jira-backed work data in MongoDB.",
        },
        {
          title: "Weekly report emails",
          description:
            "Automated weekly report emails that summarize logged work and status, reducing the manual chase for updates across time zones.",
        },
      ],
    },
    outcomes: {
      summary:
        "Placeholder outcomes for review — swap in measured adoption and time-saved figures when you have them.",
      metrics: [
        { label: "Time to find & update work", value: "Much faster vs Jira-only" },
        { label: "Daily hours visibility", value: "Consistent logs" },
        { label: "Weekly reporting", value: "Automated emails" },
        { label: "Fit for team size", value: "SMB remote teams" },
      ],
    },
    reflection: {
      learned: [
        "For teams new to project management, reducing cognitive load mattered more than exposing every Jira capability.",
        "Building on Jira (API + OAuth) preserved the system of record while still letting the product feel approachable.",
        "MongoDB was the right place for attendance, report schedules, and other team workflows that sit beside — not inside — Jira issues.",
        "Features like weekly emails and attendance turned the tool from a thinner Jira UI into something the remote team actually needed.",
      ],
      next: [
        "Tighten onboarding for first-time Jira users so the first login maps clearly to their assigned work.",
        "Expand metric views managers request most after a few reporting cycles.",
        "Refine attendance and email digests based on how different remote roles actually use the weekly pulse.",
      ],
    },
  },
  {
    slug: "contacts-manager",
    title: "Contacts Manager",
    subtitle:
      "A desktop-oriented contact and attendance workflow tool for organizing people, groups, and check-in history in one place.",
    cover: contactApp,
    githubUrl: "https://github.com/murdoch2439/online-attendance-manager",
    tags: ["Desktop Development", "CRUD Systems", "UX"],
    meta: {
      role: "Designer & Desktop App Developer",
      timeline: "6 weeks · 2024",
      team: "Solo product ownership",
      stack: ["Electron / Desktop UI", "Local storage / DB", "TypeScript"],
    },
    overview:
      "Contacts Manager started as a practical need: keep people records, group membership, and attendance-style check-ins organized without depending on a brittle spreadsheet. The focus was reliability, clear list/detail patterns, and a workflow that staff could learn in a single session.",
    problem: {
      summary:
        "Organizers were managing contact lists and attendance across spreadsheets and paper notes. Duplicate names, lost phone numbers, and unclear who attended which session created follow-up and communication risk.",
      challenges: [
        "Spreadsheets encouraged duplicate and inconsistent records.",
        "No clear relationship between people, groups, and event attendance.",
        "Searching and updating contacts during live sessions was slow.",
        "Exporting clean lists for messaging or reports required cleanup every time.",
      ],
    },
    goals: [
      "Provide a single place to create, edit, and find contacts quickly.",
      "Support grouping people for events, teams, or cohorts.",
      "Capture attendance / presence history linked to people records.",
      "Keep the UI familiar for users coming from spreadsheet workflows.",
    ],
    process: {
      phases: [
        {
          title: "Workflow mapping",
          description:
            "Documented the real session flow: register people, assign to a group, mark presence, then export or follow up. Removed steps that only existed because of spreadsheet limitations.",
        },
        {
          title: "Data model design",
          description:
            "Modeled contacts, groups, and attendance records with clear ownership so history stays attached to the person even when group membership changes.",
        },
        {
          title: "List / detail UI",
          description:
            "Designed a desktop-friendly layout with searchable lists, inline actions, and a detail panel for edits without constant page switching.",
        },
        {
          title: "Hardening for real use",
          description:
            "Added validation, duplicate warnings, and safe delete/confirm patterns so operators could move fast without destroying data.",
        },
      ],
    },
    solution: {
      summary:
        "The app is a focused contacts workstation: search, edit, group, and record presence — with an emphasis on clarity over visual novelty.",
      features: [
        {
          title: "Contact directory",
          description:
            "Searchable list with core fields (name, phone, email, notes) and quick edit from the detail view.",
        },
        {
          title: "Groups & cohorts",
          description:
            "Assign people to groups for events or programs without duplicating their master record.",
        },
        {
          title: "Attendance / check-in",
          description:
            "Mark presence against a session and keep a history that can be reviewed later.",
        },
        {
          title: "Export-ready lists",
          description:
            "Pull clean contact sets for messaging, printing, or external tools without spreadsheet cleanup.",
        },
      ],
    },
    outcomes: {
      summary:
        "Placeholder outcomes for review — replace with real adoption and time-saved metrics.",
      metrics: [
        { label: "Lookup time", value: "~3s" },
        { label: "Duplicate records", value: "-70%" },
        { label: "Session check-in", value: "2× faster" },
        { label: "Export cleanup", value: "Near zero" },
      ],
    },
    reflection: {
      learned: [
        "Users trusted the product when search and edit felt instantaneous — performance was part of UX.",
        "Confirmations and duplicate warnings prevented more support issues than any tutorial.",
        "Spreadsheet refugees needed familiar patterns (columns, filters) before adopting new concepts.",
      ],
      next: [
        "Improve bulk import from CSV with clearer mapping and error reporting.",
        "Add optional cloud sync for multi-device staff while keeping offline-first behavior.",
        "Surface simple attendance analytics (streaks, no-shows) without cluttering the core workflow.",
      ],
    },
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined =>
  caseStudies.find((study) => study.slug === slug);
