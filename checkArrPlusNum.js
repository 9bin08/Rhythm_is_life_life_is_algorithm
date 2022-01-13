//알고리즘 문제
// 없는 숫자 더하기
//풀이

function solution(numbers) {
  const numArr = [1,2,3,4,5,6,7,8,9]
    var answer = 0;
  for(let i of numArr){
    if(!numbers.includes(i)){
      answer+= i
    }
    
  }
    return answer;
}