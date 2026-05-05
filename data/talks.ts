export type InvitedTalk = {
  number: number;
  host: string;
  hostKo?: string;
  title: string;
  titleKo?: string;
  date: string;
  dateKo?: string;
  location: string;
  locationKo?: string;
  hostedBy: string;
  hostedByKo?: string;
};

export const invitedTalks: InvitedTalk[] = [
  {
    number: 1,
    host: "Department of Mechanical Engineering, Ajou University",
    hostKo: "아주대학교 기계공학과",
    title:
      "The Path to Next-Generation Space Propulsion: From Chemical to Plasma, and Lightsail",
    titleKo:
      "차세대 우주 추진의 길: 화학에서 플라즈마, 그리고 광돛까지",
    date: "April 14, 2026",
    dateKo: "2026년 4월 14일",
    location: "Suwon, Korea",
    locationKo: "수원",
    hostedBy: "Prof. Jonghyun Ha",
    hostedByKo: "하종현 교수",
  },
  {
    number: 2,
    host: "Intergravity Inc.",
    hostKo: "인터그래비티",
    title:
      "Application of Rotating Gliding Arc (RGA) to In-Space Chemical Propulsion",
    titleKo: "회전 활강 아크(RGA)의 우주 화학 추진 응용",
    date: "February 6, 2026",
    dateKo: "2026년 2월 6일",
    location: "Daejeon, Korea",
    locationKo: "대전",
    hostedBy: "Myungbo Shim, COO",
    hostedByKo: "심명보 COO",
  },
  {
    number: 3,
    host: "Department of Mechanical Engineering, Kyungpook National University",
    hostKo: "경북대학교 기계공학과",
    title:
      "Application of Rotating Gliding Arc (RGA) to In-Space Chemical Propulsion",
    titleKo: "회전 활강 아크(RGA)의 우주 화학 추진 응용",
    date: "January 22, 2026",
    dateKo: "2026년 1월 22일",
    location: "Daegu, Korea",
    locationKo: "대구",
    hostedBy: "Prof. Jeongpyo Lee",
    hostedByKo: "이정표 교수",
  },
  {
    number: 4,
    host: "Korean Air",
    hostKo: "대한항공",
    title:
      "Application of Rotating Gliding Arc (RGA) in Propulsion: From Microthrusters to OTV Propulsion Systems",
    titleKo:
      "회전 활강 아크(RGA)의 추진 응용: 마이크로 추력기에서 OTV 추진 시스템까지",
    date: "September 9, 2025",
    dateKo: "2025년 9월 9일",
    location: "Daejeon, Korea",
    locationKo: "대전",
    hostedBy: "Juhyun Sim, Senior Researcher",
    hostedByKo: "심주현 책임연구원",
  },
  {
    number: 5,
    host: "Department of Mechanical Engineering, Chosun University",
    hostKo: "조선대학교 기계공학과",
    title:
      "Application of RGA in Propulsion: From Microthrusters to OTV Propulsion Systems",
    titleKo:
      "RGA의 추진 응용: 마이크로 추력기에서 OTV 추진 시스템까지",
    date: "August 14, 2025",
    dateKo: "2025년 8월 14일",
    location: "Gwangju, Korea",
    locationKo: "광주",
    hostedBy: "Prof. Taegyu Kim",
    hostedByKo: "김태규 교수",
  },
  {
    number: 6,
    host: "Korea Aerospace Research Institute (KARI)",
    hostKo: "한국항공우주연구원(KARI)",
    title:
      "Application of Rotating Gliding Arc (RGA) in Propulsion: From Microthrusters to Ignition Systems",
    titleKo:
      "회전 활강 아크(RGA)의 추진 응용: 마이크로 추력기에서 점화 시스템까지",
    date: "June 2025",
    dateKo: "2025년 6월",
    location: "Daejeon, Korea",
    locationKo: "대전",
    hostedBy: "Dr. Hyunjun Kim",
    hostedByKo: "김현준 박사",
  },
  {
    number: 7,
    host: "LINC 3.0 Mechanical Engineering Seminar, POSTECH",
    hostKo: "포스텍 LINC 3.0 기계공학 세미나",
    title:
      "Introduction of Small-Scale Chemical and Plasma Thruster for In-Space Propulsion",
    titleKo:
      "우주 추진을 위한 소형 화학·플라즈마 추력기 소개",
    date: "July 8, 2024",
    dateKo: "2024년 7월 8일",
    location: "Pohang, Korea",
    locationKo: "포항",
    hostedBy: "Prof. Jintae Kim",
    hostedByKo: "김진태 교수",
  },
  {
    number: 8,
    host: "POSTECH Tech Review Program",
    hostKo: "포스텍 Tech Review 프로그램",
    title:
      "A New Paradigm for Space Robot Control: From Satellite Thrusters to Soft Robots",
    titleKo:
      "우주 로봇 제어의 새로운 패러다임: 위성 추력기에서 소프트 로봇까지",
    date: "April 21, 2022",
    dateKo: "2022년 4월 21일",
    location: "Pohang, Korea",
    locationKo: "포항",
    hostedBy: "POSTECH",
    hostedByKo: "포스텍",
  },
  {
    number: 9,
    host: "POSTECH Tech Review Program",
    hostKo: "포스텍 Tech Review 프로그램",
    title: "Launch Vehicles, Satellites, and Solid Mechanics",
    titleKo: "발사체, 위성, 그리고 고체역학",
    date: "November 16, 2021",
    dateKo: "2021년 11월 16일",
    location: "Pohang, Korea",
    locationKo: "포항",
    hostedBy: "POSTECH",
    hostedByKo: "포스텍",
  },
];

export type Conference = {
  number: number;
  authors: string;
  year: number;
  title: string;
  titleKo?: string;
  venue: string;
  venueKo?: string;
  award?: string;
  awardKo?: string;
  myIndex?: number;
};

export const internationalConferences: Conference[] = [
  {
    number: 1,
    authors: "Lee, J., & Lee, A.",
    year: 2026,
    title:
      "Ti–6Al–4V Thin-Walled Monopropellant Microthruster Designs Manufactured by Laser Powder Bed Fusion",
    venue:
      "ASME Aerospace Structures, Structural Dynamics, and Materials Conference (SSDM), June 8–10, Long Beach, CA, USA",
    venueKo:
      "ASME 항공우주 구조·구조동역학·재료 학술대회(SSDM), 6월 8–10일, 미국 캘리포니아주 롱비치",
  },
  {
    number: 2,
    authors: "Lee, J., Lee, J., & Lee, A.",
    year: 2026,
    title:
      "Enhancing Metal–polymer Adhesion via Surface Roughness Control in Laser Powder Bed Fusion for Space Structure Applications",
    venue:
      "ASME Aerospace Structures, Structural Dynamics, and Materials Conference (SSDM), June 8–10, Long Beach, CA, USA",
    venueKo:
      "ASME 항공우주 구조·구조동역학·재료 학술대회(SSDM), 6월 8–10일, 미국 캘리포니아주 롱비치",
    myIndex: 1,
  },
  {
    number: 3,
    authors: "Lee, J., Kim, S., Kang, H., & Lee, A.",
    year: 2026,
    title:
      "A Newton-scale air-breathing electric propulsion system based on rotating gliding arc",
    venue:
      "Int. Conf. Precision Engineering and Sustainable Manufacturing (PRESM), Singapore",
    venueKo:
      "국제 정밀공학·지속가능제조 학술대회(PRESM), 싱가포르",
  },
  {
    number: 4,
    authors: "Lee, J., Lee, J., Kim, R.E., Kim, S., & Lee, A.",
    year: 2025,
    title:
      "Design and characterization of thin-walled Ti-6Al-4V microthrusters fabricated by laser powder bed fusion",
    venue:
      "Int. Conf. Precision Engineering and Sustainable Manufacturing (PRESM), Chiang Mai, Thailand",
    venueKo:
      "국제 정밀공학·지속가능제조 학술대회(PRESM), 태국 치앙마이",
    award: "Outstanding Presentation Award",
    awardKo: "우수 발표상",
  },
  {
    number: 5,
    authors: "Lee, J., Kwak, H., Kim, J., Jo, H., & Lee, A.",
    year: 2025,
    title:
      "Wrinkling behavior of thin films encapsulated between two identical pre-stretched soft substrates",
    venue: "APS March Meeting, Anaheim, USA",
    venueKo: "APS March Meeting, 미국 애너하임",
  },
  {
    number: 6,
    authors: "Kwak, H., Lee, J., Kim, J., & Lee, A.",
    year: 2024,
    title:
      "Wrinkling of a thin film encapsulated between identically pre-stretched two soft substrates",
    venue:
      "Int. Congress of Theoretical and Applied Mechanics (ICTAM), Daegu, Korea",
    venueKo:
      "국제 이론·응용역학 학술대회(ICTAM), 대한민국 대구",
  },
  {
    number: 7,
    authors: "Kim, S., Lee, J., & Lee, A.",
    year: 2024,
    title:
      "Design of a scalable soft robot using thermo-pneumatic actuation on flexible electronics",
    venue:
      "IUTAM Symp. on Mechanics of Soft Materials and Soft Robots, Tokyo, Japan",
    venueKo:
      "IUTAM 연질 재료·소프트 로봇 역학 심포지엄, 일본 도쿄",
  },
  {
    number: 8,
    authors: "Kwak, H., Lee, J., & Lee, A.",
    year: 2023,
    title:
      "Wrinkling of thin films between two soft layers for stretchable circuits with high packing density",
    venue:
      "Int. Conf. Precision Engineering and Sustainable Manufacturing (PRESM), Tokyo, Japan",
    venueKo:
      "국제 정밀공학·지속가능제조 학술대회(PRESM), 일본 도쿄",
  },
  {
    number: 9,
    authors: "Lee, J., Kwak, H., Jo, H., & Lee, A.",
    year: 2023,
    title:
      "Formation of wrinkled film layer between symmetrically stretched substrates",
    venue: "APS March Meeting, Las Vegas, USA",
    venueKo: "APS March Meeting, 미국 라스베이거스",
  },
  {
    number: 10,
    authors: "Lee, J., Kwak, H., Lee, B., Song, Y., & Lee, A.",
    year: 2022,
    title:
      "Uniform elastomer suspension coating on cylinders by bi-axial oscillation",
    venue:
      "Int. Conf. Precision Engineering and Sustainable Manufacturing (PRESM), Jeju, Korea",
    venueKo:
      "국제 정밀공학·지속가능제조 학술대회(PRESM), 대한민국 제주",
  },
  {
    number: 11,
    authors: "Ki, K., Lee, J., & Lee, A.",
    year: 2022,
    title:
      "From shallow to deep: buckling behavior of clamped spherical caps",
    venue: "APS March Meeting, Chicago, USA",
    venueKo: "APS March Meeting, 미국 시카고",
  },
  {
    number: 12,
    authors: "Lee, J., Kwak, H., Lee, B., & Lee, A.",
    year: 2021,
    title: "Fabrication of films on cylinders by dip-oscillate coating",
    venue: "APS March Meeting (Online)",
    venueKo: "APS March Meeting (온라인)",
  },
  {
    number: 13,
    authors: "Ki, K., Lee, J., & Lee, A.",
    year: 2020,
    title: "Shallowness effect on buckling of spherical shells",
    venue: "APS March Meeting (Online)",
    venueKo: "APS March Meeting (온라인)",
  },
];

export const domesticConferenceNote =
  "28 presentations at the Korean Society of Mechanical Engineers (KSME), the Korean Society for Aeronautical and Space Sciences (KSAS), the Korean Society for Precision Engineering (KSPE), and the Korean Society of Propulsion Engineers (KSPE) — including three award-winning talks: KSME 2022 Excellence Paper Award, KSPE 2022 Best Paper Award, and KSME 2020 CAE/Applied Mechanics Best Paper Award.";

export const domesticConferenceNoteKo =
  "대한기계학회(KSME), 한국항공우주학회(KSAS), 한국정밀공학회(KSPE), 한국추진공학회(KSPE)에서 총 28건 발표 — KSME 2022 우수논문상, KSPE 2022 우수논문상, KSME 2020 CAE/응용역학 우수논문상 등 수상 발표 3건 포함.";

export type DomesticConference = {
  number: number;
  authors: string;
  title: string;
  titleKo?: string;
  venue: string;
  venueKo?: string;
  location: string;
  locationKo?: string;
  date: string;
  award?: string;
  awardKo?: string;
  isFirstAuthor: boolean;
};

const koLoc = (en: string): string => {
  const map: Record<string, string> = {
    Yeosu: "여수",
    Jeju: "제주",
    Busan: "부산",
    Jeongseon: "정선",
    Changwon: "창원",
    Incheon: "인천",
    Gwangju: "광주",
    Gyeongju: "경주",
    Online: "온라인",
  };
  return map[en] ?? en;
};

const koVenue = (en: string): string => {
  const map: Record<string, string> = {
    KSAS: "한국항공우주학회",
    "KSPE (Propulsion)": "한국추진공학회",
    "KSPE (Precision)": "한국정밀공학회",
    KSME: "대한기계학회",
    "KSME — CAE & Applied Mechanics": "대한기계학회 CAE·응용역학",
  };
  return map[en] ?? en;
};

const dc = (e: Omit<DomesticConference, "venueKo" | "locationKo" | "titleKo"> & { titleKo?: string }): DomesticConference => ({
  ...e,
  venueKo: koVenue(e.venue),
  locationKo: koLoc(e.location),
});

export const domesticConferences: DomesticConference[] = [
  dc({
    number: 1,
    authors:
      "Jeongrak Lee, Seonghyeon Kim, Anna Lee, and Hongjae Kang",
    title:
      "Conceptual Demonstration and Application Prospects of a High-Performance Electrochemical Nitrous Oxide Thruster Based on Rotating Gliding Arc (RGA)",
    titleKo:
      "회전 활강 아크(RGA) 기반 고성능 전기화학 N₂O 추력기의 개념 입증 및 응용 전망",
    venue: "KSAS",
    location: "Yeosu",
    date: "2025.06",
    isFirstAuthor: true,
  }),
  dc({
    number: 2,
    authors:
      "Jeongrak Lee, Seonghyeon Kim, Anna Lee, and Hongjae Kang",
    title:
      "Conceptual demonstration of a rotating gliding arc thruster for low atmosphere air-breathing electric propulsion",
    titleKo:
      "저고도 흡입식 전기 추진을 위한 회전 활강 아크 추력기의 개념 입증",
    venue: "KSAS",
    location: "Yeosu",
    date: "2025.06",
    isFirstAuthor: true,
  }),
  dc({
    number: 3,
    authors: "Jeongrak Lee, Anna Lee, and Hongjae Kang",
    title:
      "Wide-range O/F (~ 1000) Plasma-enhanced N₂O/CH₄ Thruster Using Rotating Gliding Arc",
    titleKo:
      "회전 활강 아크를 이용한 광역 O/F(~ 1000) 플라즈마 강화 N₂O/CH₄ 추력기",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2025.05",
    isFirstAuthor: true,
  }),
  dc({
    number: 4,
    authors:
      "Hongjae Kang, Jeongrak Lee, Junyoung Yang, Taebin Jeong, Junwoo Lee, Jeonggi Hong",
    title:
      "Manufacturing and Performance Evaluation of an N₂O Plasma Thruster Fabricated via WLAM-based Shape Optimization",
    titleKo:
      "WLAM 기반 형상 최적화로 제작한 N₂O 플라즈마 추력기의 제작 및 성능 평가",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2025.05",
    isFirstAuthor: false,
  }),
  dc({
    number: 5,
    authors:
      "Gyeom Lee, Anna Lee, Hongjae Kang, and Jeongrak Lee",
    title:
      "Performance Evaluation of an N₂O Rotating Gliding Arc Thruster under Bypass Flow Variations",
    titleKo:
      "바이패스 유량 변화에 따른 N₂O 회전 활강 아크 추력기의 성능 평가",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2025.05",
    isFirstAuthor: false,
  }),
  dc({
    number: 6,
    authors:
      "Raeeon Kim, Junghoon Lee, Jeongrak Lee, Junyoung Yang, Taebin Jeong, Junwoo Lee, Jeonggi Hong",
    title:
      "Comparative Analysis of the Properties of STS 316L and Inconel 625 by Wire-Based Additive Manufacturing (WLAM)",
    titleKo:
      "와이어 기반 적층 제조(WLAM)로 제작한 STS 316L과 인코넬 625 물성의 비교 분석",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2025.05",
    isFirstAuthor: false,
  }),
  dc({
    number: 7,
    authors:
      "Junghoon Lee, Jeongrak Lee, Raeeon Kim, Youngsam Kwon, and Dongsik Kim",
    title:
      "Size effects on the mechanical and propulsion performance of Ti-6Al-4V thin-walled microthrusters printed by laser powder bed fusion",
    titleKo:
      "LPBF로 출력한 Ti-6Al-4V 박벽 마이크로 추력기의 기계·추진 성능에 미치는 크기 효과",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2025.05",
    isFirstAuthor: false,
  }),
  dc({
    number: 8,
    authors:
      "Junghoon Lee, Jeongrak Lee, Raeeon Kim, Youngsam Kwon, and Dongsik Kim",
    title:
      "Architecture of Ti-6Al-4V thin-walled microthrusters fabricated via laser powder bed fusion",
    titleKo:
      "LPBF로 제작한 Ti-6Al-4V 박벽 마이크로 추력기의 구조 설계",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2025.05",
    isFirstAuthor: false,
  }),
  dc({
    number: 9,
    authors:
      "Jeongrak Lee, Seonghyeon Kim, Anna Lee, and Hongjae Kang",
    title:
      "Thrust Performance and Control Capabilities of an N₂O-powered Rotating Gliding Arc Thruster",
    titleKo:
      "N₂O 회전 활강 아크 추력기의 추력 성능 및 제어 특성",
    venue: "KSPE (Propulsion)",
    location: "Busan",
    date: "2024.11",
    isFirstAuthor: true,
  }),
  dc({
    number: 10,
    authors:
      "Seonghyeon Kim, Jeongrak Lee, Hongjae Kang, and Anna Lee",
    title:
      "Fabrication of a Monopropellant Microthruster for Satellite Using Metal PCB Process",
    titleKo:
      "금속 PCB 공정을 이용한 위성용 단일추진제 마이크로 추력기 제작",
    venue: "KSPE (Propulsion)",
    location: "Busan",
    date: "2024.11",
    isFirstAuthor: false,
  }),
  dc({
    number: 11,
    authors:
      "Jeongrak Lee, Seonghyeon Kim, Anna Lee, and Hongjae Kang",
    title:
      "Conceptual Demonstration of a Rotating Gliding Arc Thruster for Low Atmosphere Air-breathing Electric Propulsion",
    titleKo:
      "저고도 흡입식 전기 추진을 위한 회전 활강 아크 추력기의 개념 입증",
    venue: "KSPE (Propulsion)",
    location: "Busan",
    date: "2024.11",
    isFirstAuthor: true,
  }),
  dc({
    number: 12,
    authors:
      "Jeongrak Lee, Seonghyeon Kim, Anna Lee, Ju Won Kim, and Hongjae Kang",
    title:
      "Conceptual Demonstration of a Plasma Thruster Based on Chemical Propellants Using Rotating Gliding Arc",
    titleKo:
      "회전 활강 아크를 이용한 화학 추진제 기반 플라즈마 추력기의 개념 입증",
    venue: "KSAS",
    location: "Jeongseon",
    date: "2024.11",
    isFirstAuthor: true,
  }),
  dc({
    number: 13,
    authors: "Seonghyeon Kim, Jeongrak Lee, and Anna Lee",
    title:
      "Design and Development of a High-Efficiency Soft Robot and Manufacturing Process Using Lab-on-PCB Technology and Thermo-pneumatic Mechanism",
    titleKo:
      "Lab-on-PCB 기술과 열공압 메커니즘을 이용한 고효율 소프트 로봇 및 제작 공정의 설계와 개발",
    venue: "KSME",
    location: "Jeju",
    date: "2024.11",
    isFirstAuthor: false,
  }),
  dc({
    number: 14,
    authors: "Jeongrak Lee, Seonghyeon Kim, and Anna Lee",
    title:
      "Microthruster manufacturing using metal PCB production process",
    titleKo: "금속 PCB 공정을 이용한 마이크로 추력기 제작",
    venue: "KSAS",
    location: "Changwon",
    date: "2024.06",
    isFirstAuthor: true,
  }),
  dc({
    number: 15,
    authors:
      "Jeongrak Lee, Seonghyeon Kim, Namsuk Cho, and Anna Lee",
    title:
      "Application of lab-on-PCB technology in space: Development of solid and liquid propellant microthrusters for CubeSats",
    titleKo:
      "우주 분야의 Lab-on-PCB 기술 응용: 큐브샛용 고체·액체 추진제 마이크로 추력기 개발",
    venue: "KSAS",
    location: "Changwon",
    date: "2024.06",
    isFirstAuthor: true,
  }),
  dc({
    number: 16,
    authors:
      "Jeongrak Lee, Ju Won Kim, Seonghyeon Kim, Hongjae Kang, and Anna Lee",
    title:
      "Validation of a hydrogen peroxide-based electrochemical thruster using rotating gliding arc plasma",
    titleKo:
      "회전 활강 아크 플라즈마를 이용한 과산화수소 기반 전기화학 추력기 검증",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2024.05",
    isFirstAuthor: true,
  }),
  dc({
    number: 17,
    authors:
      "Hyunsu Kwak, Jeongrak Lee, Junsik Kim, and Anna Lee",
    title:
      "Wrinkling of a thin film sandwiched between two soft substrates",
    titleKo: "두 연질 기판 사이에 끼인 박막의 주름 거동",
    venue: "KSPE (Precision)",
    location: "Jeju",
    date: "2024.05",
    isFirstAuthor: false,
  }),
  dc({
    number: 18,
    authors:
      "Suyeong Jung, Jeongrak Lee, Seonghyeon Kim, Yuseong Song and Anna Lee",
    title:
      "Fabrication of a micro-gas generator for soft robots using a hydrogen peroxide electrolysis pump and a catalyst table",
    titleKo:
      "과산화수소 전기분해 펌프와 촉매판을 이용한 소프트 로봇용 마이크로 가스 발생기 제작",
    venue: "KSME",
    location: "Incheon",
    date: "2023.11",
    isFirstAuthor: false,
  }),
  dc({
    number: 19,
    authors: "Jeongrak Lee, Seonghyeon Kim and Anna Lee",
    title:
      "Design, fabrication of microthruster using Lab-on-PCB technology",
    titleKo:
      "Lab-on-PCB 기술을 이용한 마이크로 추력기의 설계·제작",
    venue: "KSME",
    location: "Incheon",
    date: "2023.11",
    isFirstAuthor: true,
  }),
  dc({
    number: 20,
    authors:
      "Jeongrak Lee, Seonghyeon Kim, Hongjae Kang and Anna Lee",
    title:
      "Modular fabrication concept for modular monopropellant thruster for small satellites",
    titleKo:
      "소형 위성용 모듈형 단일추진제 추력기를 위한 모듈러 제작 개념",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2023.05",
    isFirstAuthor: true,
  }),
  dc({
    number: 21,
    authors:
      "Jeongrak Lee, Seonghyeon Kim, Hongjae Kang and Anna Lee",
    title:
      "Revisiting MEMS thruster: Lab-on-PCB technology for space propulsion",
    titleKo:
      "MEMS 추력기 재조명: 우주 추진을 위한 Lab-on-PCB 기술",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2023.05",
    isFirstAuthor: true,
  }),
  dc({
    number: 22,
    authors: "Jeongrak Lee, Seonghyeon Kim and Anna Lee",
    title:
      "A new concept of PCB On-Board pneumatic actuator using solid propellant cartridge for soft robot",
    titleKo:
      "소프트 로봇을 위한 고체 추진제 카트리지 기반 PCB 온보드 공압 작동기의 신개념",
    venue: "KSME",
    location: "Jeju",
    date: "2022.11",
    award:
      "Excellence Paper Award (Production & Design Engineering Division)",
    awardKo: "우수논문상 (생산·설계공학부문)",
    isFirstAuthor: true,
  }),
  dc({
    number: 23,
    authors:
      "Jeongrak Lee, Sunghyeon Kim, Hanseong Jo, Eunji Lee, and Anna Lee",
    title:
      "Lab-on-PCB for space propulsion: New manufacturing process of solid propellant micro thruster array",
    titleKo:
      "우주 추진을 위한 Lab-on-PCB: 고체 추진제 마이크로 추력기 어레이의 신규 제작 공정",
    venue: "KSPE (Precision)",
    location: "Jeju",
    date: "2022.05",
    award: "Best Paper Award (Nano/Micro Division)",
    awardKo: "최우수논문상 (나노·마이크로부문)",
    isFirstAuthor: true,
  }),
  dc({
    number: 24,
    authors:
      "Jeongrak Lee, Hyunsu Kwak, Hanseong Jo, Yuseong Song and Anna Lee",
    title:
      "Fabrication of uniform films on cylinders by dip-coating with oscillation",
    titleKo:
      "진동 딥 코팅을 이용한 원기둥 위 균일 박막 제작",
    venue: "KSME",
    location: "Gwangju",
    date: "2021.11",
    isFirstAuthor: true,
  }),
  dc({
    number: 25,
    authors:
      "Jeongrak Lee, Hyunsu Kwak, Hanseong Jo, and Anna Lee",
    title:
      "Fabrication of films on cylinders by Dip-oscillate-coating",
    titleKo:
      "딥-오실레이트 코팅을 이용한 원기둥 위 박막 제작",
    venue: "KSPE (Precision)",
    location: "Online",
    date: "2021.05",
    isFirstAuthor: true,
  }),
  dc({
    number: 26,
    authors:
      "Jeongrak Lee, Hyunsu Kwak, Byungho Lee and Anna Lee",
    title:
      "Vibration-based dip coating for the fabrication of regression rate programmable rocket fuel",
    titleKo:
      "후퇴율 가변 로켓 연료 제작을 위한 진동 기반 딥 코팅",
    venue: "KSME",
    location: "Online",
    date: "2020.12",
    isFirstAuthor: true,
  }),
  dc({
    number: 27,
    authors: "Kanghyun Ki, Jeongrak Lee, and Anna Lee",
    title: "Shallowness effect on buckling of spherical shells",
    titleKo: "구형 셸 좌굴에 미치는 얕음 효과",
    venue: "KSME — CAE & Applied Mechanics",
    location: "Gyeongju",
    date: "2020.07",
    award: "Best Paper Award (CAE/Applied Mechanics Division)",
    awardKo: "최우수논문상 (CAE·응용역학부문)",
    isFirstAuthor: false,
  }),
  dc({
    number: 28,
    authors:
      "Juwon Kim, Hongjae Kang, Jeongrak Lee, and Sejin Kwon",
    title:
      "Flexibility test for high-energy premixed hydrogen peroxide mono-propellant",
    titleKo:
      "고에너지 예혼합 과산화수소 단일추진제의 유연성 시험",
    venue: "KSPE (Propulsion)",
    location: "Busan",
    date: "2017.11",
    isFirstAuthor: false,
  }),
];
