export type TimelineLane = "education" | "research" | "industry";

export type CvTimelineEntry = {
  name: string;
  lane: TimelineLane;
  row?: number; // stacks within a lane; default 0
  start: number; // year (decimals allowed for partial-year segments)
  end: number | "present";
  detail?: string;
};

export const cvTimeline: CvTimelineEntry[] = [
  // Education
  {
    name: "B.S. POSTECH",
    lane: "education",
    start: 2015,
    end: 2020,
    detail: "Mechanical Engineering · Magna Cum Laude",
  },
  {
    name: "Ph.D. POSTECH",
    lane: "education",
    start: 2020,
    end: 2026,
    detail: "Mechanical Engineering · Extreme Mechanics Lab",
  },

  // Research
  {
    name: "KAIST Rocket Lab",
    lane: "research",
    start: 2017.5,
    end: 2018.2,
    detail: "Undergraduate researcher",
  },
  {
    name: "Graduate Researcher",
    lane: "research",
    start: 2020,
    end: 2026,
    detail: "Extreme Mechanics Lab, POSTECH",
  },
  {
    name: "KIMM",
    lane: "research",
    row: 1,
    start: 2024.5,
    end: 2024.75,
    detail: "Plasma Engineering Lab · Jul–Sep 2024",
  },
  {
    name: "Postdoc · CAAM/GIFT",
    lane: "research",
    start: 2026,
    end: "present",
    detail: "Center for Advanced Aerospace Materials, GIFT, POSTECH",
  },

  // Industry
  {
    name: "Perigee Aerospace",
    lane: "industry",
    start: 2016.5,
    end: 2019.3,
    detail: "Co-Founder · Propulsion Engineer",
  },
  {
    name: "Hyundai Motor Group",
    lane: "industry",
    start: 2021,
    end: 2022.2,
    detail: "Project-based intern · ICT Innovation Talent 4.0",
  },
];
