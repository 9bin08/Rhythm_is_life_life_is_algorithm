//알고리즘 문제
// 약수의 갯수와 덧셈
//풀이

function solution(left, right) {
  let answer = 0;

  for(let i = left; i <= right; i++){
    let myArr = [];

    for(let j =0; j <=i; j++){
      if(i % j === 0) myArr.push(j)
    }
      if(myArr.length % 2 === 0) answer += i
      else answer -= i
  }
  return answer;
}