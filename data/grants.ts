export type Grant = {
  title: string;
  titleKo?: string;
  agency: string;
  agencyKo?: string;
  role: string;
  roleKo?: string;
  amount?: string;
  amountKo?: string;
  period: string;
  project: string;
  projectKo?: string;
  highlight?: boolean;
};

export const grantsAsPI: Grant[] = [
  {
    title: "Sejong Science Fellowship",
    titleKo: "세종과학펠로십",
    agency: "National Research Foundation of Korea (NRF)",
    agencyKo: "한국연구재단(NRF)",
    role: "Principal Investigator",
    roleKo: "주관 연구책임자",
    amount: "KRW 500,000,000",
    amountKo: "5억 원",
    period: "Mar. 2026 – Feb. 2031",
    project:
      "Multiphysics-Based Design of High Pressure Plasma-Chemical Hybrid Propulsion for High Thrust & Specific Impulse Space Exploration and Maneuvering Platforms",
    projectKo:
      "고추력·고비추력 우주 탐사·기동 플랫폼을 위한 고압 플라즈마-화학 하이브리드 추진의 다물리 기반 설계",
    highlight: true,
  },
  {
    title: "POSTECH Next Generation Convergence Research Pioneer Program",
    titleKo: "포스텍 차세대 융합연구 개척 프로그램",
    agency: "POSTECH",
    agencyKo: "포스텍",
    role: "Subproject Leader (PI: Kyungtae Kim)",
    roleKo: "세부 책임자 (총괄 PI: 김경태)",
    amount: "KRW 20,000,000",
    amountKo: "2,000만 원",
    period: "Mar. 2025 – Feb. 2026",
    project:
      "Development of a Hybrid Plasma Propulsion System for Small Satellites Enabled by Metal Additive Manufacturing",
    projectKo:
      "금속 적층 제조 기반 소형 위성용 하이브리드 플라즈마 추진 시스템 개발",
  },
  {
    title: "POSTECH Alchemist Program",
    titleKo: "포스텍 Alchemist 프로그램",
    agency: "POSTECH",
    agencyKo: "포스텍",
    role: "Principal Investigator",
    roleKo: "주관 연구책임자",
    amount: "KRW 15,000,000",
    amountKo: "1,500만 원",
    period: "Apr. 2024 – Feb. 2025",
    project:
      "Verification of Key Enabling Technologies for Modular Space Architecture Using Miniature Untethered Pneumatic Pumps and Deployable Structures",
    projectKo:
      "소형 무전선 공압 펌프와 전개형 구조를 활용한 모듈형 우주 아키텍처 핵심 기술 검증",
  },
  {
    title: "POSTECH Alchemist Program",
    titleKo: "포스텍 Alchemist 프로그램",
    agency: "POSTECH",
    agencyKo: "포스텍",
    role: "Principal Investigator",
    roleKo: "주관 연구책임자",
    amount: "KRW 20,315,000",
    amountKo: "2,031만 5천 원",
    period: "Nov. 2021 – Aug. 2022",
    project:
      "Development of an Optimized Satellite Thruster for Small Satellite Constellation-Based Ultra-Low-Latency Internet Networks",
    projectKo:
      "소형 위성군 기반 초저지연 인터넷 네트워크용 최적화 위성 추력기 개발",
  },
  {
    title: "SBS Foundation Research Fellowship",
    titleKo: "SBS 문화재단 연구장학",
    agency: "SBS Foundation",
    agencyKo: "SBS 문화재단",
    role: "Principal Investigator",
    roleKo: "주관 연구책임자",
    amount: "KRW 97,000,000",
    amountKo: "9,700만 원",
    period: "Sep. 2020 – Feb. 2026",
    project:
      "Development of a Shell Theory-Based Integrated Structural Optimization System for Launch Vehicle Components",
    projectKo:
      "셸 이론 기반 발사체 부품 통합 구조 최적화 시스템 개발",
    highlight: true,
  },
];

export const grantsAsParticipant: Grant[] = [
  {
    title: "NRF Young Researcher Program",
    titleKo: "한국연구재단 우수신진연구",
    agency: "NRF",
    agencyKo: "한국연구재단(NRF)",
    role: "Research Director: Prof. Anna Lee",
    roleKo: "연구책임자: 이안나 교수",
    amount: "KRW 1,200,000,000 (5 years)",
    amountKo: "12억 원 (5년)",
    period: "Apr. 2024 – Feb. 2029",
    project:
      "Development of Modular Space Architecture Technology using Micro Untethered Pneumatic Pumps and Deployable Structures. Contribution: Overall research planning; led design and fabrication of microthruster-based untethered pneumatic pumps and integration with deployable origami structures.",
    projectKo:
      "마이크로 무전선 공압 펌프와 전개형 구조를 활용한 모듈형 우주 아키텍처 기술 개발. 기여: 전체 연구 기획; 마이크로 추력기 기반 무전선 공압 펌프 설계·제작 및 전개형 오리가미 구조와의 통합 주도.",
  },
  {
    title: "NRF Basic Science Research Program",
    titleKo: "한국연구재단 기초연구사업",
    agency: "NRF",
    agencyKo: "한국연구재단(NRF)",
    role: "Research Director: Prof. Anna Lee",
    roleKo: "연구책임자: 이안나 교수",
    amount: "KRW 50,000,000",
    amountKo: "5,000만 원",
    period: "Jun. 2023 – May 2024",
    project:
      "Enhancing Small Satellite Constellation Formation with an Optimized Satellite Propulsion System for Ultra-Responsive Internet Deployment. Contribution: Overall research planning; developed Lab-on-PCB liquid and solid monopropellant microthrusters for the dual propulsion system and evaluated thrust performance.",
    projectKo:
      "초고속 인터넷 보급을 위한 최적화 위성 추진 시스템 기반 소형 위성군 편대 강화. 기여: 전체 연구 기획; 이중 추진 시스템용 Lab-on-PCB 액체·고체 단일추진제 마이크로 추력기 개발 및 추력 성능 평가.",
  },
  {
    title: "NRF Basic Science Research Program",
    titleKo: "한국연구재단 기초연구사업",
    agency: "NRF",
    agencyKo: "한국연구재단(NRF)",
    role: "Research Director: Prof. Anna Lee",
    roleKo: "연구책임자: 이안나 교수",
    amount: "KRW 50,000,000",
    amountKo: "5,000만 원",
    period: "Jun. 2020 – May 2021",
    project:
      "Development of regression rate programmable rocket fuel. Contribution: Overall research planning; developed dip-oscillation coating processes to fabricate multi-layer elastomer-bonded solid propellants with programmable regression rates.",
    projectKo:
      "후퇴율 가변 로켓 연료 개발. 기여: 전체 연구 기획; 후퇴율을 프로그래밍할 수 있는 다층 탄성체 결합 고체 추진제를 제작하는 딥-오실레이션 코팅 공정 개발.",
  },
];
