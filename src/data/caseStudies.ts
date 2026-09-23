import Worklog from "../assets/worklog.png";
import contactApp from "../assets/contactApp.png";
import HymnVault from "../assets/hymnvault-2.png";
import Hymner from "../assets/hymner.png";

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
    slug: "hymnvault",
    title: "HymnVault",
    subtitle:
      "A web app where churches and publishers curate songbooks and lyrics, then publish them to the congregation’s reader app.",
    cover: HymnVault,
    liveUrl: "https://hymn-vault.vercel.app/",
    tags: ["WebApp Development", "Publishing", "Product Design"],
    meta: {
      role: "Product & Fullstack Developer",
      timeline: "Organisation platform",
      team: "Built for churches, publishers, and hymn editors",
      stack: ["Web application", "Organisation dashboard", "Publishing workflow", "Sync API"],
    },
    overview:
      "HymnVault is the organisation side of a two-part hymnal system. Churches and publishers sign in, build songbooks, mark lyrics up as structure rather than a blob of text, and decide what is allowed to reach Hymner — the free reader app. Drafts stay private. Nothing lands on a phone until it is published.",
    problem: {
      summary:
        "A hymnal is not a folder of documents. Congregations still needed one maintained place for the songs they actually sing, with a clear path from a private draft to every phone in the room — without treating lyrics as unstructured files.",
      challenges: [
        "Songbooks lived in mixed documents that did not preserve verses, choruses, and refrains as structure.",
        "Editors needed to work in private before anything reached the congregation.",
        "Publishing needed a gate: someone writes, someone approves, and not everyone should be able to push a book live.",
        "A bilingual or multi-language collection cannot assume one language per book.",
        "Once a hymn is on a phone, renaming a book later must not orphan what people already downloaded.",
      ],
    },
    goals: [
      "Give an organisation one dashboard to curate songbooks and lyrics.",
      "Model verses, choruses, and refrains so the same hymn renders correctly on the web and in the reader.",
      "Keep drafts invisible until the organisation publishes them.",
      "Separate who can edit from who can approve and publish.",
      "Expose an ordered sync feed so Hymner can fetch only what it missed.",
    ],
    process: {
      phases: [
        {
          title: "Separate the organisation from the reader",
          description:
            "Split the product into HymnVault (curation and publishing) and Hymner (reading). Organisations sign in. Readers never need an account.",
        },
        {
          title: "Model the hymn, not the document",
          description:
            "Recorded verses, choruses, and which verses take a refrain as structure, so rendering does not guess from a text blob. Language is set per song, so a bilingual book stays coherent.",
        },
        {
          title: "Two approval gates",
          description:
            "A platform administrator reviews a new organisation. Inside the organisation, reviewers decide which songbooks are ready. Work in progress never reaches the public API.",
        },
        {
          title: "A sync feed instead of a file drop",
          description:
            "Each change gets an ordered version. Phones ask for what they missed. A songbook keeps a stable identity, so a later rename does not break a hymn already saved on a device.",
        },
      ],
    },
    solution: {
      summary:
        "HymnVault is the signed-in dashboard: build books and songs, invite editors without giving them publish rights, approve what goes out, and see what has actually reached the app. Hymner consumes only what passed those gates.",
      features: [
        {
          title: "Organisation dashboard",
          description:
            "Songbooks, songs, approvals, people, and a clear view of what is still draft versus what is live in the reader.",
        },
        {
          title: "Structured lyrics",
          description:
            "Verses, choruses, and refrains are stored as structure, so a hymn renders the same way in the dashboard and on a phone.",
        },
        {
          title: "Roles and private drafts",
          description:
            "Editors can prepare lyrics. Reviewers and admins decide what is published. Unpublished work stays inside the organisation.",
        },
        {
          title: "Ordered sync for Hymner",
          description:
            "Published changes are versioned. The mobile app syncs the delta when it is online and keeps that library for offline reading.",
        },
      ],
    },
    outcomes: {
      summary:
        "The public platform is live for organisations to register, curate, and publish. Reader-side delivery is handled by Hymner.",
      metrics: [
        { label: "Reader accounts", value: "None required" },
        { label: "Drafts", value: "Private until publish" },
        { label: "Approval", value: "Org + platform gates" },
        { label: "Delivery", value: "Sync feed to Hymner" },
      ],
    },
    reflection: {
      learned: [
        "Treating a hymn as structure — not a document — is what makes the same song trustworthy on a dashboard and on a phone.",
        "Publishing had to be a deliberate gate. Accidental visibility would break trust for churches still editing lyrics.",
        "Stable book identity matters more than the display name, because devices keep songs long after an edit.",
      ],
      next: [
        "Keep tightening the editor workflow for people typing up large existing hymnals.",
        "Expand how organisations see what has actually synced out to readers.",
      ],
    },
  },
  {
    slug: "hymner",
    title: "Hymner",
    subtitle:
      "The offline-first mobile reader for HymnVault: a congregation picks its church once, then sings from a library that stays on the phone.",
    cover: Hymner,
    tags: ["Mobile Development", "Offline-first"],
    meta: {
      role: "Mobile Product Developer",
      timeline: "Companion reader for HymnVault",
      team: "Built for people in the pews, not for editors",
      stack: ["Mobile app", "Offline-first storage", "Remote sync", "Local library"],
    },
    overview:
      "Hymner is the free reader that sits opposite HymnVault. There is no account and no sign-in. On first launch a person chooses their church, the published library downloads, and from then on the songs live on the device. When the phone has a connection it syncs with the remote database and saves what changed locally, so the next time there is no signal the library is still there to read.",
    problem: {
      summary:
        "A church hall is often the place with the worst connection. Printed hymnals and shared files do not update cleanly, and asking a whole congregation to create accounts just to read lyrics is the wrong trade.",
      challenges: [
        "Readers need the full library with no signal — offline is the normal case, not a fallback.",
        "Updates still have to arrive when a phone is online, without making people re-download everything.",
        "Setup has to be one choice (which church), not an account, password, or profile.",
        "Finding a hymn by number has to follow hymnal order, not plain text sorting.",
        "Favourites and reading state should stay on the device, because there is no user account to store them in.",
      ],
    },
    goals: [
      "Put an organisation’s published songbooks on the phone after a single church selection.",
      "Keep the library fully readable offline.",
      "Sync with the remote database when connected, and persist those changes locally.",
      "Search titles, numbers, and lyrics without a network round-trip.",
      "Leave readers with nothing to sign up for and nothing to be tracked by.",
    ],
    process: {
      phases: [
        {
          title: "Design for the hall, not the office",
          description:
            "Treated no reception as the default. The app had to open, search, and read from local data before any network call was considered.",
        },
        {
          title: "One setup step",
          description:
            "First launch asks the reader to pick their church from the organisations HymnVault has published. That selection is the whole onboarding.",
        },
        {
          title: "Sync, then own the copy",
          description:
            "When online, Hymner pulls the ordered changes HymnVault published and writes them into local storage. Later reads never wait on the network.",
        },
        {
          title: "Reading tools that stay on device",
          description:
            "Search and favourites run against the local library, including hymnal-style number ordering, so they work in the same offline session as reading.",
        },
      ],
    },
    solution: {
      summary:
        "Hymner is an offline-first reader. Connectivity is only for sync. After that, songbooks, search, and favourites are consumed from the phone.",
      features: [
        {
          title: "Offline-first library",
          description:
            "Published songbooks are stored on the device. Opening a hymn does not require a connection.",
        },
        {
          title: "Sync when connected",
          description:
            "On a network, the app syncs with the remote database and saves the delta locally so the next offline session is current.",
        },
        {
          title: "No reader account",
          description:
            "Pick a church once. There is no password, no profile, and no sign-in standing between a person and the songs.",
        },
        {
          title: "Search and favourites on device",
          description:
            "Find a hymn by number or words, with numbers ordered the way a hymnal does. Favourites stay on the phone.",
        },
      ],
    },
    outcomes: {
      summary:
        "Readers get the organisation’s published library without an account, and can keep using it when the hall has no signal.",
      metrics: [
        { label: "Setup", value: "Pick a church" },
        { label: "Accounts", value: "None" },
        { label: "Reading", value: "On-device" },
        { label: "Updates", value: "Sync, then local" },
      ],
    },
    reflection: {
      learned: [
        "Offline-first only holds if sync is a background concern and every reading path works from local data.",
        "Removing accounts removed a whole class of failure: forgotten passwords in the middle of a service.",
        "The reader should only ever see what HymnVault has published — drafts are not its problem.",
      ],
      next: [
        "Ship the reader builds for Android and iOS against the same sync feed.",
        "Keep local search and number ordering aligned as songbooks grow.",
      ],
    },
  },
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
    slug: "kwozing-app",
    title: "Kwozing App",
    subtitle:
      "A Windows desktop app that keeps contacts, members and staff in one place — build attendance lists in seconds, then print them or save as PDF.",
    cover: contactApp,
    liveUrl: "https://kwozing.vercel.app/",
    githubUrl: "https://github.com/murdoch2439/online-attendance-manager",
    tags: ["Desktop Development", "Contacts", "Attendance"],
    meta: {
      role: "Designer & Desktop App Developer",
      timeline: "Windows desktop product · v1.0.0",
      team: "Solo product ownership",
      stack: ["Windows desktop app", "Local database", "Print / PDF export"],
    },
    overview:
      "Kwozing App is a private-by-default desktop application for organisations that were juggling spreadsheets and paper sign-in sheets. Contacts, members and staff live in one tidy database on the user’s computer. Start today’s session, check people in, then print the list or save it as a PDF — with no account and no cloud. The marketing site at kwozing.vercel.app is a separate web project that presents and distributes the product.",
    problem: {
      summary:
        "Churches, schools, small businesses and clubs needed a reliable way to keep people organised and produce attendance lists without depending on brittle spreadsheets or shared paper sheets.",
      challenges: [
        "Contacts were scattered across files with duplicates and inconsistent details.",
        "Building today’s attendance list meant hunting names and reformatting every time.",
        "Printing or sharing a clean list required extra cleanup before it left the desk.",
        "Cloud tools asked for accounts and uploads when teams simply wanted records that stay on their own machine.",
      ],
    },
    goals: [
      "Give one home for employees, clients, members and volunteers.",
      "Make session attendance a one-click check-in flow.",
      "Support groups that match real teams, classes or congregations.",
      "Print or export any list as PDF without leaving the app.",
      "Keep data local — no sign-up, no cloud upload.",
    ],
    process: {
      phases: [
        {
          title: "Map the real session",
          description:
            "Watched how organisers built daily lists: find people, mark who is present, then print or file. Designed the product around that loop instead of a generic CRM.",
        },
        {
          title: "Local-first data model",
          description:
            "Contacts, groups and session attendance live on the computer so the product works without an account and stays under the organisation’s control.",
        },
        {
          title: "Desktop list / session UI",
          description:
            "Built searchable contact lists, group filters and a today’s-session screen with print and PDF actions in reach.",
        },
        {
          title: "Ship for Windows",
          description:
            "Packaged an installer for Windows 10/11 so teams can install, add people and produce a list in minutes.",
        },
      ],
    },
    solution: {
      summary:
        "Kwozing App does a few things well: one contact database, groups that fit the organisation, session attendance, instant search, and print or PDF export — all on the user’s machine.",
      features: [
        {
          title: "One home for every contact",
          description:
            "Staff, clients, members and volunteers in a single searchable database.",
        },
        {
          title: "Session attendance",
          description:
            "Start today’s session and check people in with a click, then work from a live attendee list.",
        },
        {
          title: "Print or save as PDF",
          description:
            "Turn any list into a clean document for the front desk, archive or email.",
        },
        {
          title: "Private by default",
          description:
            "Records stay on the computer. No cloud sync, no account required.",
        },
      ],
    },
    outcomes: {
      summary:
        "Kwozing App 1.0.0 is available for Windows. The product site is a separate deliverable used for download and onboarding.",
      metrics: [
        { label: "Platform", value: "Windows 10/11" },
        { label: "Accounts", value: "None" },
        { label: "Data", value: "Local only" },
        { label: "Export", value: "Print · PDF" },
      ],
    },
    reflection: {
      learned: [
        "For many organisers, “private on my PC” beats another cloud login.",
        "Attendance and export are the moments of truth — search and groups only matter if today’s list is fast to build and share.",
        "A narrow desktop product is easier to trust than a half-built online suite.",
      ],
      next: [
        "Improve bulk import for teams migrating off spreadsheets.",
        "Tighten print layouts for common session sizes.",
        "Gather feedback from churches, schools and small businesses using v1.",
      ],
    },
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined =>
  caseStudies.find((study) => study.slug === slug);
