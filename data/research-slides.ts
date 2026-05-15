import type { ResearchAreaTag } from "./research";

export type ResearchSlide = {
  area: ResearchAreaTag;
  src: string;
  alt: string;
  caption: string;
  captionKo?: string;
};

export const researchSlides: ResearchSlide[] = [
  {
    area: "chemical",
    src: "/research/chemical-lab-on-pcb.png",
    alt: "Lab-on-PCB solid propellant microthruster array",
    caption:
      "Lab-on-PCB solid propellant microthruster — four-plate stack assembling into a shared-chamber array (Pub #3, Lab on a Chip 2024).",
    captionKo:
      "Lab-on-PCB 고체 추진제 마이크로 추력기 — 4층 플레이트가 공유 챔버 어레이로 결합 (Pub #3, Lab on a Chip 2024).",
  },
  {
    area: "chemical",
    src: "/research/chemical-rga-flame.png",
    alt: "RGA-assisted N₂O/CH₄ combustion across ROF 6.7–1000",
    caption:
      "Plasma-assisted N₂O/CH₄ combustion in a rotating gliding arc thruster — high-speed flame visualization across ROF 6.7–1000 (Pub #1, AST 2026).",
    captionKo:
      "회전 활강 아크 추력기의 플라즈마 보조 N₂O/CH₄ 연소 — ROF 6.7–1000 전 범위의 고속 화염 가시화 (Pub #1, AST 2026).",
  },
  {
    area: "chemical",
    src: "/research/chemical-plume.jpg",
    alt: "Plasma-assisted bipropellant plume",
    caption:
      "Plasma-assisted bipropellant plume — visible thrust output from rotating gliding arc combustion.",
    captionKo:
      "플라즈마 보조 bipropellant 플룸 — 회전 활강 아크 연소가 만드는 추력 가시화.",
  },
  {
    area: "hybrid",
    src: "/research/hybrid-rga.jpg",
    alt: "Rotating Gliding Arc discharge",
    caption:
      "Rotating Gliding Arc (RGA) discharge — the signature plasma physics that drives high-thrust, high-Isp in-space propulsion.",
    captionKo:
      "회전 활강 아크(RGA) 방전 — 고추력·고비추력 우주 추진을 구동하는 핵심 플라즈마 물리.",
  },
  {
    area: "hybrid",
    src: "/research/hybrid-electro-mode.png",
    alt: "Catalytic vs catalyst + RGA electro-chemical operation",
    caption:
      "Catalytic-only vs catalyst + RGA hybrid operation — plasma activation roughly doubles characteristic velocity (Pub #12, AIAA J 2025).",
    captionKo:
      "촉매 단독 vs 촉매 + RGA 하이브리드 — 플라즈마 활성화로 특성속도 약 2배 (Pub #12, AIAA J 2025).",
  },
  {
    area: "hybrid",
    src: "/research/hybrid-ti-microthruster.png",
    alt: "Ti-6Al-4V thin-walled microthruster fabricated via LPBF",
    caption:
      "X-ray CT validation of Ti-6Al-4V thin-walled microthrusters — 0.5 mm walls, 180 μm orifices, ±4.1% dimensional tolerance (Pub #11, VPP 2025).",
    captionKo:
      "Ti-6Al-4V 박벽 마이크로 추력기의 X선 CT 검증 — 0.5 mm 벽, 180 μm 오리피스, ±4.1% 치수 공차 (Pub #11, VPP 2025).",
  },
  {
    area: "photonics",
    src: "/research/photonics-wrinkling.png",
    alt: "Wrinkling trilayer fabrication",
    caption:
      "Thin-film wrinkling in pre-stretched soft substrate trilayers — fabrication, profile, and stress map (Pub #15, IJMS 2026).",
    captionKo:
      "사전 인장된 연질 기판 삼중층 내 박막 주름 — 제작, 형상, 응력 분포 (Pub #15, IJMS 2026).",
  },
  {
    area: "photonics",
    src: "/research/photonics-buckling.png",
    alt: "Buckling of clamped spherical shells with imperfection",
    caption:
      "Buckling of clamped spherical shells across the shallowness range — mode bifurcation from axisymmetric to non-axisymmetric (Pub #16, JMPS 2024).",
    captionKo:
      "다양한 얕음 영역에서의 고정 구형 셸 좌굴 — 축대칭에서 비축대칭으로의 모드 분기 (Pub #16, JMPS 2024).",
  },
];
