//알고리즘 문제
// 나머지가 1이 되는 수 찾기
//풀이

function solution(n) {
  const answer = [];
  for (i = n; i > 0; i--) {
    if (n % i == 1) {
      answer.push(i);
    }
  }
  return answer[answer.length - 1];
}
