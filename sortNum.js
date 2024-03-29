//알고리즘 문제
// 가장 큰 수
//풀이

function solution(numbers) {
  var answer = numbers
    .map((c) => c + '')
    .sort((a, b) => b + a - (a + b))
    .join('');

  return answer[0] === '0' ? '0' : answer;
}
