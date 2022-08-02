//알고리즘 문제
// 구명보트
//풀이

function solution(people, limit) {
  var answer = 0;
  people = people.sort((a, b) => b - a);
  for (let i = 0, j = people.length - 1; i <= j; i++) {
    if (people[i] + people[j] <= limit) j--;
    answer++;
  }

  return answer;
}
