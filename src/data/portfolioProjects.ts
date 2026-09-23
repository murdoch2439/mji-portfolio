import noda from "../assets/noda1.png";
import dic from "../assets/dic.png";
import ssa from "../assets/ssa.jpeg";
import adit from "../assets/adit.jpeg";
import granapreme from "../assets/granapreme.jpeg";
import fondasi from "../assets/fondasi.jpeg";
import Dashboard from "../assets/Dashboard.png";
import Reading from "../assets/Reading.png";
import Foprix from "../assets/foprix.png";
import FondationRegine from "../assets/fondationregine.png";
import Cchi from "../assets/cchi.png";
import Worklog from "../assets/worklog.png";
import sr7 from "../assets/sr7.jpg";
import Ligite from "../assets/ligite.png";
import contactApp from "../assets/contactApp.png";
import Kwozing from "../assets/kwozing.png";
import HymnVault from "../assets/hymnvault-2.png";
import Hymner from "../assets/hymner.png";

export type PortfolioLinkType = "external" | "caseStudy";

export type PortfolioProject = {
  id: string;
  title: string;
  cover: string;
  github?: string;
  work: string[];
  /** How "See project" behaves */
  linkType: PortfolioLinkType;
  /** External URL, or internal path for case studies (e.g. /projects/worklog-tracker) */
  href: string;
};

/** How many projects appear in the home "My Recent Work" section */
export const RECENT_PORTFOLIO_COUNT = 6;

/**
 * Ordered newest-first. The home page shows the first RECENT_PORTFOLIO_COUNT;
 * /portfolio lists the full array.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "hymnvault",
    title: "HymnVault",
    cover: HymnVault,
    href: "/projects/hymnvault",
    linkType: "caseStudy",
    work: ["WebApp Development"],
  },
  {
    id: "hymner",
    title: "Hymner",
    cover: Hymner,
    href: "/projects/hymner",
    linkType: "caseStudy",
    work: ["Mobile Development", "Offline-first"],
  },
  {
    id: "kwozing",
    title: "Kwozing",
    cover: Kwozing,
    href: "https://kwozing.vercel.app/",
    linkType: "external",
    work: ["Web Design", "Web Development"],
  },
  {
    id: "kwozing-app",
    title: "Kwozing Desktop",
    cover: contactApp,
    github: "https://github.com/murdoch2439/online-attendance-manager",
    href: "/projects/kwozing-app",
    linkType: "caseStudy",
    work: ["Desktop Development"],
  },
  {
    id: "1859800000",
    title: "Worklog Tracker",
    cover: Worklog,
    github: "https://github.com/",
    href: "/projects/worklog-tracker",
    linkType: "caseStudy",
    work: ["WebApp Development", "Jira Integration"],
  },
  {
    id: "18598000000",
    title: "Ligite",
    cover: Ligite,
    github: "https://github.com/",
    href: "https://www.ligite.com/",
    linkType: "external",
    work: ["WebApp Development"],
  },
  {
    id: "1",
    title: "i7 Comms",
    cover: Dashboard,
    github: "https://github.com",
    href: "https://www.figma.com/proto/qiROfr8pDxH25EhZbhFFzj/i7sms?node-id=123-444&p=f&t=pVdPFamW2UW5TEVu-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    linkType: "external",
    work: ["UX Design"],
  },
  {
    id: "222",
    title: "Smart Sport Agency",
    cover: ssa,
    github: "https://github.com",
    href: "https://ssadrc.com",
    linkType: "external",
    work: ["UX Design", "Fullstack Development"],
  },
  {
    id: "2",
    title: "Granapreme Construction",
    cover: granapreme,
    github: "https://github.com",
    href: "https://granapremeconstruction.com",
    linkType: "external",
    work: ["Web Development"],
  },
  {
    id: "3",
    title: "ADIT Diaspora",
    cover: adit,
    github: "https://github.com",
    href: "https://adit-diaspora.com",
    linkType: "external",
    work: ["Web Development"],
  },
  {
    id: "4",
    title: "Orphelinat Nodaliesse",
    cover: noda,
    github: "https://github.com",
    href: "https://nodaliesse.com",
    linkType: "external",
    work: ["Web Development"],
  },
  {
    id: "8",
    title: "Diginco",
    cover: dic,
    github: "https://github.com",
    href: "https://www.figma.com/proto/HdJ0apbneCIFEcho2SRUNx/Digital-invest-corporate?scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&node-id=1%3A2&hide-ui=1",
    linkType: "external",
    work: ["UX Design"],
  },
  {
    id: "9",
    title: "Fondation Silinta",
    cover: fondasi,
    github: "https://github.com",
    href: "https://fondationsilinta.com",
    linkType: "external",
    work: ["Web Development"],
  },
  {
    id: "4b",
    title: "7sur7.com",
    cover: sr7,
    github: "https://github.com",
    href: "https://nodaliesse.com",
    linkType: "external",
    work: ["UX Design", "Mobile Development"],
  },
  {
    id: "18598",
    title: "Reading App",
    cover: Reading,
    github: "https://github.com",
    href: "https://www.youtube.com/shorts/F8JBZu4c87U",
    linkType: "external",
    work: ["UX Design", "Mobile Development"],
  },
  {
    id: "185980",
    title: "Foprix DRC",
    cover: Foprix,
    github: "https://github.com",
    href: "https://www.foprixdrc.com",
    linkType: "external",
    work: ["Web Design", "Mobile Development"],
  },
  {
    id: "1859800",
    title: "Fondation Regine",
    cover: FondationRegine,
    github: "https://github.com",
    href: "https://www.fondationreginelukadi.org",
    linkType: "external",
    work: ["Web Design", "Mobile Development"],
  },
  {
    id: "185980000",
    title: "CC Hope Initiative",
    cover: Cchi,
    github: "https://github.com/",
    href: "https://www.congochildrenshopeinitiative.org",
    linkType: "external",
    work: ["Web Development", "Content Writing"],
  },
];

export const recentPortfolioProjects = portfolioProjects.slice(
  0,
  RECENT_PORTFOLIO_COUNT
);
