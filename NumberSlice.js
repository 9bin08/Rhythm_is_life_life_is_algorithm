//알고리즘 문제
// 크기가 작은 부분문자열
//풀이

function solution(t, p) {
  var answer = 0;
  for (let i in t) {
    if (Number(i) + p.length <= t.length) {
      if (Number(t.slice(0 + Number(i), p.length + Number(i))) <= Number(p)) {
        answer++;
      }
    }
  }
  return answer;
}
