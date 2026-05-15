import type { ResearchAreaTag } from "./research";

export type ResearchDetail = {
  longDescription: string;
  longDescriptionKo?: string;
  pillars: { title: string; body: string; titleKo?: string; bodyKo?: string }[];
  keywords: string[];
  keywordsKo?: string[];
  selectedPubs: number[];
  imageHint: string;
  imageHintKo?: string;
};

export const researchDetails: Record<ResearchAreaTag, ResearchDetail> = {
  chemical: {
    longDescription:
      "Chemical propulsion sits on three threads. First, MEMS-based monopropellant micro-thrusters co-fabricate ignitor, combustion chamber, and structural support on a single PCB substrate, so the entire CubeSat/constellation propulsion module becomes scalable, reproducible, and mass-manufacturable. Second, Lab-on-PCB propellant validation platforms close the qualification gap between research-grade demonstrators and flight units by testing propellant chemistry on the same substrate as the thruster. Third, plasma-assisted ignition of green storable bipropellants (N₂O/CH₄, N₂O/NH₃) extends the same RGA ignition source from small-scale (~1 N) mono-/bi-propellant thrusters to large-scale (>100 N) kick-stage engines. Together they take chemical propulsion from the lab bench to orbital operation today — from CubeSats up to large kick stages.",
    longDescriptionKo:
      "화학 추진은 세 줄기로 짜여 있습니다. 첫째, MEMS 단일추진제 마이크로 추력기는 점화기·연소실·구조 지지부를 하나의 PCB 기판에 함께 만들어 큐브샛·위성군 추진 모듈 전체를 양산 가능한 구조로 정리합니다. 둘째, Lab-on-PCB 추진제 검증 플랫폼이 추진제 화학을 비행용과 동일한 기판 위에서 검증해, 연구용 시연체와 실 운용 비행 유닛 사이의 인증 간격을 메웁니다. 셋째, 친환경 저장성 bipropellant(N₂O/CH₄, N₂O/NH₃)의 플라즈마 보조 점화로 소형(~1 N) 단일·이원 추력기부터 대형(>100 N) 킥 스테이지 엔진까지 동일한 RGA 점화원을 적용합니다. 세 줄기가 함께 화학 추진을 실험실에서 궤도 운용으로 끌고 갑니다 — 큐브샛부터 대형 킥 스테이지까지.",
    pillars: [
      {
        title: "MEMS solid & liquid monopropellant micro-thrusters",
        titleKo: "MEMS 고체·액체 단일추진제 마이크로 추력기",
        body: "Thrust class 50 mN – 1 N. Lab-on-PCB technology with multi-mode capabilities (sequential / power / continuous) and Lego-like modular assembly for end-user reconfiguration.",
        bodyKo:
          "추력 50 mN – 1 N. Lab-on-PCB 기술로 다중 모드(순차/파워/연속) 운용을 구현하고, 사용자 재구성이 가능한 레고 방식 모듈 조립을 지원합니다.",
      },
      {
        title: "Plasma-assisted ignition for green propellants",
        titleKo: "친환경 추진제용 플라즈마 보조 점화",
        body: "Reliable ignition source for both small-scale (~ 1 N) mono-/bi-propellant thrusters and large-scale (> 100 N) engines using green storable propellants such as N₂O/CH₄ and N₂O/NH₃.",
        bodyKo:
          "친환경 저장성 추진제(N₂O/CH₄, N₂O/NH₃)를 사용하는 소형(~ 1 N) 단일·이원 추진제 추력기와 대형(> 100 N) 엔진 양쪽 모두에 신뢰성 있는 점화원을 제공합니다.",
      },
      {
        title: "Lab-on-Chip propellant validation",
        titleKo: "Lab-on-Chip 추진제 검증",
        body: "Integrated, instrumented test platforms that validate propellant chemistry and combustion behavior on the same substrate as the flight thruster — eliminating qualification gaps.",
        bodyKo:
          "비행용 추력기와 동일한 기판 위에서 추진제 화학·연소 거동을 검증하는 통합 계측 시험 플랫폼으로, 인증 간 격차를 제거합니다.",
      },
    ],
    keywords: [
      "MEMS",
      "Lab-on-PCB",
      "monopropellant",
      "CubeSat",
      "scalable array",
      "plasma-assisted ignition",
      "green propellant",
    ],
    keywordsKo: [
      "MEMS",
      "Lab-on-PCB",
      "단일추진제",
      "큐브샛",
      "확장형 어레이",
      "플라즈마 보조 점화",
      "친환경 추진제",
    ],
    selectedPubs: [3, 6, 7, 4, 5],
    imageHint: "PCB monopropellant micro-thruster array",
    imageHintKo: "PCB 단일추진제 마이크로 추력기 어레이",
  },
  hybrid: {
    longDescription:
      "Rotating Gliding Arc (RGA) plasma-assisted in-space propulsion targets the hardest regime in chemical propulsion: simultaneously high thrust (5 – 22 N) and high specific impulse (> 500 s). RGA discharges sustain stable arc rotation in the chamber and dramatically extend the operating envelope of green storable propellants — enabling orbital transfer vehicles and kick stages that today rely on hydrazine-class systems.",
    longDescriptionKo:
      "회전 활강 아크(RGA) 플라즈마 보조 우주 추진은 화학 추진에서 가장 어려운 영역, 고추력(5 – 22 N)과 고비추력(> 500 s)의 동시 달성을 노립니다. RGA 방전은 챔버 안에서 아크의 회전을 안정적으로 유지하면서 친환경 저장성 추진제의 운용 폭을 크게 넓혀, 지금 하이드라진급 시스템이 도맡고 있는 궤도 천이체와 킥 스테이지의 자리를 대체합니다.",
    pillars: [
      {
        title: "Rotating Gliding Arc thrusters",
        titleKo: "회전 활강 아크 추력기",
        body: "Plasma-assisted thrusters demonstrating thrust control characteristics with N₂O, H₂O₂, and N₂O/CH₄ propellants. C* up to 136.5%, Isp up to 278.9 s in benchtop tests.",
        bodyKo:
          "N₂O, H₂O₂, N₂O/CH₄ 추진제로 추력 제어 특성을 입증한 플라즈마 보조 추력기. 벤치톱 시험에서 C* 최대 136.5%, Isp 최대 278.9 s 달성.",
      },
      {
        title: "AI-driven alloys & additive manufacturing",
        titleKo: "AI 기반 합금·적층 제조",
        body: "Ti-6Al-4V thin-walled microthrusters fabricated via laser powder bed fusion. Surface roughness engineering for metal–polymer interlocking. Structure-optimized geometries that survive RGA thermal loads.",
        bodyKo:
          "레이저 분말 베드 융합(LPBF)으로 제작한 Ti-6Al-4V 박벽 마이크로 추력기. 금속–폴리머 기계적 결합을 위한 표면 거칠기 공학. RGA 열 하중을 견디는 구조 최적화 형상.",
      },
      {
        title: "Multiphysics plasma–thermofluid modeling",
        titleKo: "플라즈마–열유체 다물리 모델링",
        body: "Coupled plasma chemistry + reacting flow simulations to optimize thruster geometry, electrode life, and propellant utilization for OTVs and kick stages.",
        bodyKo:
          "플라즈마 화학과 반응 유동을 결합한 시뮬레이션으로 OTV·킥 스테이지용 추력기 형상, 전극 수명, 추진제 활용도를 최적화합니다.",
      },
    ],
    keywords: [
      "rotating gliding arc",
      "OTV",
      "kick stage",
      "additive manufacturing",
      "Ti-6Al-4V LPBF",
      "multiphysics",
      "high Isp",
    ],
    keywordsKo: [
      "회전 활강 아크",
      "OTV",
      "킥 스테이지",
      "적층 제조",
      "Ti-6Al-4V LPBF",
      "다물리",
      "고비추력",
    ],
    selectedPubs: [9, 10, 11, 12, 13],
    imageHint: "RGA plasma thruster discharge",
    imageHintKo: "RGA 플라즈마 추력기 방전 장면",
  },
  photonics: {
    longDescription:
      "Light/solar sails enabled by integrating active-structure thin-film actuators with optical metasurfaces — generating direct photonic forces and reconfigurable attitude control for deep-space missions. The mechanics of thin-film instabilities (wrinkling, buckling, large deformation) is predictive: we co-design metasurface optics with substrate mechanics so that the sail not only catches photons but actively reshapes itself in flight.",
    longDescriptionKo:
      "능동 박막 작동기와 광학 메타표면을 결합한 광돛·태양돛으로 광자력 직접 추진과 능동 자세 제어를 심우주 임무에 풀어 놓습니다. 박막의 불안정성(주름, 좌굴, 대변형)은 예측 가능한 영역입니다. 메타표면 광학과 기판 역학을 함께 설계하면, 돛은 광자를 받기만 하는 것이 아니라 비행 중에 자기 형상을 능동적으로 다시 짜냅니다.",
    pillars: [
      {
        title: "Active thin-film actuators on metasurfaces",
        titleKo: "메타표면 위 능동 박막 작동기",
        body: "Soft elastomer trilayers that integrate stretchable electrodes via wrinkle structures with optical metasurfaces — sail surface as both propulsion and attitude-control interface.",
        bodyKo:
          "주름 구조를 통한 신축성 전극을 광학 메타표면과 통합한 연질 탄성체 삼중층 — 돛 표면이 추진과 자세 제어 인터페이스 양쪽 역할을 수행합니다.",
      },
      {
        title: "Predictive mechanics of thin-film instabilities",
        titleKo: "박막 불안정성의 예측 역학",
        body: "Wrinkling of thin films in pre-stretched soft substrate trilayers; buckling of clamped spherical shells with shallowness and geometric imperfection effects.",
        bodyKo:
          "사전 인장된 연질 기판 삼중층 내 박막의 주름; 얕음 정도와 기하학적 결함 효과를 고려한 고정 구형 셸의 좌굴.",
      },
      {
        title: "Photonic force & reconfigurable attitude",
        titleKo: "광자력과 재구성 가능한 자세 제어",
        body: "Direct photonic forces and reconfigurable attitude control for deep-space exploration platforms beyond chemical propulsion's reach.",
        bodyKo:
          "화학 추진의 도달 한계를 넘어서는 심우주 탐사 플랫폼을 위한 직접 광자력 및 재구성 가능한 자세 제어.",
      },
    ],
    keywords: [
      "solar sail",
      "light sail",
      "optical metasurface",
      "wrinkling",
      "buckling",
      "thin-film mechanics",
      "deep space",
    ],
    keywordsKo: [
      "태양돛",
      "광돛",
      "광학 메타표면",
      "주름",
      "좌굴",
      "박막 역학",
      "심우주",
    ],
    selectedPubs: [15, 16],
    imageHint: "Solar sail with metasurface and wrinkled thin film",
    imageHintKo: "메타표면과 주름 박막을 갖춘 태양돛",
  },
  other: {
    longDescription:
      "Beyond in-space propulsion, plasma actuation has rich applications in ground-test systems and air-breathing propulsion. The same RGA physics that powers OTV thrusters also enables high-enthalpy hypersonic test environments, re-entry arc wind tunnels, ramjet operating-environment simulators, fully electric jet engines, and VLEO atmosphere-breathing electric propulsion (ABEP).",
    longDescriptionKo:
      "우주 추진을 넘어, 플라즈마 기술은 지상 시험 시스템과 흡입식 추진에서도 응용 폭이 넓습니다. OTV 추력기를 굴리는 RGA 물리가 그대로 고엔탈피 극초음속 시험 환경, 재진입 아크 풍동, 램제트 환경 모사 장치, 전기식 제트 엔진, 그리고 초저궤도(VLEO) 흡입식 전기 추진(ABEP)으로 이어집니다.",
    pillars: [
      {
        title: "Plasma high-enthalpy ground tests",
        titleKo: "플라즈마 고엔탈피 지상 시험",
        body: "Hypersonic and re-entry arc wind tunnels driven by rotating gliding arc discharges — high-enthalpy ground-test environments for thermal protection systems and propulsion components.",
        bodyKo:
          "회전 활강 아크 방전으로 구동되는 극초음속·재진입 아크 풍동 — 열 보호 시스템과 추진 부품을 위한 고엔탈피 지상 시험 환경.",
      },
      {
        title: "Plasma-augmented airbreathing engines",
        titleKo: "플라즈마 보조 흡입식 엔진",
        body: "Ramjet operating-environment simulation platforms and fully electric jet engine concepts that leverage RGA discharges for ignition stability and combustion enhancement at extreme conditions.",
        bodyKo:
          "극한 조건에서의 점화 안정성과 연소 강화를 위해 RGA 방전을 활용하는 램제트 운용 환경 모사 플랫폼 및 전기식 제트 엔진 개념.",
      },
      {
        title: "Air-breathing electric propulsion (ABEP)",
        titleKo: "흡입식 전기 추진(ABEP)",
        body: "Newton-scale air-breathing plasma thruster using rotating arc discharge — TPR up to 0.708 N/kW, Newton-scale demonstration paving the way for VLEO drag-compensation and persistent low-orbit satellites.",
        bodyKo:
          "회전 아크 방전을 사용하는 뉴턴급 흡입식 플라즈마 추력기 — TPR 최대 0.708 N/kW, 뉴턴급 입증으로 VLEO 항력 보상과 지속형 저궤도 위성의 길을 열었습니다.",
      },
    ],
    keywords: [
      "hypersonic",
      "re-entry",
      "ramjet",
      "electric jet",
      "ABEP",
      "VLEO",
      "ground test",
    ],
    keywordsKo: [
      "극초음속",
      "재진입",
      "램제트",
      "전기식 제트",
      "ABEP",
      "VLEO",
      "지상 시험",
    ],
    selectedPubs: [10, 14],
    imageHint: "ABEP plasma thruster and hypersonic arc",
    imageHintKo: "ABEP 플라즈마 추력기와 극초음속 아크",
  },
};
