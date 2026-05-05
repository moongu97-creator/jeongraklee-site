export type Experience = {
  role: string;
  roleKo?: string;
  organization: string;
  organizationKo?: string;
  detail?: string;
  detailKo?: string;
  bullets?: string[];
  bulletsKo?: string[];
  period: string;
};

export const experience: Experience[] = [
  {
    role: "Graduate Researcher (Integrated M.S.–Ph.D. Program)",
    roleKo: "대학원생 연구원 (석박사 통합과정)",
    organization:
      "Extreme Mechanics Lab, Department of Mechanical Engineering, POSTECH",
    organizationKo:
      "포스텍 기계공학과 극한역학연구실(Extreme Mechanics Lab)",
    detail: "Advisor: Prof. Anna Lee",
    detailKo: "지도교수: 이안나 교수",
    period: "Mar. 2020 – Feb. 2026",
  },
  {
    role: "Visiting Researcher",
    roleKo: "방문 연구원",
    organization:
      "Plasma Engineering Laboratory, Korea Institute of Machinery & Materials (KIMM)",
    organizationKo:
      "한국기계연구원(KIMM) 플라즈마공학연구실",
    detail: "Host: Dr. Hongjae Kang",
    detailKo: "초청자: 강홍재 박사",
    period: "Jul. 2024 – Sep. 2024",
  },
  {
    role: "Project-based Intern, Product Strategy Team",
    roleKo: "프로젝트 인턴, 상품전략팀",
    organization:
      "Hyundai Motor Group (ICT Innovation Talent 4.0 program, MSIT)",
    organizationKo:
      "현대자동차그룹 (과학기술정보통신부 ICT 이노베이션 인재 4.0 프로그램)",
    bullets: [
      "Developed an all-in-one EV vehicle / charger / service-platform commercialization model.",
    ],
    bulletsKo: [
      "전기차 차량·충전기·서비스 플랫폼을 통합한 사업화 모델 개발.",
    ],
    period: "Jan. 2021 – Feb. 2022",
  },
  {
    role: "Undergraduate Researcher",
    roleKo: "학부생 연구원",
    organization:
      "Rocket Lab, Department of Aerospace Engineering, KAIST",
    organizationKo:
      "KAIST 항공우주공학과 로켓 연구실",
    detail: "Advisor: Prof. Sejin Kwon",
    detailKo: "지도교수: 권세진 교수",
    bullets: [
      "Design, fabrication and testing of a green monopropellant thruster/reactor (premixed high-test peroxide).",
    ],
    bulletsKo: [
      "친환경 단일추진제 추력기·반응기(예혼합 고농도 과산화수소) 설계·제작·시험.",
    ],
    period: "Jun. 2017 – Feb. 2018",
  },
  {
    role: "Co-Founder & Propulsion Engineer",
    roleKo: "공동창업자·추진 엔지니어",
    organization: "Perigee Aerospace Inc. / Perigee Rocket L.L.C.",
    organizationKo: "페리지에어로스페이스 / 페리지로켓",
    bullets: [
      "Small-satellite launch vehicle (Blue Whale) — high-altitude second-stage engine system integration.",
      "Contributed to TIPS (KRW 700 M), seed investment, and Series A funding.",
    ],
    bulletsKo: [
      "소형 위성 발사체(Blue Whale) — 고고도 2단 엔진 시스템 통합.",
      "TIPS 7억 원·시드·시리즈 A 투자 유치 기여.",
    ],
    period: "Jul. 2016 – Apr. 2019",
  },
];
