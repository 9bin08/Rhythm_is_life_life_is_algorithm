//알고리즘 문제
// 피보나치 수
//풀이

function solution(n) {
  return n < 2 ? n : solution(n - 1) + solution(n - 2);
}
