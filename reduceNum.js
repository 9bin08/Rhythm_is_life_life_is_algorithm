//알고리즘 문제
// 내적
//풀이

function solution(a, b) {
  let answer = 0;
  for (let i in a) {
    answer += a[i] * b[i]
  }
  return answer
}