export type ServiceTier = {
  id: string;
  name: string;
  blurb: string;
  priceFrom: string;
  duration: string;
  inclusions: string[];
};

export const SERVICES: ServiceTier[] = [
  {
    id: "small",
    name: "Small Piece",
    blurb: "Single-session work under 3 inches. Flash or simple custom.",
    priceFrom: "$120",
    duration: "30–90 min",
    inclusions: ["Consult", "Stencil", "Aftercare kit"],
  },
  {
    id: "medium",
    name: "Medium Custom",
    blurb: "3–6 inches. Custom drawn from your brief.",
    priceFrom: "$280",
    duration: "1.5–3 hrs",
    inclusions: ["Design session", "2 revisions", "Aftercare kit"],
  },
  {
    id: "sleeve",
    name: "Half / Full Sleeve",
    blurb: "Multi-session statement work. Booked in 3–4 hour blocks.",
    priceFrom: "$180/hr",
    duration: "Multi-session",
    inclusions: ["Concept consult", "Full sketch", "Touch-up included"],
  },
  {
    id: "coverup",
    name: "Cover-Up",
    blurb: "Reworking or fully concealing existing work.",
    priceFrom: "$220",
    duration: "Varies",
    inclusions: ["In-person assessment", "Custom redraw", "Touch-up included"],
  },
];

export const DEPOSIT_USD = 50;
