//알고리즘 문제
// 비밀지도
//풀이

function solution(n, arr1, arr2) {
  var answer = [];
 
  for(let i=0; i<n; i++){
      const toStr = (arr1[i] | arr2[i]).toString(2);
      let map = [];
      for(let j = toStr.length-n; j<toStr.length; j++) { 
          if(toStr[j] === '1') {
              map.push('#');
          } else {
              map.push(' ');
          }
      }
      answer.push(map.join(''));
  }
  return answer;
}