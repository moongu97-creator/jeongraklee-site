export type CoverSlide = {
  src: string;
  alt: string;
  caption: string;
};

export const coverSlides: CoverSlide[] = [
  {
    src: "/cover-3.png",
    alt: "Three horizons of next-generation propulsion: chemical, plasma-hybrid, photonic-structural",
    caption:
      "Three horizons of propulsion — chemical (now), plasma-hybrid (near term), photonic-structural (long term).",
  },
  {
    src: "/cover-1.png",
    alt: "Falling launch cost timeline — Soyuz to Starship",
    caption:
      "The new economics of space access — launch cost has dropped roughly 10× in a decade.",
  },
  {
    src: "/cover-2.png",
    alt: "Mission landscape from Earth to deep space",
    caption:
      "Mission landscape — Earth-to-orbit, in-orbit operation, deep space, and interplanetary exploration.",
  },
];
