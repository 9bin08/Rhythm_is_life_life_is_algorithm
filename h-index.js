//알고리즘 문제
// H-index
//풀이

function solution(citations) {
  citations.sort((a, b) => b - a);

  let answers = 0;
  for (let i in citations) {
    if (i < citations[i]) {
      answers++;
    }
  }

  return answers;
}
