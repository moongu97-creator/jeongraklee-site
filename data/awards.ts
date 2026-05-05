export type Award = {
  year: string;
  title: string;
  titleKo?: string;
  body?: string;
  bodyKo?: string;
  detail?: string;
  detailKo?: string;
  level: "graduate" | "undergraduate";
  highlight?: boolean;
};

export const awards: Award[] = [
  // Graduate (2020–2026)
  {
    year: "2026",
    title: "Forbes Korea 30 Under 30 — Science Category Honoree",
    level: "graduate",
    highlight: true,
  },
  {
    year: "2026",
    title: "POSTECHIAN Fellowship — Achievement Track, POSTECH",
    detail: "KRW 3,000,000",
    level: "graduate",
  },
  {
    year: "2025",
    title: "Outstanding Presentation Award",
    body: "Int. Conf. Precision Engineering and Sustainable Manufacturing (PRESM)",
    level: "graduate",
  },
  {
    year: "2025",
    title: "Encouragement Award, KAI Aerospace Paper Contest",
    body: "Korea Aerospace Industries",
    level: "graduate",
  },
  {
    year: "2025",
    title: "Iksung Excellence Paper Award",
    body: "Department of Mechanical Engineering, POSTECH",
    detail: "KRW 1,000,000",
    level: "graduate",
  },
  {
    year: "2025",
    title: "POSTECH Alchemist Entrepreneurship Fellowship",
    detail: "KRW 5,000,000",
    level: "graduate",
  },
  {
    year: "2024",
    title: "POSTECH Alchemist Entrepreneurship Fellowship",
    detail: "KRW 5,000,000",
    level: "graduate",
  },
  {
    year: "2024",
    title: "Excellence Paper Award, KAI Aerospace Paper Contest",
    body: "Korea Aerospace Industries",
    level: "graduate",
  },
  {
    year: "2023",
    title: "Encouragement Award, KAI Aerospace Paper Contest",
    body: "Korea Aerospace Industries",
    level: "graduate",
  },
  {
    year: "2023",
    title: "Best Paper Award",
    body: "Korean Society of Mechanical Engineers (KSME)",
    level: "graduate",
  },
  {
    year: "2022",
    title:
      "Prime Minister's Award — Grand Prize, Challenge! K-Startup Contest",
    body:
      "Korea Institute of Startup & Entrepreneurship Development (KISED)",
    detail: "1 / 5,420 teams; KRW 150,000,000",
    level: "graduate",
    highlight: true,
  },
  {
    year: "2022",
    title: "Excellence Paper Award, KAI Aerospace Paper Contest",
    body: "Korea Aerospace Industries",
    level: "graduate",
  },
  {
    year: "2022",
    title:
      "Minister's Award — ClutG-Star (Daegu/Gyeongbuk Entrepreneurship Contest)",
    body: "Ministry of SMEs and Startups",
    level: "graduate",
  },
  {
    year: "2022",
    title: "Excellence Award, Joo-Young Chung Entrepreneurship Contest",
    body: "Asan Foundation",
    detail: "KRW 10,000,000",
    level: "graduate",
  },
  {
    year: "2022",
    title: "Best Paper Award",
    body: "Korean Society for Precision Engineering (KSPE)",
    level: "graduate",
  },
  {
    year: "2022",
    title: "Grand Prize, SK Hynix Startup Competition",
    detail: "KRW 30,000,000",
    level: "graduate",
  },
  {
    year: "2021",
    title: "Excellence Award, Lab-startup IR Challenge",
    body: "Korea Entrepreneurship Foundation",
    level: "graduate",
  },
  {
    year: "2021",
    title:
      "Grand Prize — Chief of Naval Staff Award, Naval Startup Contest (Maritime/Defense Technology Innovation)",
    body: "Republic of Korea Navy",
    level: "graduate",
  },
  {
    year: "2020",
    title: "Excellence Award, POSTECH Business Idea Contest",
    body: "POSTECH",
    level: "graduate",
  },

  // Undergraduate (2015–2020)
  {
    year: "2020",
    title: "Mueunjae Award (무은재상)",
    body: "POSTECH (highest graduation honor)",
    level: "undergraduate",
    highlight: true,
  },
  {
    year: "2019",
    title:
      "Next-Generation Engineering Leader Award (한국공학한림원 차세대공학리더상) — Highest Honor",
    body: "National Academy of Engineering of Korea (NAEK)",
    level: "undergraduate",
    highlight: true,
  },
  {
    year: "2019",
    title: "Talent Award of Korea (대한민국 인재상)",
    body: "Ministry of Education",
    level: "undergraduate",
    highlight: true,
  },
  {
    year: "2018",
    title: "Talent Award of Donggyo",
    body: "Surim Foundation",
    level: "undergraduate",
  },
  {
    year: "2017",
    title: "Excellence Award, Undergraduate Research Program",
    body: "POSTECH",
    level: "undergraduate",
  },
  {
    year: "2017",
    title: "Grand Prize, POSTECH Venture Competition",
    body: "POSTECH",
    level: "undergraduate",
  },
  {
    year: "2016",
    title: "Excellence Award, RC423 Venture Start-up Club",
    body: "Gyeongbuk Provincial Government",
    level: "undergraduate",
  },
  {
    year: "2016",
    title: "Excellence Award, POSTECH Venture Competition",
    body: "POSTECH",
    level: "undergraduate",
  },
  {
    year: "2016",
    title: "Grand Prize, Tech Star Challenge (2nd Semester)",
    body: "APGC-Lab",
    level: "undergraduate",
  },
  {
    year: "2016",
    title: "Excellence Award, Tech Star Challenge (1st Semester)",
    body: "APGC-Lab",
    level: "undergraduate",
  },
  {
    year: "2015",
    title: "Excellence Award, Undergraduate Research Program",
    body: "POSTECH",
    level: "undergraduate",
  },
  {
    year: "2015",
    title: "Grand Prize, POSTECH Venture Competition",
    body: "POSTECH",
    level: "undergraduate",
  },
  {
    year: "2015",
    title: "Excellence Award, H-Startup Idea Competition",
    body: "Hyundai",
    level: "undergraduate",
  },
];

export const undergraduateAwardsNote = "";
