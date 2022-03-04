//알고리즘 문제
// 핸드폰 번호 가리기
//풀이

function solution(phone_number) {
  const length = phone_number.length - 4
  return "*".repeat(length) + phone_number.substring(length)
}