export type Patent = {
  inventors: string;
  inventorsKo?: string;
  year: number;
  title: string;
  titleKo?: string;
  number: string;
  status: "registered" | "pending";
  date: string;
  region: "international" | "domestic";
};

export const patents: Patent[] = [
  {
    inventors: "Lee, J. (first inventor), Jo, H., Lee, E., Son, Y., & Lee, Y.",
    inventorsKo: "이정락(제1발명자), 조한성, 이은지, 손유성, 이용상",
    year: 2024,
    title: "Solar panel module and spacecraft",
    titleKo: "태양전지 모듈 및 우주 비행체",
    number: "U.S. Patent No. US12012235",
    status: "registered",
    date: "2024-06-18",
    region: "international",
  },
  {
    inventors:
      "Lee, J. (first inventor), Lee, A., Lee, E., Son, Y., Jo, H., & Kim, S.",
    inventorsKo:
      "이정락(제1발명자), 이안나, 이은지, 손유성, 조한성, 김성현",
    year: 2023,
    title: "Thrust panel",
    titleKo: "추력 패널",
    number: "U.S. Patent No. US11773808",
    status: "registered",
    date: "2023-10-03",
    region: "international",
  },
  {
    inventors: "Lee, J. (first inventor), Kim, S., & Lee, A.",
    inventorsKo: "이정락(제1발명자), 김성현, 이안나",
    year: 2024,
    title: "Thruster for micro-satellite and manufacturing method thereof",
    titleKo: "초소형 위성용 추력기 및 그 제조 방법",
    number: "U.S. Patent Application No. 18/827975",
    status: "pending",
    date: "2024-09-09",
    region: "international",
  },
];

export const domesticPatentsSummary = {
  total: 14,
  registered: 6,
  pending: 8,
  registeredListKo: [
    "고체 발사체 제조 방법 (KR 10-2181636, 등록 2020-11-17)",
    "질량비 제어형 고체 추진제 (KR 10-2199780, 등록 2020-12-31)",
    "연소가스 재순환 장치 (KR 10-2302860, 등록 2021-09-10)",
    "추력 패널 (KR 10-2413082, 등록 2022-06-21)",
    "고내열성 노즐 제조 방법 (KR 10-2435063, 등록 2022-08-17)",
    "태양전지 모듈 및 우주 비행체 (KR 10-2496872, 등록 2023-02-02)",
  ] as string[],
  pendingListKo: [
    "추력기 패널 (KR 출원 10-2022-0012149, 출원 2022-01-27)",
    "추진제 그레인 제조 방법 (KR 출원 10-2022-0012721, 출원 2022-01-27)",
    "딥-석션 코팅 장치 및 방법 (KR 출원 10-2023-0020201, 출원 2022-02-15)",
    "초소형 위성용 추력기 및 제조 방법 (KR 출원 10-2023-0123311, 출원 2023-09-15)",
    "초소형 위성용 추력기 및 제조 방법 (KR 출원 10-2023-0123312, 출원 2023-09-15)",
    "균사체 복합재 기반 이중 부표 (KR 출원 10-2024-0003651, 출원 2024-01-09)",
    "작동기용 가스 발생기 (KR 출원 10-2024-0051541, 출원 2024-04-17)",
    "공압 장치용 가스 발생기 (KR 출원 10-2024-0057082, 출원 2024-04-29)",
  ] as string[],
  registeredList: [
    "Production method of solid projectile (KR 10-2181636, registered 2020-11-17)",
    "Mass-fraction controlled solid propellant (KR 10-2199780, registered 2020-12-31)",
    "Combustion gas recirculation device (KR 10-2302860, registered 2021-09-10)",
    "Thrust panel (KR 10-2413082, registered 2022-06-21)",
    "Manufacturing method for high-heat-resistant nozzles (KR 10-2435063, registered 2022-08-17)",
    "Solar panel module and spacecraft (KR 10-2496872, registered 2023-02-02)",
  ],
  pendingList: [
    "Thruster panel (KR App. 10-2022-0012149, filed 2022-01-27)",
    "Manufacturing method for propellant grain (KR App. 10-2022-0012721, filed 2022-01-27)",
    "Dip-suction coating device and method (KR App. 10-2023-0020201, filed 2022-02-15)",
    "Thruster for micro-satellite and manufacturing method thereof (KR App. 10-2023-0123311, filed 2023-09-15)",
    "Thruster for micro-satellite and manufacturing method thereof (KR App. 10-2023-0123312, filed 2023-09-15)",
    "Double-layer buoy with mycelium composite material (KR App. 10-2024-0003651, filed 2024-01-09)",
    "Gas generator for actuator (KR App. 10-2024-0051541, filed 2024-04-17)",
    "Gas generator for pneumatic apparatus (KR App. 10-2024-0057082, filed 2024-04-29)",
  ],
};
