export type Grant = {
  title: string;
  agency: string;
  role: string;
  amount?: string;
  period: string;
  project: string;
  highlight?: boolean;
};

export const grantsAsPI: Grant[] = [
  {
    title: "Sejong Science Fellowship",
    agency: "National Research Foundation of Korea (NRF)",
    role: "Principal Investigator",
    amount: "KRW 500,000,000",
    period: "Mar. 2026 – Feb. 2031",
    project:
      "Multiphysics-Based Design of High Pressure Plasma-Chemical Hybrid Propulsion for High Thrust & Specific Impulse Space Exploration and Maneuvering Platforms",
    highlight: true,
  },
  {
    title: "POSTECH Next Generation Convergence Research Pioneer Program",
    agency: "POSTECH",
    role: "Subproject Leader (PI: Kyungtae Kim)",
    amount: "KRW 20,000,000",
    period: "Mar. 2025 – Feb. 2026",
    project:
      "Development of a Hybrid Plasma Propulsion System for Small Satellites Enabled by Metal Additive Manufacturing",
  },
  {
    title: "POSTECH Alchemist Program",
    agency: "POSTECH",
    role: "Principal Investigator",
    amount: "KRW 15,000,000",
    period: "Apr. 2024 – Feb. 2025",
    project:
      "Verification of Key Enabling Technologies for Modular Space Architecture Using Miniature Untethered Pneumatic Pumps and Deployable Structures",
  },
  {
    title: "POSTECH Alchemist Program",
    agency: "POSTECH",
    role: "Principal Investigator",
    amount: "KRW 20,315,000",
    period: "Nov. 2021 – Aug. 2022",
    project:
      "Development of an Optimized Satellite Thruster for Small Satellite Constellation-Based Ultra-Low-Latency Internet Networks",
  },
  {
    title: "SBS Foundation Research Fellowship",
    agency: "SBS Foundation",
    role: "Principal Investigator",
    amount: "KRW 97,000,000",
    period: "Sep. 2020 – Feb. 2026",
    project:
      "Development of a Shell Theory-Based Integrated Structural Optimization System for Launch Vehicle Components",
    highlight: true,
  },
];

export const grantsAsParticipant: Grant[] = [
  {
    title: "NRF Young Researcher Program",
    agency: "NRF",
    role: "Research Director: Prof. Anna Lee",
    amount: "KRW 1,200,000,000 (5 years)",
    period: "Apr. 2024 – Feb. 2029",
    project:
      "Development of Modular Space Architecture Technology using Micro Untethered Pneumatic Pumps and Deployable Structures. Contribution: Overall research planning; led design and fabrication of microthruster-based untethered pneumatic pumps and integration with deployable origami structures.",
  },
  {
    title: "NRF Basic Science Research Program",
    agency: "NRF",
    role: "Research Director: Prof. Anna Lee",
    amount: "KRW 50,000,000",
    period: "Jun. 2023 – May 2024",
    project:
      "Enhancing Small Satellite Constellation Formation with an Optimized Satellite Propulsion System for Ultra-Responsive Internet Deployment. Contribution: Overall research planning; developed Lab-on-PCB liquid and solid monopropellant microthrusters for the dual propulsion system and evaluated thrust performance.",
  },
  {
    title: "NRF Basic Science Research Program",
    agency: "NRF",
    role: "Research Director: Prof. Anna Lee",
    amount: "KRW 50,000,000",
    period: "Jun. 2020 – May 2021",
    project:
      "Development of regression rate programmable rocket fuel. Contribution: Overall research planning; developed dip-oscillation coating processes to fabricate multi-layer elastomer-bonded solid propellants with programmable regression rates.",
  },
];
