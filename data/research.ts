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
    horizon: "Mission-Ready",
    summary:
      "MEMS-based monopropellant micro-thrusters and Lab-on-a-Chip propellant validation platforms that take CubeSat and constellation missions from lab to orbit today.",
    bullets: [
      "MEMS solid and liquid monopropellant micro-thrusters (50 mN – 1 N) for CubeSats and constellations.",
      "Lab-on-a-Chip propellant validation platforms with multi-mode thrust capability.",
      "Plasma-assisted ignition for small-scale (~ 1 N) mono-/bi-propellant thrusters and reliable ignition source for large-scale (> 100 N) engines using green storable propellants (N₂O/CH₄, N₂O/NH₃).",
    ],
  },
  {
    tag: "hybrid",
    index: 2,
    title: "Chemical–Plasma Hybrid Propulsion",
    horizon: "Near-Term Frontier",
    summary:
      "Rotating Gliding Arc (RGA)-based plasma-assisted in-space propulsion targeting the simultaneous high-thrust, high-Isp (5–22 N, > 500 s) regime that orbital transfer vehicles and kick stages need.",
    bullets: [
      "Novel RGA-based plasma-assisted propulsion for OTVs and kick stages.",
      "AI-driven alloy development and additive manufacturing process optimization for RGA-compatible components.",
      "Multiphysics plasma–thermofluid modeling for thruster-geometry optimization.",
    ],
  },
  {
    tag: "photonics",
    index: 3,
    title: "Photonics-Based Space Propulsion",
    horizon: "Long-Term Vision",
    summary:
      "Light/solar sails that integrate active-structure thin-film actuators with optical metasurfaces — direct photonic forces and reconfigurable attitude control to open deep-space exploration.",
    bullets: [
      "Active thin-film actuators integrated with optical metasurfaces.",
      "Direct photonic-force generation and reconfigurable attitude control.",
      "Predictive mechanics of thin-film instabilities (wrinkling, buckling, large deformation).",
    ],
  },
  {
    tag: "other",
    index: 4,
    title: "Other Aerospace Applications",
    horizon: "Cross-cutting",
    summary:
      "Plasma-based high-enthalpy ground-test systems and air-breathing electric propulsion that broaden the impact of plasma actuation beyond in-space chemical thrusters.",
    bullets: [
      "Hypersonic and re-entry arc wind tunnels.",
      "Ramjet operating environment simulation platform; fully electric jet engines.",
      "VLEO atmosphere-breathing electric propulsion (ABEP).",
    ],
  },
];
