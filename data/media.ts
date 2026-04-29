export type MediaOutlet = {
  name: string;
  url?: string;
};

export type MediaItem = {
  number: number;
  title: string;
  outlets?: MediaOutlet[];
  date: string;
};

export const media: MediaItem[] = [
  {
    number: 1,
    title:
      'KBS Pohang Radio "Lively Morning Citizen Square" — Artemis 2 mission commentary',
    outlets: [
      {
        name: "YouTube clip",
        url: "https://www.youtube.com/watch?v=Nfbzymt-IlI",
      },
    ],
    date: "April 2026",
  },
  {
    number: 2,
    title:
      "Air-breathing electric propulsion at atmospheric pressure (Pub #10, ASR 2026)",
    outlets: [
      {
        name: "YTN Science",
        url: "https://www.youtube.com/watch?v=Phfb95JQNwA",
      },
      {
        name: "Hankook Ilbo",
        url: "https://www.hankookilbo.com/news/article/A2026031114010004141",
      },
      {
        name: "Dong-A Science",
        url: "https://www.dongascience.com/news/76759",
      },
      {
        name: "Chosun Biz",
        url: "https://biz.chosun.com/science-chosun/science/2026/03/11/5SIU2SCMZ5DYNKN2GCFXYZFIBA/",
      },
      {
        name: "Kyongbuk Daily",
        url: "https://www.kyongbuk.co.kr/news/articleView.html?idxno=4066660",
      },
    ],
    date: "March 2026",
  },
  {
    number: 3,
    title:
      "Highly stretchable electrodes via wrinkle structures (Pub #15, IJMS 2026)",
    outlets: [
      {
        name: "Veritas Alpha",
        url: "https://www.veritas-a.com/news/articleView.html?idxno=600229",
      },
      {
        name: "Electronic Times",
        url: "https://www.etnews.com/20260303000016",
      },
      {
        name: "KPI News",
        url: "https://www.kpinews.kr/newsView/1065573196501236",
      },
    ],
    date: "March 2026",
  },
  {
    number: 4,
    title: "Forbes Korea 30 Under 30 — Science Category",
    outlets: [
      {
        name: "Forbes Korea (Feature)",
        url: "https://www.forbeskorea.co.kr/news/articleView.html?idxno=401382",
      },
      {
        name: "Forbes Korea (Full List)",
        url: "https://www.forbeskorea.co.kr/news/articleView.html?idxno=401352",
      },
    ],
    date: "March 2026",
  },
  {
    number: 5,
    title: "N₂O/CH₄ green storable bipropellant (Pub #1, AST 2026)",
    outlets: [
      {
        name: "Dong-A Science",
        url: "https://www.dongascience.com/ko/news/75827",
      },
      {
        name: "Chosun Ilbo",
        url: "https://www.chosun.com/economy/science/2026/01/05/GAZWEYJZHA4DGMBTMI4TAY3DME/",
      },
      {
        name: "Herald Economy",
        url: "https://biz.heraldcorp.com/article/10648776",
      },
    ],
    date: "January 2026",
  },
  {
    number: 6,
    title: "N₂O/NH₃ green storable bipropellant (Pub #2, Fuel)",
    outlets: [
      {
        name: "Dong-A Science",
        url: "https://m.dongascience.com/news.php?idx=74772",
      },
      {
        name: "Chosun Biz",
        url: "https://biz.chosun.com/science-chosun/science/2025/10/28/3WNNBYXBABDQXIHF7XK4RANW54/",
      },
    ],
    date: "October 2025",
  },
  {
    number: 7,
    title:
      "Ultra-light thin-walled Ti-6Al-4V microthrusters (Pub #11, VPP 2025)",
    outlets: [
      {
        name: "Yonhap News",
        url: "https://www.yna.co.kr/view/AKR20250903065000053",
      },
      {
        name: "Dong-A Science",
        url: "https://m.dongascience.com/news.php?idx=73818",
      },
    ],
    date: "September 2025",
  },
  {
    number: 8,
    title:
      'Pohang MBC "Tok-Tok Donghaein" — Featured interview "Toward Space for the Expansion of Human Frontiers"',
    outlets: [
      { name: "YouTube", url: "https://youtu.be/Phfb95JQNwA" },
    ],
    date: "July 2024",
  },
  {
    number: 9,
    title:
      "KAI Aerospace Paper Contest — Excellence Paper Award (2022 and 2024)",
    outlets: [
      {
        name: "News4000 (2024)",
        url: "https://www.news4000.com/news/articleView.html?idxno=52619",
      },
      {
        name: "SME Daily (2022)",
        url: "https://www.smedaily.co.kr/news/articleView.html?idxno=243744",
      },
    ],
    date: "2022 & 2024",
  },
  {
    number: 10,
    title: "Mueunjae Award — POSTECH highest graduation honor",
    outlets: [
      {
        name: "POSTECH Times",
        url: "https://times.postech.ac.kr/news/articleView.html?idxno=21299",
      },
    ],
    date: "2020",
  },
  {
    number: 11,
    title:
      "NAEK Next-Generation Engineering Leader Award — Highest Honor",
    outlets: [
      {
        name: "Yonhap News",
        url: "https://www.yna.co.kr/view/AKR20191214054200017",
      },
      {
        name: "Dong-A Science",
        url: "https://m.dongascience.com/ko/news/33006",
      },
      {
        name: "Dong-A Ilbo",
        url: "https://www.donga.com/news/article/all/20191217/98832232/1",
      },
    ],
    date: "December 2019",
  },
  {
    number: 12,
    title: "Talent Award of Korea",
    outlets: [
      {
        name: "HelloDD",
        url: "https://www.hellodd.com/news/articleView.html?idxno=70438",
      },
    ],
    date: "December 2019",
  },
];
