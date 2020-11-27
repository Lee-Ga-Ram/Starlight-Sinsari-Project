var x, num;

function changeImage() {
  x = parseInt(Math.random() * 17 + 1)
  switch (x) {
    case 2: Imgsrc = "images/r2.jpeg"; num = 2; break;
    case 3: Imgsrc = "images/r_3.png"; num = 3; break;
    case 4: Imgsrc = "images/r4.jpg"; num = 4; break;
    case 5: Imgsrc = "images/r5.jpg"; num = 5; break;
    case 6: Imgsrc = "images/r_6.jpg"; num = 6; break;
    case 7: Imgsrc = "images/r_7.jpeg"; num = 7; break;
    case 8: Imgsrc = "images/r8.jpeg"; num = 8; break;
    case 9: Imgsrc = "images/9_3.jpeg"; num = 9; break;
    case 10: Imgsrc = "images/r10.jpg"; num = 10; break;
    case 11: Imgsrc = "images/r11.jpg"; num = 11; break;
    case 12: Imgsrc = "images/r12.jpg"; num = 12; break;
    case 13: Imgsrc = "images/r13.jpg"; num = 13; break;
    case 14: Imgsrc = "images/r14.jpg"; num = 14; break;
    case 15: Imgsrc = "images/r15.jpg"; num = 15; break;
    case 16: Imgsrc = "images/r16.jpg"; num = 16; break;
    case 17: Imgsrc = "images/r17.png"; num = 17; break;
  }
  document.Image.src = Imgsrc;
  text = aboutCh(num);
  text1 = aboutChar(num);
  document.getElementById("about").innerText = text;
  document.getElementById("about1").innerText = text1;
}
function resetImage() {
  document.Image.src = "image/flowerlogo.jpg;"
  document.getElementById("about").innerText = "";
  document.getElementById("about1").innerText = "";
}
function aboutChar(num) {
  switch (num) {
    case 2: text1 = "신원시장 A-20 \n"; break;
    case 3: text1 = "신원시장 B-28 \n"; break;
    case 4: text1 = "신림역 3번출구에서 137m \n"; break;
    case 5: text1 = "신원시장 B-55\n"; break;
    case 6: text1 = "신림역 3번출구 도보 5분거리 순대타운 뒷골목 \n"; break;
    case 7: text1 = "서울 관악구 남부순환로 176길 20 3층 \n"; break;
    case 8: text1 = "서울 관악구 관천로 45-1 신원시장 A-10 \n"; break;
    case 9: text1 = "서울 관악구 신원로 23 신원시장 B-56 \n"; break;
    case 10: text1 = "서울 관악구 신원로 23 B-47\n"; break;
    case 11: text1 = "서울 관악구 관천로 19길 신원시장 B-59 \n"; break;
    case 12: text1 = "서울 관악구 관천로 19 신원시장 A-68 \n"; break;
    case 13: text1 = "서울 관악구 신림로 327 1층 \n"; break;
    case 14: text1 = "서울 관악구 신림로 59길 15-12 \n"; break;
    case 15: text1 = "서울 관악구 신원로 5길 13 신원시장 B-4 \n"; break;
    case 16: text1 = "서울 관악구 신원로 39 신림역 3번출구에서 206m \n"; break;
    case 17: text1 = "신림역 4번출구에서 50미터 이동후 왼쪽 건물 2~4층"; break;
  }

  return text1;
}
function aboutCh(num) {
  switch (num) {
    case 2: text = "오늘의 추천 가게는 행복한 맛김 입니다!"; break;
    case 3: text = "오늘의 추천 가게는 잉꼬떡방아 입니다!"; break;
    case 4: text = "오늘의 추천 가게는 틈새라면 입니다!"; break;
    case 5: text = "오늘의 추천 가게는 뜨레봉닭강정 입니다!"; break;
    case 6: text = "오늘의 추천 가게는 맵당 입니다!"; break;
    case 7: text = "오늘의 추천 가게는 신사리 즉석떡볶이 입니다!"; break;
    case 8: text = "오늘의 추천 가게는 아저씨닭강정 입니다!"; break;
    case 9: text = "오늘의 추천 가게는 59떡갈비 입니다!"; break;
    case 10: text = "오늘의 추천 가게는 고모네정육식당 입니다 !"; break;
    case 11: text = "오늘의 추천 가게는 시장분식 입니다!"; break;
    case 12: text = "오늘의 추천 가게는 시장탕수육 입니다!"; break;
    case 13: text = "오늘의 추천 가게는 이태리안경 입니다!"; break;
    case 14: text = "오늘의 추천 가게는 킹콩부대찌개 입니다!"; break;
    case 15: text = "오늘의 추천 가게는 원조홍어 입니다!"; break;
    case 16: text = "오늘의 추천 가게는 백암왕순대&왕냉면 입니다!"; break;
    case 17: text = "오늘의 추천 가게는 카페베네 입니다!"; break;

  }
  return text;
}