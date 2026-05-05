export type Education = {
  institution: string;
  institutionKo?: string;
  location: string;
  locationKo?: string;
  degree: string;
  degreeKo?: string;
  detail?: string;
  detailKo?: string;
  period: string;
  honors?: string[];
  honorsKo?: string[];
};

export const education: Education[] = [
  {
    institution: "Pohang University of Science and Technology (POSTECH)",
    location: "Pohang, Korea",
    degree: "Postdoctoral Researcher",
    detail:
      "Center for Advanced Aerospace Materials, Graduate Institute of Ferrous and Eco-Materials Technology (GIFT). Alternative military service.",
    period: "Mar. 2026 – Present",
    honors: [
      "Sejong Science Fellowship (KRW 500,000,000) — National Research Foundation of Korea, 2026–2031",
    ],
  },
  {
    institution: "Pohang University of Science and Technology (POSTECH)",
    location: "Pohang, Korea",
    degree: "Ph.D. in Mechanical Engineering, Extreme Mechanics Lab",
    detail:
      "Advisor: Prof. Anna Lee. GPA 4.13 / 4.30 (98.3 / 100). Dissertation: \"Actuation Framework for Space Exploration: From Origami-Based Active Structures to In-Space Propulsion\".",
    period: "Mar. 2020 – Feb. 2026",
    honors: [
      "Selected for Forbes 30 Under 30 Korea — Science",
      "SBS Research Fellowship (KRW 97,000,000)",
    ],
  },
  {
    institution: "Pohang University of Science and Technology (POSTECH)",
    location: "Pohang, Korea",
    degree: "B.S. in Mechanical Engineering, Magna Cum Laude",
    detail:
      "Total GPA 3.61 / 4.30 (93.1 / 100); Major GPA 3.81 / 4.30 (95.1 / 100).",
    period: "Mar. 2015 – Feb. 2020",
    honors: [
      "Mueunjae Award (무은재상) — POSTECH highest graduation honor",
      "Next-Generation Engineering Leader Award (한국공학한림원 차세대공학리더상) — Highest Honor, NAEK",
      "Talent Award of Korea (대한민국 인재상) — Minister of Education",
    ],
  },
  {
    institution: "Daegu Il Science High School",
    location: "Daegu, Korea",
    degree: "",
    period: "Mar. 2013 – Feb. 2015",
  },
];
