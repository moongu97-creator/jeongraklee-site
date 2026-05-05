export type Reference = {
  name: string;
  nameKo?: string;
  affiliation: string;
  affiliationKo?: string;
  address: string;
  addressKo?: string;
  tel?: string;
  email: string;
};

export const references: Reference[] = [
  {
    name: "Prof. Anna Lee",
    nameKo: "이안나 교수",
    affiliation: "Department of Mechanical Engineering, POSTECH",
    affiliationKo: "포항공과대학교 기계공학과",
    address:
      "77 Cheongam-ro, Nam-gu, Pohang-si, Gyeongsangbuk-do 37673, Republic of Korea",
    addressKo:
      "경상북도 포항시 남구 청암로 77, 37673, 대한민국",
    tel: "+82-54-279-2176",
    email: "annalee@postech.ac.kr",
  },
  {
    name: "Prof. Junsuk Rho",
    nameKo: "노준석 교수",
    affiliation:
      "Departments of Mechanical, Chemical, and Electrical Engineering, POSTECH",
    affiliationKo:
      "포항공과대학교 기계·화학·전자전기공학과",
    address:
      "77 Cheongam-ro, Nam-gu, Pohang-si, Gyeongsangbuk-do 37673, Republic of Korea",
    addressKo:
      "경상북도 포항시 남구 청암로 77, 37673, 대한민국",
    tel: "+82-54-279-2187",
    email: "jsrho@postech.ac.kr",
  },
  {
    name: "Dr. Hongjae Kang",
    nameKo: "강홍재 박사",
    affiliation:
      "Plasma Engineering Laboratory, Korea Institute of Machinery & Materials (KIMM)",
    affiliationKo:
      "한국기계연구원(KIMM) 플라즈마공학연구실",
    address:
      "156 Gajeongbuk-ro, Yuseong-gu, Daejeon 34103, Republic of Korea",
    addressKo:
      "대전광역시 유성구 가정북로 156, 34103, 대한민국",
    tel: "+82-42-868-7051",
    email: "hjkang@kimm.re.kr",
  },
  {
    name: "Prof. Jungkun Jin",
    nameKo: "진정근 교수",
    affiliation: "Department of Aerospace Engineering, KAIST",
    affiliationKo: "KAIST 항공우주공학과",
    address: "291 Daehak-ro, Yuseong-gu, Daejeon 34141, Republic of Korea",
    addressKo: "대전광역시 유성구 대학로 291, 34141, 대한민국",
    tel: "+82-42-350-3731",
    email: "jungkunjin@kaist.ac.kr",
  },
  {
    name: "Prof. Sejin Kwon",
    nameKo: "권세진 교수",
    affiliation: "Department of Aerospace Engineering, KAIST",
    affiliationKo: "KAIST 항공우주공학과",
    address: "291 Daehak-ro, Yuseong-gu, Daejeon 34141, Republic of Korea",
    addressKo: "대전광역시 유성구 대학로 291, 34141, 대한민국",
    email: "trumpet@kaist.ac.kr",
  },
  {
    name: "Yoon Shin (CEO, Perigee Aerospace Inc.)",
    nameKo: "신윤(페리지에어로스페이스 대표)",
    affiliation: "Perigee Aerospace Inc.",
    affiliationKo: "페리지에어로스페이스",
    address: "96 Gajeongbuk-ro, Yuseong-gu, Daejeon 34111, Republic of Korea",
    addressKo: "대전광역시 유성구 가정북로 96, 34111, 대한민국",
    tel: "+82-42-710-3513",
    email: "yoonshin@perigee.space",
  },
];
