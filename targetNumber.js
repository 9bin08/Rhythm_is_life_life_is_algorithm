//알고리즘 문제
// 타겟 넘버
//풀이

function solution(numbers, target) {
  var answer = 0;
  recur(0, 0);
  return answer;

  function recur(count, sum){
    // leaf node 도착했을 때, 모든 numbers 탐색
      if( count === numbers.length){
        // 주어진 조건에 만족하면 answer++
          if(sum ===target ){
              answer++
          }
          return
      }

    // +
      recur(count+1, sum+numbers[count]);
    // -
      recur(count+1, sum-numbers[count]);
  }
}