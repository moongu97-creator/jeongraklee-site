export type Reference = {
  name: string;
  affiliation: string;
  address: string;
  tel?: string;
  email: string;
};

export const references: Reference[] = [
  {
    name: "Prof. Anna Lee",
    affiliation: "Department of Mechanical Engineering, POSTECH",
    address:
      "77 Cheongam-ro, Nam-gu, Pohang-si, Gyeongsangbuk-do 37673, Republic of Korea",
    tel: "+82-54-279-2176",
    email: "annalee@postech.ac.kr",
  },
  {
    name: "Prof. Junsuk Rho",
    affiliation:
      "Departments of Mechanical, Chemical, and Electrical Engineering, POSTECH",
    address:
      "77 Cheongam-ro, Nam-gu, Pohang-si, Gyeongsangbuk-do 37673, Republic of Korea",
    tel: "+82-54-279-2187",
    email: "jsrho@postech.ac.kr",
  },
  {
    name: "Dr. Hongjae Kang",
    affiliation:
      "Plasma Engineering Laboratory, Korea Institute of Machinery & Materials (KIMM)",
    address:
      "156 Gajeongbuk-ro, Yuseong-gu, Daejeon 34103, Republic of Korea",
    tel: "+82-42-868-7051",
    email: "hjkang@kimm.re.kr",
  },
  {
    name: "Prof. Jungkun Jin",
    affiliation: "Department of Aerospace Engineering, KAIST",
    address: "291 Daehak-ro, Yuseong-gu, Daejeon 34141, Republic of Korea",
    tel: "+82-42-350-3731",
    email: "jungkunjin@kaist.ac.kr",
  },
  {
    name: "Prof. Sejin Kwon",
    affiliation: "Department of Aerospace Engineering, KAIST",
    address: "291 Daehak-ro, Yuseong-gu, Daejeon 34141, Republic of Korea",
    email: "trumpet@kaist.ac.kr",
  },
  {
    name: "Yoon Shin (CEO, Perigee Aerospace Inc.)",
    affiliation: "Perigee Aerospace Inc.",
    address: "96 Gajeongbuk-ro, Yuseong-gu, Daejeon 34111, Republic of Korea",
    tel: "+82-42-710-3513",
    email: "yoonshin@perigee.space",
  },
];
