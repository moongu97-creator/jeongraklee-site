export type Education = {
  institution: string;
  location: string;
  degree: string;
  detail?: string;
  period: string;
  honors?: string[];
};

export const education: Education[] = [
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
      "Mueunjae Award — POSTECH highest graduation honor",
      "Next-Generation Engineering Leader Award — Highest Honor, NAEK",
      "Talent Award of Korea — Minister of Education",
    ],
  },
  {
    institution: "Daegu Il Science High School",
    location: "Daegu, Korea",
    degree: "",
    period: "Mar. 2013 – Feb. 2015",
  },
];
