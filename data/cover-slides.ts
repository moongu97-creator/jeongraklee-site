export type CoverSlide = {
  src: string;
  alt: string;
  caption: string;
};

export const coverSlides: CoverSlide[] = [
  {
    src: "/cover-1.png",
    alt: "Falling launch cost timeline — Soyuz to Starship",
    caption:
      "Launch cost has dropped roughly 10× in a decade, opening a new era of space access.",
  },
  {
    src: "/cover-2.png",
    alt: "Mission landscape from Earth to deep space",
    caption:
      "Mission domains — Earth-to-orbit, in-orbit operation, deep space, and interplanetary exploration.",
  },
  {
    src: "/cover-1-alt.png",
    alt: "Spacecraft and missions across orbit, interplanetary, and deep-space regimes",
    caption:
      "Vehicles powering each domain — from small satellites and ADR to interplanetary explorers and light sails.",
  },
  {
    src: "/cover-3.png",
    alt: "Three horizons of next-generation propulsion",
    caption:
      "My research charts the roadmap — chemical (present), plasma-hybrid (near future), and photonic-structural sail (long-term vision).",
  },
];
