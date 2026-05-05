import type { Locale } from "./locale";

const en = {
  nav: {
    home: "Home",
    research: "Research",
    cv: "CV",
    publications: "Publications",
    talks: "Talks",
    awards: "Awards",
    media: "Media",
    researchSub: {
      chemical: "Chemical Propulsion",
      hybrid: "Chemical-Plasma Propulsion",
      photonics: "Photonic Propulsion",
      other: "Aerospace Applications",
    },
    languageToKorean: "한국어",
    languageToEnglish: "EN",
  },
  common: {
    featured: "Featured",
    underReview: "Under review",
    email: "Email",
    phone: "Phone",
    tel: "Tel",
    cvPdf: "CV (PDF)",
    scholar: "Scholar",
    googleScholar: "Google Scholar",
    linkedIn: "LinkedIn",
    research: "Research",
    rightsReserved: "All rights reserved.",
    figurePlaceholder: "Figure placeholder",
    researchPillars: "Research pillars",
    keywords: "Keywords",
    selectedPublications: "Selected publications",
    journalReviewer: "Journal reviewer",
    memberships: "Memberships",
    internationalPatents: "International patents",
    domesticRegisteredHeading: "Domestic patents — registered",
    domesticPendingHeading: "Domestic patents — pending",
    asPrincipalInvestigator: "As Principal Investigator",
    graduate: "Graduate",
    undergraduate: "Undergraduate",
    registered: "Registered",
    application: "Application",
    hostedBy: "Hosted by",
  },
  tag: {
    chemical: "Chemical",
    hybrid: "Hybrid",
    photonics: "Photonics",
    other: "Cross-cutting",
  },
  home: {
    glanceEyebrow: "Research at a glance",
    glanceTitle: "A roadmap of next-generation propulsion",
    glanceBody:
      "One framework spans chemical (now), plasma-hybrid (near term), and photonic-structural (long term) propulsion. Chemical advances today's thrusters for CubeSats and constellations, plasma-hybrid delivers rotating gliding arc thrusters that combine high thrust (>1 N) and high specific impulse (>500 s) for orbital transfer vehicles and kick stages, and photonic-structural sails open propellantless light-pressure propulsion on active-structure thin films for sustained long-range cruise.",
    researchEyebrow: "Research",
    researchTitle: "Three horizons of next-generation space propulsion",
    researchDescription:
      "From mission-ready chemical micro-thrusters today, to plasma-hybrid systems for the near-term frontier, to photonic propulsion for deep-space exploration.",
    pressEyebrow: "Press",
    pressTitle: "In the news",
    pressDescription:
      "Selected media coverage of recent research milestones and awards.",
    pubsEyebrow: "Selected Publications",
    pubsTitle: "Recent highlights",
    pubsDescription:
      "A selection of representative work — see all 16 SCIE publications in the full list.",
    allResearchAreas: "All research areas",
    allMediaCoverage: "All media coverage",
    allPublications: "All publications",
  },
  research: {
    pageEyebrow: "Research",
    pageTitle: "Three horizons toward deep space",
    pageDescription:
      "My research charts the path from advanced chemical propulsion deployable today, to electrochemical hybrid propulsion for the near future, and ultimately to photonic propulsion that opens deep-space exploration.",
    metaTitle: "Research",
    metaDescription:
      "Three horizons of next-generation space propulsion: chemical, plasma-hybrid, and photonic — plus cross-cutting aerospace applications.",
  },
  cv: {
    metaTitle: "CV",
    metaDescription:
      "Curriculum Vitae of Jeongrak Lee — education, professional experience, patents, teaching, and service.",
    profileTitleLine1:
      "Postdoctoral Researcher at Pohang University of Science and Technology (POSTECH)",
    profileTitleLine2:
      "Center for Advanced Aerospace Materials, Graduate Institute of Ferrous and Eco-Materials Technology (GIFT)",
    educationEyebrow: "Education",
    educationTitle: "Education",
    experienceEyebrow: "Experience",
    experienceTitle: "Professional experience",
    pubsEyebrow: "Selected Publications",
    pubsTitle: "Selected publications",
    pubsDescription:
      "Representative work. See the full 16 SCIE list and 6 manuscripts under review on the Publications page.",
    honorsEyebrow: "Selective Honors",
    honorsTitle: "Selective honors & fellowships",
    honorsDescription:
      "Most distinguished recognition and competitive fellowships. See the full list on the Awards page.",
    grantsEyebrow: "Research",
    grantsTitle: "Research projects (participation)",
    grantsDescription:
      "Project participation under the supervision of the principal investigator.",
    patentsEyebrow: "Patents",
    patentsTitle: "Patents",
    serviceEyebrow: "Service",
    serviceTitle: "Service activities",
    referencesEyebrow: "References",
    referencesTitle: "References",
    allPublications: "All publications",
    allAwards: "All awards & funding",
    sejongFellowship: {
      year: "2026–2031",
      title: "Sejong Science Fellowship",
      body: "National Research Foundation of Korea (NRF)",
      detail: "KRW 500,000,000",
    },
    sbsFellowship: {
      year: "2020–2026",
      title: "SBS Foundation Research Fellowship",
      body: "SBS Foundation",
      detail: "KRW 97,000,000",
    },
  },
  publications: {
    metaTitle: "Publications",
    metaDescription:
      "16 SCIE publications grouped by Advanced Chemical Propulsion, Chemical–Plasma Hybrid, and Photonics-Based Propulsion & Thin-Film Mechanics.",
    pageEyebrow: "Publications",
    pageTitle: "International journal publications",
    pageDescription:
      "16 SCIE papers (14 as first author) across three thrust areas. * Equal contribution; † Corresponding author.",
    thrustIEyebrow: "Thrust I",
    thrustITitle: "Advanced Chemical Propulsion",
    thrustIDescription:
      "MEMS-based monopropellant micro-thrusters and Lab-on-PCB propellant validation platforms for CubeSats and constellations.",
    thrustIIEyebrow: "Thrust II",
    thrustIITitle: "Chemical–Plasma Hybrid Propulsion",
    thrustIIDescription:
      "Rotating Gliding Arc plasma-assisted propulsion targeting high-thrust, high-Isp regimes for orbital transfer vehicles and kick stages.",
    thrustIIIEyebrow: "Thrust III",
    thrustIIITitle: "Photonics-Based Space Propulsion & Thin-Film Mechanics",
    thrustIIIDescription:
      "Light/solar sails enabled by thin-film actuators integrated with optical metasurfaces; predictive mechanics of wrinkling, buckling, and large deformation.",
    inProgressEyebrow: "In Progress",
    inProgressTitle: "Under review",
    inProgressDescription: "Manuscripts currently under peer review.",
  },
  awards: {
    metaTitle: "Awards & Funding",
    metaDescription: "Awards and competitive research grants of Jeongrak Lee.",
    pageEyebrow: "Awards & Funding",
    pageTitle: "Funding and honors",
    pageDescription:
      "Competitive research grants secured as Principal Investigator, and recognition spanning research excellence, fellowships, and entrepreneurship.",
    fundingEyebrow: "Funding",
    fundingTitle: "Research grants & funding",
    fundingDescription: "Competitive grants secured as Principal Investigator.",
    awardsEyebrow: "Awards",
    awardsTitle: "Awards & honors",
    awardsDescription:
      "All graduate honors (2021–2026) and undergraduate awards (2015–2020), grouped chronologically.",
  },
  talks: {
    metaTitle: "Talks",
    metaDescription:
      "Invited talks and conference presentations on next-generation space propulsion.",
    pageEyebrow: "Talks & Presentations",
    pageTitle: "Talks",
    pageDescription:
      "Invited talks at universities, research institutes, and industry, plus international and domestic conference presentations.",
    invitedEyebrow: "Invited",
    invitedTitle: "Invited talks",
    invitedDescription:
      "Recent invited lectures across universities, research institutes, and aerospace industry.",
    intlEyebrow: "Conference",
    intlTitle: "International conferences",
    intlDescription:
      "Presentations at ASME SSDM, APS March Meeting, ICTAM, IUTAM, PRESM, and others.",
    domesticEyebrow: "Conference",
    domesticTitle: "Domestic conferences",
  },
  media: {
    metaTitle: "Media",
    metaDescription:
      "Press coverage and media interviews of Jeongrak Lee's research milestones and awards.",
    pageEyebrow: "Media",
    pageTitle: "Press & media coverage",
    pageDescription:
      "Selected press coverage of major research milestones, awards, and interviews — KBS, MBC, Forbes Korea, Yonhap News, Dong-A Science, and others.",
    linkNotAvailable: "Link not available",
  },
};

export type Messages = typeof en;

const ko: Messages = {
  nav: {
    home: "홈",
    research: "연구",
    cv: "CV",
    publications: "논문",
    talks: "발표",
    awards: "수상·연구비",
    media: "미디어",
    researchSub: {
      chemical: "화학 추진",
      hybrid: "화학-플라즈마 추진",
      photonics: "광자 추진",
      other: "항공우주 응용",
    },
    languageToKorean: "한국어",
    languageToEnglish: "EN",
  },
  common: {
    featured: "대표",
    underReview: "심사 중",
    email: "이메일",
    phone: "전화",
    tel: "Tel",
    cvPdf: "CV (PDF)",
    scholar: "Scholar",
    googleScholar: "Google Scholar",
    linkedIn: "LinkedIn",
    research: "연구",
    rightsReserved: "All rights reserved.",
    figurePlaceholder: "그림 자리",
    researchPillars: "연구 축",
    keywords: "키워드",
    selectedPublications: "주요 논문",
    journalReviewer: "저널 리뷰어",
    memberships: "학회 회원",
    internationalPatents: "해외 특허",
    domesticRegisteredHeading: "국내 특허 — 등록",
    domesticPendingHeading: "국내 특허 — 출원",
    asPrincipalInvestigator: "주관 연구책임자",
    graduate: "대학원",
    undergraduate: "학부",
    registered: "등록",
    application: "출원",
    hostedBy: "초청자:",
  },
  tag: {
    chemical: "화학",
    hybrid: "하이브리드",
    photonics: "광자",
    other: "통합",
  },
  home: {
    glanceEyebrow: "연구 개요",
    glanceTitle: "차세대 추진의 로드맵",
    glanceBody:
      "하나의 프레임워크로 화학(현재), 플라즈마-하이브리드(근시일), 광자-구조(장기) 추진을 모두 다룹니다. 화학 추진은 큐브샛과 위성군을 위한 오늘의 추력기를 발전시키고, 플라즈마-하이브리드는 회전 활강 아크 추력기로 궤도 천이체와 킥 스테이지를 위한 고추력(>1 N)·고비추력(>500 s) 영역을 동시에 달성하며, 광자-구조 솔라세일은 능동 박막 위에 광압 추진을 구현해 연료 없는 장거리 항행을 엽니다.",
    researchEyebrow: "연구",
    researchTitle: "차세대 우주 추진의 세 지평",
    researchDescription:
      "현재 발사 가능한 화학 마이크로 추력기부터, 근시일의 플라즈마-하이브리드 시스템, 그리고 심우주 탐사를 여는 광자 추진까지.",
    pressEyebrow: "언론",
    pressTitle: "주요 보도",
    pressDescription: "최근 연구 성과 및 수상 관련 언론 보도 모음.",
    pubsEyebrow: "주요 논문",
    pubsTitle: "최근 대표 성과",
    pubsDescription:
      "대표 논문 모음 — 16편 SCIE 전체 목록은 Publications에서 확인하세요.",
    allResearchAreas: "전체 연구 분야",
    allMediaCoverage: "전체 미디어",
    allPublications: "전체 논문",
  },
  research: {
    pageEyebrow: "연구",
    pageTitle: "심우주를 향한 세 지평",
    pageDescription:
      "오늘 발사 가능한 첨단 화학 추진에서, 근시일의 전기화학 하이브리드 추진을 거쳐, 심우주 탐사를 여는 광자 추진까지의 경로.",
    metaTitle: "연구",
    metaDescription:
      "차세대 우주 추진의 세 지평: 화학, 플라즈마-하이브리드, 광자 — 그리고 통합 항공우주 응용.",
  },
  cv: {
    metaTitle: "CV",
    metaDescription:
      "이정락 CV — 학력, 경력, 특허, 강의, 봉사 활동.",
    profileTitleLine1: "포항공과대학교(POSTECH) 박사후연구원",
    profileTitleLine2:
      "철강·에코머티리얼즈대학원(GIFT) 첨단항공우주소재연구센터",
    educationEyebrow: "학력",
    educationTitle: "학력",
    experienceEyebrow: "경력",
    experienceTitle: "전문 경력",
    pubsEyebrow: "주요 논문",
    pubsTitle: "주요 논문",
    pubsDescription:
      "대표 논문 모음. 전체 16편 SCIE 및 6편 심사 중 원고는 Publications 페이지에서 확인하세요.",
    honorsEyebrow: "주요 수상",
    honorsTitle: "주요 수상 및 펠로십",
    honorsDescription:
      "가장 권위 있는 인정과 경쟁형 펠로십. 전체 목록은 Awards 페이지에서 확인하세요.",
    grantsEyebrow: "연구",
    grantsTitle: "참여 연구 과제",
    grantsDescription:
      "주관 연구책임자 지도 하에 참여한 연구 과제.",
    patentsEyebrow: "특허",
    patentsTitle: "특허",
    serviceEyebrow: "봉사",
    serviceTitle: "봉사 활동",
    referencesEyebrow: "추천인",
    referencesTitle: "추천인",
    allPublications: "전체 논문",
    allAwards: "전체 수상·연구비",
    sejongFellowship: {
      year: "2026–2031",
      title: "세종과학펠로십",
      body: "한국연구재단 (NRF)",
      detail: "5억 원",
    },
    sbsFellowship: {
      year: "2020–2026",
      title: "SBS 문화재단 연구장학",
      body: "SBS 문화재단",
      detail: "9,700만 원",
    },
  },
  publications: {
    metaTitle: "논문",
    metaDescription:
      "16편 SCIE 논문 — 첨단 화학 추진, 화학-플라즈마 하이브리드, 광자 기반 추진·박막 역학 분류.",
    pageEyebrow: "논문",
    pageTitle: "국제 학술지 논문",
    pageDescription:
      "16편 SCIE 논문 (제1저자 14편)을 세 가지 thrust 영역으로 정리. * 동등 기여; † 교신저자.",
    thrustIEyebrow: "Thrust I",
    thrustITitle: "첨단 화학 추진",
    thrustIDescription:
      "큐브샛·위성군을 위한 MEMS 기반 단일액체 추진제 마이크로 추력기와 Lab-on-PCB 추진제 검증 플랫폼.",
    thrustIIEyebrow: "Thrust II",
    thrustIITitle: "화학-플라즈마 하이브리드 추진",
    thrustIIDescription:
      "궤도 천이체·킥 스테이지를 위한 회전 활강 아크 플라즈마 보조 추진 — 고추력·고비추력 영역.",
    thrustIIIEyebrow: "Thrust III",
    thrustIIITitle: "광자 기반 우주 추진 및 박막 역학",
    thrustIIIDescription:
      "광학 메타표면과 통합한 박막 작동기 기반 광/태양돛; 주름·좌굴·대변형의 예측 역학.",
    inProgressEyebrow: "진행 중",
    inProgressTitle: "심사 중",
    inProgressDescription: "현재 동료심사 중인 원고.",
  },
  awards: {
    metaTitle: "수상·연구비",
    metaDescription: "이정락 수상 및 경쟁형 연구비 목록.",
    pageEyebrow: "수상·연구비",
    pageTitle: "연구비와 수상",
    pageDescription:
      "주관 연구책임자로 확보한 경쟁형 연구비, 그리고 연구·펠로십·창업 영역의 인정과 수상.",
    fundingEyebrow: "연구비",
    fundingTitle: "연구비 및 펀딩",
    fundingDescription: "주관 연구책임자로 확보한 경쟁형 연구비.",
    awardsEyebrow: "수상",
    awardsTitle: "수상 및 영예",
    awardsDescription:
      "대학원 수상(2021–2026)과 학부 수상(2015–2020) 시간순 정리.",
  },
  talks: {
    metaTitle: "발표",
    metaDescription:
      "차세대 우주 추진 관련 초청 강연 및 학회 발표 목록.",
    pageEyebrow: "발표 및 강연",
    pageTitle: "발표",
    pageDescription:
      "대학·연구기관·산업체 초청 강연과 국제·국내 학회 발표.",
    invitedEyebrow: "초청",
    invitedTitle: "초청 강연",
    invitedDescription:
      "최근 대학·연구기관·항공우주 산업체에서의 초청 강연.",
    intlEyebrow: "학회",
    intlTitle: "국제 학회",
    intlDescription:
      "ASME SSDM, APS March Meeting, ICTAM, IUTAM, PRESM 등에서의 발표.",
    domesticEyebrow: "학회",
    domesticTitle: "국내 학회",
  },
  media: {
    metaTitle: "미디어",
    metaDescription:
      "이정락의 연구 성과 및 수상에 대한 언론 보도와 인터뷰.",
    pageEyebrow: "미디어",
    pageTitle: "언론 및 미디어 보도",
    pageDescription:
      "주요 연구 성과·수상·인터뷰 관련 언론 보도 모음 — KBS, MBC, Forbes Korea, 연합뉴스, 동아사이언스 등.",
    linkNotAvailable: "링크 없음",
  },
};

export function t(locale: Locale): Messages {
  return locale === "ko" ? ko : en;
}

export function viewAllDomesticPresentationsLabel(locale: Locale, n: number) {
  return locale === "ko"
    ? `국내 학회 발표 ${n}건 모두 보기`
    : `View all ${n} domestic presentations`;
}
