//알고리즘 문제
// 소수 만들기
//풀이

function solution(nums) {
  var answer = 0;
  
  //o3
  for(let i = 0; i < nums.length-2; i++){
      for(let j = i+1; j < nums.length-1; j++){
          for(let k = j+1; k < nums.length; k++){
              let sum = nums[i] + nums[j] + nums[k]
              answer++;
              
              // 소수 판별
              for(let i = 2 ; i <= Math.sqrt(sum); i++){
                  if(sum % i === 0){
                      answer--;
                      break;
                  }
              } 
              
          }
      }
  }
  
  return answer;
}