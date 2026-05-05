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

// Phase 1 placeholder: Korean falls back to English. Phase 3 replaces with translations.
const ko: Messages = en;

export function t(locale: Locale): Messages {
  return locale === "ko" ? ko : en;
}

export function viewAllDomesticPresentationsLabel(locale: Locale, n: number) {
  return locale === "ko"
    ? `국내 학회 발표 ${n}건 모두 보기`
    : `View all ${n} domestic presentations`;
}
