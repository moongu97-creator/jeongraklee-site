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
    institutionKo: "포항공과대학교(POSTECH)",
    location: "Pohang, Korea",
    locationKo: "대한민국 포항",
    degree: "Postdoctoral Researcher",
    degreeKo: "박사후연구원",
    detail:
      "Center for Advanced Aerospace Materials, Graduate Institute of Ferrous and Eco-Materials Technology (GIFT). Alternative military service.",
    detailKo:
      "철강·에코머티리얼즈대학원(GIFT) 첨단항공우주소재연구센터. 전문연구요원 복무.",
    period: "Mar. 2026 – Present",
    honors: [
      "Sejong Science Fellowship (KRW 500,000,000) — National Research Foundation of Korea, 2026–2031",
    ],
    honorsKo: [
      "세종과학펠로십 (5억 원) — 한국연구재단, 2026–2031",
    ],
  },
  {
    institution: "Pohang University of Science and Technology (POSTECH)",
    institutionKo: "포항공과대학교(POSTECH)",
    location: "Pohang, Korea",
    locationKo: "대한민국 포항",
    degree: "Ph.D. in Mechanical Engineering, Extreme Mechanics Lab",
    degreeKo: "기계공학 박사 — 극한역학연구실",
    detail:
      "Advisor: Prof. Anna Lee. GPA 4.13 / 4.30 (98.3 / 100). Dissertation: \"Actuation Framework for Space Exploration: From Origami-Based Active Structures to In-Space Propulsion\".",
    detailKo:
      "지도교수: 이안나 교수. 학점 4.13 / 4.30 (98.3 / 100). 학위논문: 「우주 탐사를 위한 작동(Actuation) 프레임워크 — 오리가미 기반 능동 구조에서 우주 추진까지」.",
    period: "Mar. 2020 – Feb. 2026",
    honors: [
      "Selected for Forbes 30 Under 30 Korea — Science",
      "SBS Research Fellowship (KRW 97,000,000)",
    ],
    honorsKo: [
      "Forbes 30 Under 30 Korea — Science 선정",
      "SBS 연구장학금 (9,700만 원)",
    ],
  },
  {
    institution: "Pohang University of Science and Technology (POSTECH)",
    institutionKo: "포항공과대학교(POSTECH)",
    location: "Pohang, Korea",
    locationKo: "대한민국 포항",
    degree: "B.S. in Mechanical Engineering, Magna Cum Laude",
    degreeKo: "기계공학 학사 — Magna Cum Laude",
    detail:
      "Total GPA 3.61 / 4.30 (93.1 / 100); Major GPA 3.81 / 4.30 (95.1 / 100).",
    detailKo:
      "전체 학점 3.61 / 4.30 (93.1 / 100); 전공 학점 3.81 / 4.30 (95.1 / 100).",
    period: "Mar. 2015 – Feb. 2020",
    honors: [
      "Mueunjae Award (무은재상) — POSTECH highest graduation honor",
      "Next-Generation Engineering Leader Award (한국공학한림원 차세대공학리더상) — Highest Honor, NAEK",
      "Talent Award of Korea (대한민국 인재상) — Minister of Education",
    ],
    honorsKo: [
      "무은재상 — 포스텍 최고 졸업 영예",
      "한국공학한림원 차세대공학리더상 — 최고상",
      "대한민국 인재상 — 교육부",
    ],
  },
  {
    institution: "Daegu Il Science High School",
    institutionKo: "대구일과학고등학교",
    location: "Daegu, Korea",
    locationKo: "대한민국 대구",
    degree: "",
    period: "Mar. 2013 – Feb. 2015",
  },
];
