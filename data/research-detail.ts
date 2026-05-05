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
      "MEMS-based monopropellant micro-thrusters and Lab-on-PCB propellant validation platforms take CubeSat and constellation propulsion from the lab bench to orbit today. By co-fabricating ignitor, combustion chamber, and structural support on a single PCB substrate, the entire propulsion module becomes scalable, reproducible, and mass-manufacturable — closing the gap between research-grade demonstrators and operational small-satellite hardware.",
    pillars: [
      {
        title: "MEMS solid & liquid monopropellant micro-thrusters",
        body: "Thrust class 50 mN – 1 N. Lab-on-PCB technology with multi-mode capabilities (sequential / power / continuous) and Lego-like modular assembly for end-user reconfiguration.",
      },
      {
        title: "Plasma-assisted ignition for green propellants",
        body: "Reliable ignition source for both small-scale (~ 1 N) mono-/bi-propellant thrusters and large-scale (> 100 N) engines using green storable propellants such as N₂O/CH₄ and N₂O/NH₃.",
      },
      {
        title: "Lab-on-Chip propellant validation",
        body: "Integrated, instrumented test platforms that validate propellant chemistry and combustion behavior on the same substrate as the flight thruster — eliminating qualification gaps.",
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
    selectedPubs: [3, 6, 7, 4, 5],
    imageHint: "PCB monopropellant micro-thruster array",
  },
  hybrid: {
    longDescription:
      "Rotating Gliding Arc (RGA) plasma-assisted in-space propulsion targets the hardest regime in chemical propulsion: simultaneously high thrust (5 – 22 N) and high specific impulse (> 500 s). RGA discharges sustain stable arc rotation in the chamber and dramatically extend the operating envelope of green storable propellants — enabling orbital transfer vehicles and kick stages that today rely on hydrazine-class systems.",
    pillars: [
      {
        title: "Rotating Gliding Arc thrusters",
        body: "Plasma-assisted thrusters demonstrating thrust control characteristics with N₂O, H₂O₂, and N₂O/CH₄ propellants. C* up to 136.5%, Isp up to 278.9 s in benchtop tests.",
      },
      {
        title: "AI-driven alloys & additive manufacturing",
        body: "Ti-6Al-4V thin-walled microthrusters fabricated via laser powder bed fusion. Surface roughness engineering for metal–polymer interlocking. Structure-optimized geometries that survive RGA thermal loads.",
      },
      {
        title: "Multiphysics plasma–thermofluid modeling",
        body: "Coupled plasma chemistry + reacting flow simulations to optimize thruster geometry, electrode life, and propellant utilization for OTVs and kick stages.",
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
    selectedPubs: [9, 10, 11, 12, 13],
    imageHint: "RGA plasma thruster discharge",
  },
  photonics: {
    longDescription:
      "Light/solar sails enabled by integrating active-structure thin-film actuators with optical metasurfaces — generating direct photonic forces and reconfigurable attitude control for deep-space missions. The mechanics of thin-film instabilities (wrinkling, buckling, large deformation) is predictive: we co-design metasurface optics with substrate mechanics so that the sail not only catches photons but actively reshapes itself in flight.",
    pillars: [
      {
        title: "Active thin-film actuators on metasurfaces",
        body: "Soft elastomer trilayers that integrate stretchable electrodes via wrinkle structures with optical metasurfaces — sail surface as both propulsion and attitude-control interface.",
      },
      {
        title: "Predictive mechanics of thin-film instabilities",
        body: "Wrinkling of thin films in pre-stretched soft substrate trilayers; buckling of clamped spherical shells with shallowness and geometric imperfection effects.",
      },
      {
        title: "Photonic force & reconfigurable attitude",
        body: "Direct photonic forces and reconfigurable attitude control for deep-space exploration platforms beyond chemical propulsion's reach.",
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
    selectedPubs: [15, 16],
    imageHint: "Solar sail with metasurface and wrinkled thin film",
  },
  other: {
    longDescription:
      "Beyond in-space propulsion, plasma actuation has rich applications in ground-test systems and air-breathing propulsion. The same RGA physics that powers OTV thrusters also enables high-enthalpy hypersonic test environments, re-entry arc wind tunnels, ramjet operating-environment simulators, fully electric jet engines, and VLEO atmosphere-breathing electric propulsion (ABEP).",
    pillars: [
      {
        title: "Plasma high-enthalpy ground tests",
        body: "Hypersonic and re-entry arc wind tunnels driven by rotating gliding arc discharges — high-enthalpy ground-test environments for thermal protection systems and propulsion components.",
      },
      {
        title: "Plasma-augmented airbreathing engines",
        body: "Ramjet operating-environment simulation platforms and fully electric jet engine concepts that leverage RGA discharges for ignition stability and combustion enhancement at extreme conditions.",
      },
      {
        title: "Air-breathing electric propulsion (ABEP)",
        body: "Newton-scale air-breathing plasma thruster using rotating arc discharge — TPR up to 0.708 N/kW, Newton-scale demonstration paving the way for VLEO drag-compensation and persistent low-orbit satellites.",
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
    selectedPubs: [10, 14],
    imageHint: "ABEP plasma thruster and hypersonic arc",
  },
};
