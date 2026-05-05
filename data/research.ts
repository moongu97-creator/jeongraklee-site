export type ResearchAreaTag = "chemical" | "hybrid" | "photonics" | "other";

export type ResearchArea = {
  tag: ResearchAreaTag;
  index: number;
  title: string;
  titleKo?: string;
  horizon: string;
  horizonKo?: string;
  summary: string;
  summaryKo?: string;
  bullets: string[];
  bulletsKo?: string[];
};

export const researchAreas: ResearchArea[] = [
  {
    tag: "chemical",
    index: 1,
    title: "Advanced Chemical Propulsion",
    titleKo: "첨단 화학 추진",
    horizon: "Mission-Ready",
    horizonKo: "현재 — 임무 가능",
    summary:
      "MEMS-based monopropellant micro-thrusters and Lab-on-a-Chip propellant validation platforms that take CubeSat and constellation missions from lab to orbit today.",
    summaryKo:
      "큐브샛과 위성군에 바로 들어갈 수 있는 MEMS 단일추진제 마이크로 추력기, 그리고 Lab-on-a-Chip 추진제 검증 플랫폼. 실험실 시연을 넘어 실제 궤도 운용까지 가는 길을 만듭니다.",
    bullets: [
      "MEMS solid and liquid monopropellant micro-thrusters (50 mN – 1 N) for CubeSats and constellations.",
      "Lab-on-a-Chip propellant validation platforms with multi-mode thrust capability.",
      "Plasma-assisted ignition for small-scale (~ 1 N) mono-/bi-propellant thrusters and reliable ignition source for large-scale (> 100 N) engines using green storable propellants (N₂O/CH₄, N₂O/NH₃).",
    ],
    bulletsKo: [
      "50 mN – 1 N급 MEMS 고체·액체 단일추진제 마이크로 추력기 — 큐브샛과 위성군용.",
      "다중 모드 추력을 구현하는 Lab-on-a-Chip 추진제 검증 플랫폼.",
      "친환경 저장성 추진제(N₂O/CH₄, N₂O/NH₃) 기반 소형(~ 1 N) 단일·이원 추력기와 대형(> 100 N) 엔진용 플라즈마 보조 점화.",
    ],
  },
  {
    tag: "hybrid",
    index: 2,
    title: "Chemical–Plasma Hybrid Propulsion",
    titleKo: "화학–플라즈마 하이브리드 추진",
    horizon: "Near-Term Frontier",
    horizonKo: "근시일 — 최전선",
    summary:
      "Rotating Gliding Arc (RGA)-based plasma-assisted in-space propulsion targeting the simultaneous high-thrust, high-Isp (5–22 N, > 500 s) regime that orbital transfer vehicles and kick stages need.",
    summaryKo:
      "회전 활강 아크(RGA)로 작동하는 플라즈마 보조 추진. OTV와 킥 스테이지가 필요로 하는 고추력·고비추력(5–22 N, > 500 s) 영역을 동시에 노립니다.",
    bullets: [
      "Novel RGA-based plasma-assisted propulsion for OTVs and kick stages.",
      "AI-driven alloy development and additive manufacturing process optimization for RGA-compatible components.",
      "Multiphysics plasma–thermofluid modeling for thruster-geometry optimization.",
    ],
    bulletsKo: [
      "OTV·킥 스테이지를 위한 신개념 RGA 플라즈마 보조 추진.",
      "RGA 호환 부품을 위한 AI 기반 합금 설계와 적층 제조 공정 최적화.",
      "추력기 형상 최적화를 위한 플라즈마–열유체 다물리 시뮬레이션.",
    ],
  },
  {
    tag: "photonics",
    index: 3,
    title: "Photonics-Based Space Propulsion",
    titleKo: "광자 기반 우주 추진",
    horizon: "Long-Term Vision",
    horizonKo: "장기 — 비전",
    summary:
      "Light/solar sails that integrate active-structure thin-film actuators with optical metasurfaces — direct photonic forces and reconfigurable attitude control to open deep-space exploration.",
    summaryKo:
      "광학 메타표면을 입힌 능동 박막. 광자만으로 추진하고 자세까지 능동 제어하는 광돛·태양돛으로 심우주 탐사를 엽니다.",
    bullets: [
      "Active thin-film actuators integrated with optical metasurfaces.",
      "Direct photonic-force generation and reconfigurable attitude control.",
      "Predictive mechanics of thin-film instabilities (wrinkling, buckling, large deformation).",
    ],
    bulletsKo: [
      "광학 메타표면을 결합한 능동 박막 작동기.",
      "광자력 직접 추진과 능동 자세 제어.",
      "박막 불안정성(주름·좌굴·대변형)의 예측 역학.",
    ],
  },
  {
    tag: "other",
    index: 4,
    title: "Other Aerospace Applications",
    titleKo: "기타 항공우주 응용",
    horizon: "Cross-cutting",
    horizonKo: "통합 응용",
    summary:
      "Plasma-based high-enthalpy ground-test systems and air-breathing electric propulsion that broaden the impact of plasma actuation beyond in-space chemical thrusters.",
    summaryKo:
      "플라즈마 기술을 우주용 화학 추력기 너머까지 — 고엔탈피 지상시험 시스템과 흡입식 전기 추진.",
    bullets: [
      "Hypersonic and re-entry arc wind tunnels.",
      "Ramjet operating environment simulation platform; fully electric jet engines.",
      "VLEO atmosphere-breathing electric propulsion (ABEP).",
    ],
    bulletsKo: [
      "극초음속·재진입 아크 풍동.",
      "램제트 운용 환경 모사 플랫폼과 전기식 제트 엔진.",
      "초저궤도(VLEO) 흡입식 전기 추진(ABEP).",
    ],
  },
];
