//알고리즘 문제
// k번째수
//풀이


function solution(array, commands) {
  var answer = [];
for(let i in commands){
  answer[i] = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=> a-b)[commands[i][2]-1]
}
  return answer;
}