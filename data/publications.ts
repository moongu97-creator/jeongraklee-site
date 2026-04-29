import type { ResearchAreaTag } from "./research";

export type Publication = {
  number: number;
  authors: string;
  year: number;
  title: string;
  venue: string;
  doi?: string;
  url?: string;
  category: ResearchAreaTag;
  note?: string;
  highlight?: boolean;
  myIndex?: number;
  thumbnailUrl?: string;
  /** First-page capture of the paper PDF (used by the marquee) */
  paperImageUrl?: string;
  /** Issue cover image (e.g. journal front/inside-front cover) */
  coverUrl?: string;
  slug?: string;
  /** Single-paragraph narrative — gap, approach, significance flowing together */
  summary?: string;
  /** Key result bullets (numbers, comparisons) */
  highlights?: string[];
  /** Selected figures with captions (rendered in-flow on the detail page) */
  figures?: Array<{ src: string; alt: string; caption: string }>;
  /** Original journal abstract (kept for reference; not rendered by default) */
  abstract?: string;
  videoUrl?: string;
};

export const publications: Publication[] = [
  {
    number: 1,
    authors: "Lee, J., Kim, S., Jo, H., Lee, A.†, & Kang, H.†",
    year: 2026,
    title:
      "Plasma-assisted N₂O/CH₄ combustion in a rotating gliding arc thruster under ultra-lean conditions (O/F = 5–1000)",
    venue: "Aerospace Science and Technology",
    doi: "10.1016/j.ast.2025.111256",
    url: "https://doi.org/10.1016/j.ast.2025.111256",
    category: "chemical",
    highlight: true,
    thumbnailUrl: "/papers/pub-1.png",
    paperImageUrl: "/papers/pub-1-paper.png",
    slug: "n2o-ch4-rga-2026",
    summary:
      "Plasma-assisted combustion in a rotating gliding arc (RGA) thruster expands the operable oxidizer-to-fuel envelope of N₂O/CH₄ mixtures from the conventional near-stoichiometric window all the way to ROF 5–1000, effectively turning a bipropellant into a quasi-monopropellant. The volumetric ignition supplied by the rotating plasma column stabilizes the flame across this entire range; with an extended after-chamber (L = 70 mm) at sub-200 W input, the thruster surpasses the N₂O monopropellant theoretical performance — characteristic velocity (C*) reaches 1468.90 m/s and specific impulse (Isp) 138.16 s near the optimal ROF, while still maintaining 87.8% efficiency at the extreme ROF 1000 limit. The result combines monopropellant safety with bipropellant performance in a low-power architecture suited to microsatellites.",
    highlights: [
      "Lean-burn envelope expanded to ROF 5–1000 — far beyond the conventional near-stoichiometric range.",
      "C* = 1468.90 m/s at near-optimal ROF (98.61% efficiency), exceeding N₂O monopropellant theory by ≈33%.",
      "Stable flame and Isp 138.16 s with sub-200 W plasma power; 87.8% efficiency retained at the extreme ROF 1000 limit.",
      "High-speed imaging confirms volumetric ignition by the rotating plasma column across the entire ROF range.",
    ],
    figures: [
      {
        src: "/papers/pub-1-fig1.png",
        alt: "High-speed flame visualization across ROF 5–1000",
        caption:
          "High-speed flame visualization across the full ROF window — emission intensity and biplanar views show sustained plasma-stabilized combustion under all tested conditions.",
      },
    ],
  },
  {
    number: 2,
    authors: "Lee, J., Kim, S., Jo, H., Lee, A.†, & Kang, H.†",
    year: 2026,
    title:
      "Ammonia-based storable bipropellant (N₂O/NH₃) thruster utilizing dual-mode plasma ignition for enhanced propellant flexibility",
    venue: "Fuel",
    doi: "10.1016/j.fuel.2025.136893",
    url: "https://doi.org/10.1016/j.fuel.2025.136893",
    paperImageUrl: "/papers/pub-2-paper.png",
    category: "chemical",
  },
  {
    number: 3,
    authors: "Lee, J.*, Kim, S.*, Jo, H., & Lee, A.†",
    year: 2024,
    title:
      "Lab-on-PCB solid propellant microthruster with multi-mode thrust capabilities",
    venue: "Lab on a Chip",
    doi: "10.1039/D4LC00516C",
    url: "https://doi.org/10.1039/D4LC00516C",
    paperImageUrl: "/papers/pub-3-paper.png",
    category: "chemical",
    note: "Selected as inside front cover",
    highlight: true,
    thumbnailUrl: "/papers/pub-3.png",
    coverUrl: "/papers/pub-3-cover.png",
    slug: "lab-on-chip-multimode-2024",
    summary:
      "Earlier Lab-on-PCB solid-propellant microthruster (SPMT) arrays fired each chamber segment only once, and the thrust origin shifted between firings — limiting both repeatability and thrust-profile flexibility. Here, multiple solid-propellant cartridges share a single combustion chamber and nozzle, separated by membranes that rupture at ignition. By changing the cartridge ignition pattern, the same hardware runs three modes — Sequential, Power, and Continuous — covering both high-thrust orbital maneuvers and low-thrust attitude holding. Manufactured with standard Lab-on-PCB and surface-mount processes, the device keeps the scalability and mass-production compatibility of the platform while bridging the gap between research demonstrators and operational small-satellite hardware.",
    highlights: [
      "Sequential mode — 49.98 mN mean thrust at 83.30% efficiency, 73.88 s Isp (88.51% of theoretical). 12-firing repeatability: thrust CV 8.49%, total impulse CV 6.74%.",
      "Power mode — simultaneous firing of paired cartridges yields 148.02 mN (≈3× single-cartridge), 98.68% efficiency — near the theoretical maximum.",
      "Continuous mode — staggered firing sustains thrust for 11.52 s with a total impulse of 566.50 mN·s.",
      "Selected as inside front cover, Lab on a Chip, 2024.",
    ],
    figures: [
      {
        src: "/papers/pub-3-fig1.png",
        alt: "Lab-on-PCB fabrication and shared-chamber design",
        caption:
          "Four-layer Lab-on-PCB stack with cartridge chambers, ignition, and nozzle plates; cross-sections show the rupture membrane and the shared chamber. The same hardware runs Sequential, Power, and Continuous modes by changing the ignition pattern.",
      },
      {
        src: "/papers/pub-3-fig7.png",
        alt: "Sequential-mode thrust profiles for three sample thrusters",
        caption:
          "Sequential-mode thrust profiles across three independent thrusters and four cartridge segments. Each firing follows ignition delay → membrane breakage → steady-state thrust, repeated consistently — the basis of multi-mode operation.",
      },
    ],
  },
  {
    number: 4,
    authors: "Lee, J., Kim, S., Song, Y., Lee, S., Kang, H.†, & Lee, A.†",
    year: 2024,
    title:
      "Lab-on-PCB technology for liquid monopropellant microthrusters: design, fabrication, and performance evaluation",
    venue: "Sensors and Actuators A: Physical",
    doi: "10.1016/j.sna.2024.115347",
    url: "https://doi.org/10.1016/j.sna.2024.115347",
    paperImageUrl: "/papers/pub-4-paper.png",
    category: "chemical",
  },
  {
    number: 5,
    authors: "Lee, J., Kim, S., Ryoo, J., Kang, H.†, & Lee, A.†",
    year: 2024,
    title:
      "Conceptual demonstration of a Lego-like modular fabrication method for an engineering model of a small monopropellant PCB thruster",
    venue: "Acta Astronautica",
    doi: "10.1016/j.actaastro.2024.03.012",
    url: "https://doi.org/10.1016/j.actaastro.2024.03.012",
    paperImageUrl: "/papers/pub-5-paper.png",
    category: "chemical",
  },
  {
    number: 6,
    authors: "Lee, J.*, Kim, S.*, Jo, H., Lee, E., Song, Y., & Lee, A.†",
    year: 2023,
    title:
      "Design and fabrication of a scalable solid-propellant micro-thruster array using Lab-on-PCB technology",
    venue: "Sensors and Actuators A: Physical",
    doi: "10.1016/j.sna.2023.114738",
    url: "https://doi.org/10.1016/j.sna.2023.114738",
    paperImageUrl: "/papers/pub-6-paper.png",
    category: "chemical",
  },
  {
    number: 7,
    authors: "Lee, J.*, Jo, H.*, Kim, S., Lee, E., Son, Y., & Lee, A.†",
    year: 2023,
    title:
      "Lab-on-PCB for space propulsion: integrated membraneless micro-ignitor for MEMS solid propellant thruster",
    venue: "Sensors and Actuators A: Physical",
    doi: "10.1016/j.sna.2023.114696",
    url: "https://doi.org/10.1016/j.sna.2023.114696",
    paperImageUrl: "/papers/pub-7-paper.png",
    category: "chemical",
  },
  {
    number: 8,
    authors: "Kang, H., Kim, J., Lee, J., & Kwon, S.†",
    year: 2019,
    title:
      "Green energetic monopropellant with a mixture of hydrogen peroxide and tetraglyme",
    venue: "Combustion and Flame",
    doi: "10.1016/j.combustflame.2019.10.007",
    url: "https://doi.org/10.1016/j.combustflame.2019.10.007",
    category: "chemical",
  },
  {
    number: 9,
    authors:
      "Lee, J.*, Kim, R.E.*, Lee, J.*, Lee, J., Kim, S., Kim, J., Kang, D., Kwon, Y., Kim, D.†, Lee, A.†, & Kim, H.S.†",
    year: 2026,
    title:
      "Surface roughness engineering of mechanical interlocking for enhanced metal–polymer adhesion in additive manufacturing",
    venue: "Virtual and Physical Prototyping",
    doi: "10.1080/17452759.2026.2653924",
    url: "https://doi.org/10.1080/17452759.2026.2653924",
    paperImageUrl: "/papers/pub-9-paper.png",
    category: "hybrid",
  },
  {
    number: 10,
    authors: "Lee, J., Kim, S., Lee, A.†, & Kang, H.†",
    year: 2026,
    title:
      "Novel concept of a Newton-scale air-breathing plasma thruster using rotating arc discharge",
    venue: "Advances in Space Research",
    doi: "10.1016/j.asr.2026.01.005",
    url: "https://doi.org/10.1016/j.asr.2026.01.005",
    paperImageUrl: "/papers/pub-10-paper.png",
    category: "hybrid",
  },
  {
    number: 11,
    authors:
      "Lee, J.*, Lee, J.*, Kim, R.E.*, Kim, S., Kim, K., Kwon, Y., Kang, H., Yun, G., Kim, D.†, Lee, A.†, & Kim, H.S.†",
    year: 2025,
    title:
      "Architecture of Ti-6Al-4V thin-walled microthrusters fabricated via laser powder bed fusion",
    venue: "Virtual and Physical Prototyping",
    doi: "10.1080/17452759.2025.2533944",
    url: "https://doi.org/10.1080/17452759.2025.2533944",
    category: "hybrid",
    highlight: true,
    thumbnailUrl: "/papers/pub-11.png",
    paperImageUrl: "/papers/pub-11-paper.png",
    slug: "ti-microthruster-lpbf-2025",
    summary:
      "Laser powder bed fusion (LPBF) of Ti-6Al-4V is pushed to a sub-millimeter regime to produce thin-walled microthrusters with previously inaccessible geometric fidelity. Decomposition chambers with 0.5 mm walls and Ø180 μm injector orifices are printed at 99.95% relative density and ±4.1% dimensional tolerance, surpassing what conventional precision machining can deliver at this scale. The same hardware sustains 60 s of continuous operation at 700 °C without cracking or deformation, retains 181 MPa tensile strength at temperature, and reaches 84.3% C* efficiency / 91.7% Isp efficiency. With a thrust-to-weight ratio of 4.45 — about 2.5× higher than commercial sub-Newton thrusters in the same class — the work shows that LPBF can directly fabricate flight-grade Ti-6Al-4V microthrusters that are simultaneously light, robust, and high-performing.",
    highlights: [
      "Ti-6Al-4V LPBF prints 0.5 mm walls and Ø180 μm orifices at 99.95% relative density, ±4.1% dimensional tolerance.",
      "60 s continuous operation at 700 °C with no cracking or deformation; tensile strength 181 MPa at temperature.",
      "C* efficiency 84.3% and Isp efficiency 91.7% — performance class of state-of-the-art monopropellant thrusters.",
      "TWR 4.45 — about 2.5× over commercial sub-Newton thrusters of the same thrust class.",
    ],
    figures: [
      {
        src: "/papers/pub-11-fig1.png",
        alt: "Fabrication fidelity validated by X-ray CT",
        caption:
          "Fabrication fidelity validated by X-ray CT. Orifice diameters (D₁, D₂, D₃) and chamber wall thickness (T) of the printed Ti-6Al-4V parts match the CAD geometry within ±4.1%.",
      },
    ],
  },
  {
    number: 12,
    authors: "Lee, J., Kim, J.W., Kim, S., Lee, A.†, & Kang, H.†",
    year: 2025,
    title:
      "Conceptual demonstration of hydrogen peroxide based electro-chemical propulsion with rotating gliding arc",
    venue: "AIAA Journal",
    doi: "10.2514/1.J064284",
    url: "https://doi.org/10.2514/1.J064284",
    category: "hybrid",
    highlight: true,
    thumbnailUrl: "/papers/pub-12.png",
    paperImageUrl: "/papers/pub-12-paper.png",
    slug: "h2o2-rga-aiaa-2025",
    summary:
      "A green monopropellant thruster gains a second energy input — rotating gliding arc (RGA) plasma — that lifts its performance ceiling without changing the propellant. Hydrogen peroxide is first decomposed over a manganese-oxide catalyst (MnOₓ/Al₂O₃, 26.0% Mn doping, 70.63 m²/g surface area), and the hot decomposition gas then passes through an AC 20 kHz RGA discharge that adds electrical energy on top of the chemical heat release. Across multiple inlet pressures (5.0–6.0 bar), chamber pressure rises by 43.6–44.8% and characteristic velocity roughly doubles (217 → 448 m/s) compared with catalytic-only operation, while the thruster sustains 40 s of continuous burn at ~1.25 kW. The hybrid concept opens a route to in-flight thrust modulation — by simply throttling plasma power on a fixed propellant — without the propellant logistics of a bipropellant system.",
    highlights: [
      "Catalytic + RGA hybrid raises C* from 217 to 448 m/s — about 2× the H₂O₂ monopropellant theoretical limit.",
      "Chamber pressure up 44.8% (1.90 → 2.75 bar) at 5.0 bar inlet, evidencing plasma-to-fluid energy transfer.",
      "40 s continuous burn at ~1.25 kW (408 V × 6.37 A) — sustained electro-chemical operation validated.",
      "Throttling plasma power on a fixed propellant enables multi-mode thrust without changing propellant or hardware.",
    ],
    figures: [
      {
        src: "/papers/pub-12-fig1.png",
        alt: "Catalytic-only vs catalyst + RGA operation",
        caption:
          "Catalytic-only (chemical) versus catalyst + RGA (electro-chemical) operation. Plasma activation visibly intensifies the plume and shifts the steady-state pressure and temperature signatures.",
      },
    ],
  },
  {
    number: 13,
    authors: "Lee, J., Kim, S., Lee, A.†, & Kang, H.†",
    year: 2025,
    title:
      "An experimental study of performance and thrust control characteristics of N₂O-based rotating gliding arc thrusters",
    venue: "Advances in Space Research",
    doi: "10.1016/j.asr.2025.01.063",
    url: "https://doi.org/10.1016/j.asr.2025.01.063",
    paperImageUrl: "/papers/pub-13-paper.png",
    category: "hybrid",
  },
  {
    number: 14,
    authors: "Kang, H., Lee, J., Kim, K.-T., Song, Y., & Lee, D.†",
    year: 2022,
    title:
      "Conceptual demonstration of Martian atmosphere-breathing electrical supersonic thruster with CO₂-based rotating gliding arc",
    venue: "Acta Astronautica",
    doi: "10.1016/j.actaastro.2022.07.058",
    url: "https://doi.org/10.1016/j.actaastro.2022.07.058",
    category: "hybrid",
  },
  {
    number: 15,
    authors: "Kwak, H.*, Lee, J.*, Kim, J.*, Jo, H., Ki, K., & Lee, A.†",
    year: 2026,
    title:
      "Wrinkling of thin films in pre-stretched soft substrate trilayers",
    venue: "International Journal of Mechanical Sciences",
    doi: "10.1016/j.ijmecsci.2025.111213",
    url: "https://doi.org/10.1016/j.ijmecsci.2025.111213",
    category: "photonics",
    highlight: true,
    thumbnailUrl: "/papers/pub-15.png",
    paperImageUrl: "/papers/pub-15-paper.png",
    slug: "wrinkling-trilayers-2026",
    summary:
      "Pre-stretching introduces an extra geometric degree of freedom into the classical thin-film–on–soft-substrate wrinkling problem. By placing a thin film between two pre-stretched soft substrates and then releasing the system, this work measures and predicts how the wrinkle wavelength and amplitude evolve as functions of pre-stretch and modulus mismatch. Experiments and theory together map a phase space in which the trilayer's morphology can be tuned by stretch alone — decoupling wavelength from substrate stiffness in regimes that bilayer systems cannot reach. The result is a useful design lever for stretchable circuitry, optical metamaterials, and thin-film mechanics in general.",
    highlights: [
      "Trilayer geometry decouples wrinkle wavelength from substrate stiffness — controllable by pre-stretch alone.",
      "Wavelength scales non-monotonically with pre-stretch, revealing transition regimes set by modulus ratio and geometry.",
      "Quantitative experiment–theory map of wavelength and amplitude across a pre-stretch / modulus phase space.",
      "Direct relevance to stretchable electrodes, photonic metamaterials, and thin-film instability design.",
    ],
    figures: [
      {
        src: "/papers/pub-15-fig1.png",
        alt: "Experimental fabrication of the wrinkling trilayer",
        caption:
          "Experimental fabrication of the wrinkling trilayer — pre-stretch and film coating, curing/attaching, and the relaxing-and-buckling step that locks in the wrinkle morphology.",
      },
    ],
  },
  {
    number: 16,
    authors: "Ki, K.*, Lee, J.*, & Lee, A.†",
    year: 2024,
    title:
      "Combined influence of shallowness and geometric imperfection on the buckling of clamped spherical shells",
    venue: "Journal of the Mechanics and Physics of Solids",
    doi: "10.1016/j.jmps.2024.105554",
    url: "https://doi.org/10.1016/j.jmps.2024.105554",
    category: "photonics",
    highlight: true,
    thumbnailUrl: "/papers/pub-16.png",
    paperImageUrl: "/papers/pub-16-paper.png",
    slug: "spherical-shell-buckling-2024",
    summary:
      "The classical view that geometric imperfections always lower the buckling load of a clamped spherical shell turns out to be incomplete. By introducing precisely controlled Gaussian-profile dimples into elastomeric (VPS) hemispherical shells across a range of shallowness (R/t = 30–80) and varying defect depth and width, this study shows that the knockdown factor is non-monotonic in shallowness — and that, in the right regime, certain defect placements actually stabilize rather than destabilize the structure. Three-dimensional finite-element analysis traces the underlying physics to a bifurcation from axisymmetric to non-axisymmetric buckling modes. The work reframes how engineers can think about pressure-vessel design: imperfections are not always penalties, and the standard 2D-axisymmetric analyses systematically over-predict buckling loads in the shallow regime.",
    highlights: [
      "Knockdown factor (KDF) varies non-monotonically with shallowness — challenging the classical monotonic-decrease assumption.",
      "Non-axisymmetric buckling regime achieves KDF > 0.81 — certain defects stabilize rather than weaken the shell.",
      "Mode bifurcation from axisymmetric to non-axisymmetric explains the 'bamboo-node' strengthening mechanism.",
      "3D FEM is required for shallow shells; 2D axisymmetric analysis systematically over-predicts buckling loads.",
    ],
    figures: [
      {
        src: "/papers/pub-16-fig1.png",
        alt: "Buckling response across the shallowness range",
        caption:
          "Buckling response across the shallowness range. Bifurcation envelope, normalized load–displacement curves, and pressure–time signatures with FEM correlation.",
      },
    ],
  },
];

export type UnderReview = {
  number: number;
  authors: string;
  title: string;
  myIndex?: number;
};

export const underReview: UnderReview[] = [
  {
    number: 1,
    authors:
      "Kim, R.E.*, Lee, J.*, Ha, S.V., Kim, D., Lee, A., Lee, J.†, & Kim, H.S.†",
    title:
      "Microstructure and mechanical properties of 316L stainless steel fabricated by laser wire directed energy deposition",
    myIndex: 1,
  },
  {
    number: 2,
    authors: "Lee, J., Lee, G., Kim, S., Jo, H., Lee, A.†, & Kang, H.†",
    title:
      "Experimental investigation of swirl-injected bypass flow effects in an N₂O-based rotating gliding arc thruster",
  },
  {
    number: 3,
    authors: "Kim, S.*, Lee, J.*, Ki, K., Jo, H., & Lee, A.†",
    title:
      "Multi-degree-of-freedom pouch motors enabled by integration of electrical and pneumatic systems using flexible PCB architecture",
  },
  {
    number: 4,
    authors:
      "Kim, R.E.*, Lee, J.*, Lee, J.*, Kim, S., Lee, J., Kim, K., Kwon, Y., Kang, H., Yun, G., Lee, A.†, Kim, D.†, & Kim, H.S.†",
    title:
      "Additively manufactured structure-optimized Ti-6Al-4V microthrusters: unveiling size effects from sample to system level",
    myIndex: 2,
  },
  {
    number: 5,
    authors: "Lee, J., Kwak, H., Jo, H., & Lee, A.†",
    title:
      "Thickness control and uniformity in dip-oscillation coating of cylindrical substrates",
  },
  {
    number: 6,
    authors: "Lee, J., Kim, S., Jo, H., Jung, J., Lee, A.†, & Kang, H.†",
    title:
      "Manufacturing method for green monopropellant microthruster using metal PCB production process",
  },
];

export const publicationsByCategory = {
  chemical: publications.filter((p) => p.category === "chemical"),
  hybrid: publications.filter((p) => p.category === "hybrid"),
  photonics: publications.filter((p) => p.category === "photonics"),
  other: publications.filter((p) => p.category === "other"),
};
