export type MediaOutlet = {
  name: string;
  url?: string;
};

export type MediaItem = {
  number: number;
  title: string;
  titleKo?: string;
  outlets?: MediaOutlet[];
  date: string;
  dateKo?: string;
  image?: string;
};

export const media: MediaItem[] = [
  {
    number: 1,
    title:
      "Surface roughness engineering for metal–polymer adhesion in additive manufacturing (Pub #9, VPP 2026)",
    titleKo:
      "3D 금속 프린팅의 거친 표면을 접착제로 활용 — 금속·폴리머 접합 강도 2배 (Pub #9, VPP 2026)",
    outlets: [
      {
        name: "YTN Science",
        url: "https://m.science.ytn.co.kr/program/view_today.php?key=202605081100218780",
      },
      {
        name: "Electronic Times",
        url: "https://www.etnews.com/20260508000008",
      },
      {
        name: "Dong-A Science",
        url: "https://m.dongascience.com/ko/news/77793",
      },
      {
        name: "Veritas Alpha",
        url: "https://www.veritas-a.com/news/articleView.html?idxno=608980",
      },
      {
        name: "Kyongbuk Domin Ilbo",
        url: "https://v.daum.net/v/20260509235638332",
      },
    ],
    date: "May 2026",
    dateKo: "2026년 5월",
  },
  {
    number: 2,
    title:
      'KBS Pohang Radio "Lively Morning Citizen Square" — Artemis 2 mission commentary',
    titleKo: 'KBS 포항라디오 "활기찬 아침 시민광장" — Artemis 2 임무 해설',
    outlets: [{ name: "KBS Pohang Radio" }],
    date: "April 2026",
    dateKo: "2026년 4월",
  },
  {
    number: 3,
    title:
      "Air-breathing electric propulsion at atmospheric pressure (Pub #10, ASR 2026)",
    titleKo:
      "대기압에서 작동하는 흡입식 전기 추진 (Pub #10, ASR 2026)",
    image: "/media/youtube-airbreathing.jpg",
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
    dateKo: "2026년 3월",
  },
  {
    number: 4,
    title:
      "Highly stretchable electrodes via wrinkle structures (Pub #15, IJMS 2026)",
    titleKo:
      "주름 구조를 활용한 고신축성 전극 (Pub #15, IJMS 2026)",
    image: "/media/etnews.jpg",
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
    dateKo: "2026년 3월",
  },
  {
    number: 5,
    title: "Forbes Korea 30 Under 30 — Science Category",
    titleKo: "Forbes Korea 30 Under 30 — 사이언스 부문 선정",
    image: "/media/forbes.jpg",
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
    dateKo: "2026년 3월",
  },
  {
    number: 6,
    title: "N₂O/CH₄ green storable bipropellant (Pub #1, AST 2026)",
    titleKo: "친환경 저장성 N₂O/CH₄ 이원 추진제 (Pub #1, AST 2026)",
    image: "/media/dongasci-n2och4.jpg",
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
    dateKo: "2026년 1월",
  },
  {
    number: 7,
    title: "N₂O/NH₃ green storable bipropellant (Pub #2, Fuel)",
    titleKo: "친환경 저장성 N₂O/NH₃ 이원 추진제 (Pub #2, Fuel)",
    image: "/media/chosun-biz-n2onh3.jpg",
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
    dateKo: "2025년 10월",
  },
  {
    number: 8,
    title:
      "Ultra-light thin-walled Ti-6Al-4V microthrusters (Pub #11, VPP 2025)",
    titleKo:
      "초경량 박벽 Ti-6Al-4V 마이크로 추력기 (Pub #11, VPP 2025)",
    image: "/media/yonhap-microthruster.jpg",
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
    dateKo: "2025년 9월",
  },
  {
    number: 9,
    title:
      'Pohang MBC "Tok-Tok Donghaein" — Featured interview "Toward Space for the Expansion of Human Frontiers"',
    titleKo:
      '포항MBC "톡톡 동해인" — 특집 인터뷰 「인류의 영역 확장을 향한 우주」',
    image: "/media/youtube-toktok.jpg",
    outlets: [
      { name: "YouTube", url: "https://www.youtube.com/watch?v=Nfbzymt-IlI" },
    ],
    date: "July 2024",
    dateKo: "2024년 7월",
  },
  {
    number: 10,
    title:
      "KAI Aerospace Paper Contest — Excellence Paper Award (2022 and 2024)",
    titleKo:
      "KAI 항공우주 논문경진대회 — 우수논문상 (2022, 2024)",
    image: "/media/news4000-kai.jpg",
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
    dateKo: "2022·2024",
  },
  {
    number: 11,
    title: "Mueunjae Award — POSTECH highest graduation honor",
    titleKo: "무은재상 — 포스텍 최고 졸업 영예",
    image: "/media/postech-mueunjae.jpg",
    outlets: [
      {
        name: "POSTECH Times",
        url: "https://times.postech.ac.kr/news/articleView.html?idxno=21299",
      },
    ],
    date: "2020",
    dateKo: "2020",
  },
  {
    number: 12,
    title:
      "NAEK Next-Generation Engineering Leader Award — Highest Honor",
    titleKo:
      "한국공학한림원 차세대공학리더상 — 최고상",
    image: "/media/yonhap-naek.jpg",
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
    dateKo: "2019년 12월",
  },
  {
    number: 13,
    title: "Talent Award of Korea",
    titleKo: "대한민국 인재상",
    outlets: [
      {
        name: "HelloDD",
        url: "https://www.hellodd.com/news/articleView.html?idxno=70438",
      },
    ],
    date: "December 2019",
    dateKo: "2019년 12월",
  },
];
