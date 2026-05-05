export type InvitedTalk = {
  number: number;
  host: string;
  hostKo?: string;
  title: string;
  titleKo?: string;
  date: string;
  dateKo?: string;
  location: string;
  locationKo?: string;
  hostedBy: string;
  hostedByKo?: string;
};

export const invitedTalks: InvitedTalk[] = [
  {
    number: 1,
    host: "Department of Mechanical Engineering, Ajou University",
    title:
      "The Path to Next-Generation Space Propulsion: From Chemical to Plasma, and Lightsail",
    date: "April 14, 2026",
    location: "Suwon, Korea",
    hostedBy: "Prof. Jonghyun Ha",
  },
  {
    number: 2,
    host: "Intergravity Inc.",
    title:
      "Application of Rotating Gliding Arc (RGA) to In-Space Chemical Propulsion",
    date: "February 6, 2026",
    location: "Daejeon, Korea",
    hostedBy: "Myungbo Shim, COO",
  },
  {
    number: 3,
    host: "Department of Mechanical Engineering, Kyungpook National University",
    title:
      "Application of Rotating Gliding Arc (RGA) to In-Space Chemical Propulsion",
    date: "January 22, 2026",
    location: "Daegu, Korea",
    hostedBy: "Prof. Jeongpyo Lee",
  },
  {
    number: 4,
    host: "Korean Air",
    title:
      "Application of Rotating Gliding Arc (RGA) in Propulsion: From Microthrusters to OTV Propulsion Systems",
    date: "September 9, 2025",
    location: "Daejeon, Korea",
    hostedBy: "Juhyun Sim, Senior Researcher",
  },
  {
    number: 5,
    host: "Department of Mechanical Engineering, Chosun University",
    title:
      "Application of RGA in Propulsion: From Microthrusters to OTV Propulsion Systems",
    date: "August 14, 2025",
    location: "Gwangju, Korea",
    hostedBy: "Prof. Taegyu Kim",
  },
  {
    number: 6,
    host: "Korea Aerospace Research Institute (KARI)",
    title:
      "Application of Rotating Gliding Arc (RGA) in Propulsion: From Microthrusters to Ignition Systems",
    date: "June 2025",
    location: "Daejeon, Korea",
    hostedBy: "Dr. Hyunjun Kim",
  },
  {
    number: 7,
    host: "LINC 3.0 Mechanical Engineering Seminar, POSTECH",
    title:
      "Introduction of Small-Scale Chemical and Plasma Thruster for In-Space Propulsion",
    date: "July 8, 2024",
    location: "Pohang, Korea",
    hostedBy: "Prof. Jintae Kim",
  },
  {
    number: 8,
    host: "POSTECH Tech Review Program",
    title:
      "A New Paradigm for Space Robot Control: From Satellite Thrusters to Soft Robots",
    date: "April 21, 2022",
    location: "Pohang, Korea",
    hostedBy: "POSTECH",
  },
  {
    number: 9,
    host: "POSTECH Tech Review Program",
    title: "Launch Vehicles, Satellites, and Solid Mechanics",
    date: "November 16, 2021",
    location: "Pohang, Korea",
    hostedBy: "POSTECH",
  },
];

export type Conference = {
  number: number;
  authors: string;
  year: number;
  title: string;
  titleKo?: string;
  venue: string;
  venueKo?: string;
  award?: string;
  awardKo?: string;
  myIndex?: number;
};

export const internationalConferences: Conference[] = [
  {
    number: 1,
    authors: "Lee, J., & Lee, A.",
    year: 2026,
    title:
      "Ti–6Al–4V Thin-Walled Monopropellant Microthruster Designs Manufactured by Laser Powder Bed Fusion",
    venue:
      "ASME Aerospace Structures, Structural Dynamics, and Materials Conference (SSDM), June 8–10, Long Beach, CA, USA",
  },
  {
    number: 2,
    authors: "Lee, J., Lee, J., & Lee, A.",
    year: 2026,
    title:
      "Enhancing Metal–polymer Adhesion via Surface Roughness Control in Laser Powder Bed Fusion for Space Structure Applications",
    venue:
      "ASME Aerospace Structures, Structural Dynamics, and Materials Conference (SSDM), June 8–10, Long Beach, CA, USA",
    myIndex: 1,
  },
  {
    number: 3,
    authors: "Lee, J., Kim, S., Kang, H., & Lee, A.",
    year: 2026,
    title:
      "A Newton-scale air-breathing electric propulsion system based on rotating gliding arc",
    venue:
      "Int. Conf. Precision Engineering and Sustainable Manufacturing (PRESM), Singapore",
  },
  {
    number: 4,
    authors: "Lee, J., Lee, J., Kim, R.E., Kim, S., & Lee, A.",
    year: 2025,
    title:
      "Design and characterization of thin-walled Ti-6Al-4V microthrusters fabricated by laser powder bed fusion",
    venue:
      "Int. Conf. Precision Engineering and Sustainable Manufacturing (PRESM), Chiang Mai, Thailand",
    award: "Outstanding Presentation Award",
  },
  {
    number: 5,
    authors: "Lee, J., Kwak, H., Kim, J., Jo, H., & Lee, A.",
    year: 2025,
    title:
      "Wrinkling behavior of thin films encapsulated between two identical pre-stretched soft substrates",
    venue: "APS March Meeting, Anaheim, USA",
  },
  {
    number: 6,
    authors: "Kwak, H., Lee, J., Kim, J., & Lee, A.",
    year: 2024,
    title:
      "Wrinkling of a thin film encapsulated between identically pre-stretched two soft substrates",
    venue:
      "Int. Congress of Theoretical and Applied Mechanics (ICTAM), Daegu, Korea",
  },
  {
    number: 7,
    authors: "Kim, S., Lee, J., & Lee, A.",
    year: 2024,
    title:
      "Design of a scalable soft robot using thermo-pneumatic actuation on flexible electronics",
    venue:
      "IUTAM Symp. on Mechanics of Soft Materials and Soft Robots, Tokyo, Japan",
  },
  {
    number: 8,
    authors: "Kwak, H., Lee, J., & Lee, A.",
    year: 2023,
    title:
      "Wrinkling of thin films between two soft layers for stretchable circuits with high packing density",
    venue:
      "Int. Conf. Precision Engineering and Sustainable Manufacturing (PRESM), Tokyo, Japan",
  },
  {
    number: 9,
    authors: "Lee, J., Kwak, H., Jo, H., & Lee, A.",
    year: 2023,
    title:
      "Formation of wrinkled film layer between symmetrically stretched substrates",
    venue: "APS March Meeting, Las Vegas, USA",
  },
  {
    number: 10,
    authors: "Lee, J., Kwak, H., Lee, B., Song, Y., & Lee, A.",
    year: 2022,
    title:
      "Uniform elastomer suspension coating on cylinders by bi-axial oscillation",
    venue:
      "Int. Conf. Precision Engineering and Sustainable Manufacturing (PRESM), Jeju, Korea",
  },
  {
    number: 11,
    authors: "Ki, K., Lee, J., & Lee, A.",
    year: 2022,
    title:
      "From shallow to deep: buckling behavior of clamped spherical caps",
    venue: "APS March Meeting, Chicago, USA",
  },
  {
    number: 12,
    authors: "Lee, J., Kwak, H., Lee, B., & Lee, A.",
    year: 2021,
    title: "Fabrication of films on cylinders by dip-oscillate coating",
    venue: "APS March Meeting (Online)",
  },
  {
    number: 13,
    authors: "Ki, K., Lee, J., & Lee, A.",
    year: 2020,
    title: "Shallowness effect on buckling of spherical shells",
    venue: "APS March Meeting (Online)",
  },
];

export const domesticConferenceNote =
  "28 presentations at the Korean Society of Mechanical Engineers (KSME), the Korean Society for Aeronautical and Space Sciences (KSAS), the Korean Society for Precision Engineering (KSPE), and the Korean Society of Propulsion Engineers (KSPE) — including three award-winning talks: KSME 2022 Excellence Paper Award, KSPE 2022 Best Paper Award, and KSME 2020 CAE/Applied Mechanics Best Paper Award.";

export const domesticConferenceNoteKo = "";

export type DomesticConference = {
  number: number;
  authors: string;
  title: string;
  titleKo?: string;
  venue: string;
  venueKo?: string;
  location: string;
  locationKo?: string;
  date: string;
  award?: string;
  awardKo?: string;
  isFirstAuthor: boolean;
};

export const domesticConferences: DomesticConference[] = [
  {
    number: 1,
    authors:
      "Jeongrak Lee, Seonghyeon Kim, Anna Lee, and Hongjae Kang",
    title:
      "Conceptual Demonstration and Application Prospects of a High-Performance Electrochemical Nitrous Oxide Thruster Based on Rotating Gliding Arc (RGA)",
    venue: "KSAS",
    location: "Yeosu",
    date: "2025.06",
    isFirstAuthor: true,
  },
  {
    number: 2,
    authors:
      "Jeongrak Lee, Seonghyeon Kim, Anna Lee, and Hongjae Kang",
    title:
      "Conceptual demonstration of a rotating gliding arc thruster for low atmosphere air-breathing electric propulsion",
    venue: "KSAS",
    location: "Yeosu",
    date: "2025.06",
    isFirstAuthor: true,
  },
  {
    number: 3,
    authors: "Jeongrak Lee, Anna Lee, and Hongjae Kang",
    title:
      "Wide-range O/F (~ 1000) Plasma-enhanced N₂O/CH₄ Thruster Using Rotating Gliding Arc",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2025.05",
    isFirstAuthor: true,
  },
  {
    number: 4,
    authors:
      "Hongjae Kang, Jeongrak Lee, Junyoung Yang, Taebin Jeong, Junwoo Lee, Jeonggi Hong",
    title:
      "Manufacturing and Performance Evaluation of an N₂O Plasma Thruster Fabricated via WLAM-based Shape Optimization",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2025.05",
    isFirstAuthor: false,
  },
  {
    number: 5,
    authors:
      "Gyeom Lee, Anna Lee, Hongjae Kang, and Jeongrak Lee",
    title:
      "Performance Evaluation of an N₂O Rotating Gliding Arc Thruster under Bypass Flow Variations",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2025.05",
    isFirstAuthor: false,
  },
  {
    number: 6,
    authors:
      "Raeeon Kim, Junghoon Lee, Jeongrak Lee, Junyoung Yang, Taebin Jeong, Junwoo Lee, Jeonggi Hong",
    title:
      "Comparative Analysis of the Properties of STS 316L and Inconel 625 by Wire-Based Additive Manufacturing (WLAM)",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2025.05",
    isFirstAuthor: false,
  },
  {
    number: 7,
    authors:
      "Junghoon Lee, Jeongrak Lee, Raeeon Kim, Youngsam Kwon, and Dongsik Kim",
    title:
      "Size effects on the mechanical and propulsion performance of Ti-6Al-4V thin-walled microthrusters printed by laser powder bed fusion",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2025.05",
    isFirstAuthor: false,
  },
  {
    number: 8,
    authors:
      "Junghoon Lee, Jeongrak Lee, Raeeon Kim, Youngsam Kwon, and Dongsik Kim",
    title:
      "Architecture of Ti-6Al-4V thin-walled microthrusters fabricated via laser powder bed fusion",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2025.05",
    isFirstAuthor: false,
  },
  {
    number: 9,
    authors:
      "Jeongrak Lee, Seonghyeon Kim, Anna Lee, and Hongjae Kang",
    title:
      "Thrust Performance and Control Capabilities of an N₂O-powered Rotating Gliding Arc Thruster",
    venue: "KSPE (Propulsion)",
    location: "Busan",
    date: "2024.11",
    isFirstAuthor: true,
  },
  {
    number: 10,
    authors:
      "Seonghyeon Kim, Jeongrak Lee, Hongjae Kang, and Anna Lee",
    title:
      "Fabrication of a Monopropellant Microthruster for Satellite Using Metal PCB Process",
    venue: "KSPE (Propulsion)",
    location: "Busan",
    date: "2024.11",
    isFirstAuthor: false,
  },
  {
    number: 11,
    authors:
      "Jeongrak Lee, Seonghyeon Kim, Anna Lee, and Hongjae Kang",
    title:
      "Conceptual Demonstration of a Rotating Gliding Arc Thruster for Low Atmosphere Air-breathing Electric Propulsion",
    venue: "KSPE (Propulsion)",
    location: "Busan",
    date: "2024.11",
    isFirstAuthor: true,
  },
  {
    number: 12,
    authors:
      "Jeongrak Lee, Seonghyeon Kim, Anna Lee, Ju Won Kim, and Hongjae Kang",
    title:
      "Conceptual Demonstration of a Plasma Thruster Based on Chemical Propellants Using Rotating Gliding Arc",
    venue: "KSAS",
    location: "Jeongseon",
    date: "2024.11",
    isFirstAuthor: true,
  },
  {
    number: 13,
    authors: "Seonghyeon Kim, Jeongrak Lee, and Anna Lee",
    title:
      "Design and Development of a High-Efficiency Soft Robot and Manufacturing Process Using Lab-on-PCB Technology and Thermo-pneumatic Mechanism",
    venue: "KSME",
    location: "Jeju",
    date: "2024.11",
    isFirstAuthor: false,
  },
  {
    number: 14,
    authors: "Jeongrak Lee, Seonghyeon Kim, and Anna Lee",
    title:
      "Microthruster manufacturing using metal PCB production process",
    venue: "KSAS",
    location: "Changwon",
    date: "2024.06",
    isFirstAuthor: true,
  },
  {
    number: 15,
    authors:
      "Jeongrak Lee, Seonghyeon Kim, Namsuk Cho, and Anna Lee",
    title:
      "Application of lab-on-PCB technology in space: Development of solid and liquid propellant microthrusters for CubeSats",
    venue: "KSAS",
    location: "Changwon",
    date: "2024.06",
    isFirstAuthor: true,
  },
  {
    number: 16,
    authors:
      "Jeongrak Lee, Ju Won Kim, Seonghyeon Kim, Hongjae Kang, and Anna Lee",
    title:
      "Validation of a hydrogen peroxide-based electrochemical thruster using rotating gliding arc plasma",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2024.05",
    isFirstAuthor: true,
  },
  {
    number: 17,
    authors:
      "Hyunsu Kwak, Jeongrak Lee, Junsik Kim, and Anna Lee",
    title:
      "Wrinkling of a thin film sandwiched between two soft substrates",
    venue: "KSPE (Precision)",
    location: "Jeju",
    date: "2024.05",
    isFirstAuthor: false,
  },
  {
    number: 18,
    authors:
      "Suyeong Jung, Jeongrak Lee, Seonghyeon Kim, Yuseong Song and Anna Lee",
    title:
      "Fabrication of a micro-gas generator for soft robots using a hydrogen peroxide electrolysis pump and a catalyst table",
    venue: "KSME",
    location: "Incheon",
    date: "2023.11",
    isFirstAuthor: false,
  },
  {
    number: 19,
    authors: "Jeongrak Lee, Seonghyeon Kim and Anna Lee",
    title:
      "Design, fabrication of microthruster using Lab-on-PCB technology",
    venue: "KSME",
    location: "Incheon",
    date: "2023.11",
    isFirstAuthor: true,
  },
  {
    number: 20,
    authors:
      "Jeongrak Lee, Seonghyeon Kim, Hongjae Kang and Anna Lee",
    title:
      "Modular fabrication concept for modular monopropellant thruster for small satellites",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2023.05",
    isFirstAuthor: true,
  },
  {
    number: 21,
    authors:
      "Jeongrak Lee, Seonghyeon Kim, Hongjae Kang and Anna Lee",
    title:
      "Revisiting MEMS thruster: Lab-on-PCB technology for space propulsion",
    venue: "KSPE (Propulsion)",
    location: "Jeju",
    date: "2023.05",
    isFirstAuthor: true,
  },
  {
    number: 22,
    authors: "Jeongrak Lee, Seonghyeon Kim and Anna Lee",
    title:
      "A new concept of PCB On-Board pneumatic actuator using solid propellant cartridge for soft robot",
    venue: "KSME",
    location: "Jeju",
    date: "2022.11",
    award:
      "Excellence Paper Award (Production & Design Engineering Division)",
    isFirstAuthor: true,
  },
  {
    number: 23,
    authors:
      "Jeongrak Lee, Sunghyeon Kim, Hanseong Jo, Eunji Lee, and Anna Lee",
    title:
      "Lab-on-PCB for space propulsion: New manufacturing process of solid propellant micro thruster array",
    venue: "KSPE (Precision)",
    location: "Jeju",
    date: "2022.05",
    award: "Best Paper Award (Nano/Micro Division)",
    isFirstAuthor: true,
  },
  {
    number: 24,
    authors:
      "Jeongrak Lee, Hyunsu Kwak, Hanseong Jo, Yuseong Song and Anna Lee",
    title:
      "Fabrication of uniform films on cylinders by dip-coating with oscillation",
    venue: "KSME",
    location: "Gwangju",
    date: "2021.11",
    isFirstAuthor: true,
  },
  {
    number: 25,
    authors:
      "Jeongrak Lee, Hyunsu Kwak, Hanseong Jo, and Anna Lee",
    title:
      "Fabrication of films on cylinders by Dip-oscillate-coating",
    venue: "KSPE (Precision)",
    location: "Online",
    date: "2021.05",
    isFirstAuthor: true,
  },
  {
    number: 26,
    authors:
      "Jeongrak Lee, Hyunsu Kwak, Byungho Lee and Anna Lee",
    title:
      "Vibration-based dip coating for the fabrication of regression rate programmable rocket fuel",
    venue: "KSME",
    location: "Online",
    date: "2020.12",
    isFirstAuthor: true,
  },
  {
    number: 27,
    authors: "Kanghyun Ki, Jeongrak Lee, and Anna Lee",
    title: "Shallowness effect on buckling of spherical shells",
    venue: "KSME — CAE & Applied Mechanics",
    location: "Gyeongju",
    date: "2020.07",
    award: "Best Paper Award (CAE/Applied Mechanics Division)",
    isFirstAuthor: false,
  },
  {
    number: 28,
    authors:
      "Juwon Kim, Hongjae Kang, Jeongrak Lee, and Sejin Kwon",
    title:
      "Flexibility test for high-energy premixed hydrogen peroxide mono-propellant",
    venue: "KSPE (Propulsion)",
    location: "Busan",
    date: "2017.11",
    isFirstAuthor: false,
  },
];
