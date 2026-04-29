export type CareerEntry = {
  period: string;
  title: string;
  institution: string;
  location?: string;
  detail?: string;
  bullets?: string[];
};

export const career: CareerEntry[] = [
  {
    period: "Mar. 2026 – Present",
    title: "Postdoctoral Researcher",
    institution: "Pohang University of Science and Technology (POSTECH)",
    location: "Pohang, Korea",
    detail:
      "Center for Advanced Aerospace Materials, Graduate Institute of Ferrous and Eco-Materials Technology (GIFT). Alternative military service.",
    bullets: [
      "Sejong Science Fellowship (KRW 500,000,000) — National Research Foundation of Korea, 2026–2031",
    ],
  },
  {
    period: "Mar. 2020 – Feb. 2026",
    title: "Ph.D. in Mechanical Engineering",
    institution: "Pohang University of Science and Technology (POSTECH)",
    location: "Pohang, Korea",
    detail:
      'Extreme Mechanics Lab, Department of Mechanical Engineering. Advisor: Prof. Anna Lee. GPA 4.13 / 4.30 (98.3 / 100). Dissertation: "Actuation Framework for Space Exploration: From Origami-Based Active Structures to In-Space Propulsion".',
    bullets: [
      "Selected for Forbes 30 Under 30 Korea — Science",
      "SBS Research Fellowship (KRW 97,000,000)",
    ],
  },
  {
    period: "Jul. 2024 – Sep. 2024",
    title: "Visiting Researcher",
    institution: "Korea Institute of Machinery & Materials (KIMM)",
    detail:
      "Plasma Engineering Laboratory. Host: Dr. Hongjae Kang.",
  },
  {
    period: "Jan. 2021 – Feb. 2022",
    title: "Project-based Intern, Product Strategy Team",
    institution:
      "Hyundai Motor Group (ICT Innovation Talent 4.0 program, MSIT)",
    bullets: [
      "Developed an all-in-one EV vehicle / charger / service-platform commercialization model.",
    ],
  },
  {
    period: "Mar. 2015 – Feb. 2020",
    title: "B.S. in Mechanical Engineering, Magna Cum Laude",
    institution: "Pohang University of Science and Technology (POSTECH)",
    location: "Pohang, Korea",
    detail:
      "Total GPA 3.61 / 4.30 (93.1 / 100); Major GPA 3.81 / 4.30 (95.1 / 100).",
    bullets: [
      "Mueunjae Award (무은재상) — POSTECH highest graduation honor",
      "Next-Generation Engineering Leader Award (한국공학한림원 차세대공학리더상) — Highest Honor, NAEK",
      "Talent Award of Korea (대한민국 인재상) — Minister of Education",
    ],
  },
  {
    period: "Jul. 2016 – Apr. 2019",
    title: "Co-Founder & Propulsion Engineer",
    institution: "Perigee Aerospace Inc. / Perigee Rocket L.L.C.",
    bullets: [
      "Small-satellite launch vehicle (Blue Whale) — high-altitude second-stage engine system integration.",
      "Contributed to TIPS (KRW 700 M), seed investment, and Series A funding.",
    ],
  },
  {
    period: "Jun. 2017 – Feb. 2018",
    title: "Undergraduate Researcher",
    institution:
      "Rocket Lab, Department of Aerospace Engineering, KAIST",
    detail: "Advisor: Prof. Sejin Kwon.",
    bullets: [
      "Design, fabrication and testing of a green monopropellant thruster/reactor (premixed high-test peroxide).",
    ],
  },
  {
    period: "Mar. 2013 – Feb. 2015",
    title: "High School",
    institution: "Daegu Il Science High School",
    location: "Daegu, Korea",
  },
];
