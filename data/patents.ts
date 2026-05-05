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
    year: 2024,
    title: "Solar panel module and spacecraft",
    number: "U.S. Patent No. US12012235",
    status: "registered",
    date: "2024-06-18",
    region: "international",
  },
  {
    inventors:
      "Lee, J. (first inventor), Lee, A., Lee, E., Son, Y., Jo, H., & Kim, S.",
    year: 2023,
    title: "Thrust panel",
    number: "U.S. Patent No. US11773808",
    status: "registered",
    date: "2023-10-03",
    region: "international",
  },
  {
    inventors: "Lee, J. (first inventor), Kim, S., & Lee, A.",
    year: 2024,
    title: "Thruster for micro-satellite and manufacturing method thereof",
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
  registeredListKo: [] as string[],
  pendingListKo: [] as string[],
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
