//알고리즘 문제
// 예산
//풀이

function solution(d, budget) {
  let answer = 0;
  let result = 0;
  
  d.sort((a,b) => a - b);

  for(let i in d){
      answer++;
      result += d[i]

      if(result > budget)
          answer--;
  }

  return answer;
}