export const DURATIONS = ["당일치기", "1박2일", "2박3일", "3박4일"];

export const REGION_MAP: Record<string, string> = {
  capital: "수도권",
  gangwon: "강원도",
  gyeongsangbuk: "경상북도",
  gyeongsangnam: "경상남도",
  chungcheongbuk: "충청북도",
  chungcheongnam: "충청남도",
  jeollabuk: "전라북도",
  jeollanam: "전라남도",
  jeju: "제주도",
};

export const POPULAR_DISTRICTS = [
  "서울시",
  "수원시",
  "용인시",
  "인천특별시",
  "부산광역시",
  "대구광역시",
];

export const REGION_THUMBNAIL_MAP = {
  capital: "수도권",
  gangwon: "강원도",
  gyeongsangbuk: "경상북도",
  gyeongsangnam: "경상남도",
  chungcheongbuk: "충청북도",
  chungcheongnam: "충청남도",
  jeollabuk: "전라북도",
  jeollanam: "전라남도",
  jeju: "nfS9Oa",
};

export const DISTRICT_MAP: Record<string, string[]> = {
  capital: [
    "서울시",
    "가평군",
    "수원시",
    "성남시",
    "고양시",
    "용인시",
    "화성시",
    "안산시",
    "안양시",
    "부천시",
    "광명시",
    "이천시",
    "평택시",
    "김포시",
    "오산시",
    "남양주시",
    "파주시",
    "구리시",
    "양주시",
    "동두천시",
    "포천시",
    "시흥시",
    "의정부시",
    "안성시",
    "세종특별시",
    "인천광역시",
    "연천군",
  ],
  gyeongsangnam: [
    "창원시",
    "진주시",
    "통영시",
    "사천시",
    "김해시",
    "밀양시",
    "거제시",
    "양산시",
    "함안군",
    "의령군",
    "창녕군",
    "남해군",
    "하동군",
    "산청군",
    "거창군",
    "합천군",
    "부산광역시",
  ],
  gyeongsangbuk: [
    "포항시",
    "경주시",
    "김천시",
    "안동시",
    "구미시",
    "영천시",
    "상주시",
    "문경시",
    "예천군",
    "청송군",
    "영양군",
    "봉화군",
    "영덕군",
    "울진군",
    "울릉군",
    "울산광역시",
    "대구광역시",
  ],
  jeollanam: [
    "목포시",
    "여수시",
    "순천시",
    "나주",
    "담양군",
    "장성군",
    "영광군",
    "함평군",
    "신안군",
    "무안군",
    "진도군",
    "완도군",
    "강진군",
    "해남군",
    "영암군",
    "순천시",
    "광주광역시",
    "장흥군",
    "보성군",
  ],
  jeollabuk: [
    "전주시",
    "익산시",
    "군산시",
    "남원시",
    "정읍시",
    "김제시",
    "완주군",
    "진안군",
    "무주군",
    "장수군",
    "임실군",
    "순창군",
    "고창군",
    "부안군",
  ],
  chungcheongnam: [
    "천안시",
    "공주시",
    "보령시",
    "아산시",
    "서산시",
    "논산시",
    "계룡시",
    "당진시",
    "홍성군",
    "예산군",
    "태안군",
    "서천군",
    "청양군",
    "대전광역시",
  ],
  chungcheongbuk: [
    "청주시",
    "충주시",
    "제천시",
    "진천군",
    "음성군",
    "단양군",
    "괴산군",
    "증평군",
    "성과군",
  ],
  gangwon: [
    "춘천시",
    "원주시",
    "강릉시",
    "동해시",
    "삼척시",
    "태백시",
    "속초시",
    "양양군",
    "홍천군",
    "횡성군",
    "영월군",
    "평창군",
    "정선군",
    "철원군",
    "인제군",
    "고성군",
    "양구군",
    "화천군",
  ],
  jeju: ["제주시", "서귀포시"],
};

export const STYLE_CATEGORIES = [
  ["자연", "자연", "자연/도시", "도시", "도시"],
  ["관광", "관광", "관광/휴식", "휴식", "휴식"],
  ["럭셔리숙소", "럭셔리숙소", "숙박종류", "가성비숙소", "가성비숙소"],
  [
    "사진촬영 매우 중요",
    "사진촬영 중요",
    "사진촬영 상관없음",
    "사진촬영을 딱히 중요하지 않음",
    "사진촬영 매우 중요하지 않음",
  ],
];

export const PREFERENCE_DESCRIPTIONS_MAP: Record<number, string> = {
  1: "매우 선호",
  2: "선호",
  3: "상관없음",
  4: "선호",
  5: "매우 선호",
};
