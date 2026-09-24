/** Where "back to portfolio" should return after a case study */
export type PortfolioOrigin = "home" | "all";

export type CaseStudyLocationState = {
  portfolioOrigin?: PortfolioOrigin;
};

export const portfolioPathForOrigin = (origin?: PortfolioOrigin): string =>
  origin === "all" ? "/portfolio" : "/#portfolio";

const STORAGE_KEY = "caseStudyPortfolioOrigin";

export const rememberPortfolioOrigin = (origin: PortfolioOrigin) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, origin);
  } catch {
    // ignore private-mode / storage failures
  }
};

export const readPortfolioOrigin = (
  state: unknown
): PortfolioOrigin => {
  const fromState = (state as CaseStudyLocationState | null)?.portfolioOrigin;
  if (fromState === "home" || fromState === "all") {
    return fromState;
  }

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === "home" || stored === "all") {
      return stored;
    }
  } catch {
    // ignore
  }

  return "all";
};
