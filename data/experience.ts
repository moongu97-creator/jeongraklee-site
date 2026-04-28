export type Experience = {
  role: string;
  organization: string;
  detail?: string;
  bullets?: string[];
  period: string;
};

export const experience: Experience[] = [
  {
    role: "Postdoctoral Researcher",
    organization:
      "Center for Advanced Aerospace Materials, GIFT, POSTECH (alternative military service)",
    period: "Mar. 2026 – Present",
  },
  {
    role: "Graduate Researcher (Integrated M.S.–Ph.D. Program)",
    organization:
      "Extreme Mechanics Lab, Department of Mechanical Engineering, POSTECH",
    detail: "Advisor: Prof. Anna Lee",
    period: "Mar. 2020 – Feb. 2026",
  },
  {
    role: "Visiting Researcher",
    organization:
      "Plasma Engineering Laboratory, Korea Institute of Machinery & Materials (KIMM)",
    detail: "Host: Dr. Hongjae Kang",
    period: "Jul. 2024 – Sep. 2024",
  },
  {
    role: "Project-based Intern, Product Strategy Team",
    organization:
      "Hyundai Motor Group (ICT Innovation Talent 4.0 program, MSIT)",
    bullets: [
      "Developed an all-in-one EV vehicle / charger / service-platform commercialization model.",
    ],
    period: "Jan. 2021 – Feb. 2022",
  },
  {
    role: "Undergraduate Researcher",
    organization:
      "Rocket Lab, Department of Aerospace Engineering, KAIST",
    detail: "Advisor: Prof. Sejin Kwon",
    bullets: [
      "Design, fabrication and testing of a green monopropellant thruster/reactor (premixed high-test peroxide).",
    ],
    period: "Jun. 2017 – Feb. 2018",
  },
  {
    role: "Co-Founder & Propulsion Engineer",
    organization: "Perigee Aerospace Inc. / Perigee Rocket L.L.C.",
    bullets: [
      "Small-satellite launch vehicle (Blue Whale) — high-altitude second-stage engine system integration.",
      "Contributed to TIPS (KRW 700 M), seed investment, and Series A funding.",
    ],
    period: "Jul. 2016 – Apr. 2019",
  },
];
