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
    category: "chemical",
    highlight: true,
  },
  {
    number: 3,
    authors: "Lee, J.*, Kim, S.*, Jo, H., & Lee, A.†",
    year: 2024,
    title:
      "Lab-on-PCB solid propellant microthruster with multi-mode thrust capabilities",
    venue: "Lab on a Chip",
    doi: "10.1039/D4LC00157E",
    url: "https://doi.org/10.1039/D4LC00157E",
    category: "chemical",
    note: "Selected as inside front cover",
    highlight: true,
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
    category: "hybrid",
    highlight: true,
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
    category: "hybrid",
    highlight: true,
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
  },
];

export type UnderReview = {
  number: number;
  authors: string;
  title: string;
};

export const underReview: UnderReview[] = [
  {
    number: 1,
    authors:
      "Kim, R.E.*, Lee, J.*, Ha, S.V., Kim, D., Lee, A., Lee, J.†, & Kim, H.S.†",
    title:
      "Microstructure and mechanical properties of 316L stainless steel fabricated by laser wire directed energy deposition",
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
