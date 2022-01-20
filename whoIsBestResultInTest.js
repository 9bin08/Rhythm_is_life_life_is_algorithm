//알고리즘 문제
// 모의고사 .
//풀이


//TODO : 또 나온 습관.. 쉽게 할 수 있을듯 ?
function solution(answers) {
  let answer = [];
    const solutionPattern = [[1,2,3,4,5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] ]
    let solutionResult = [[],[],[]]
    let score = [{key:1,value:0},{key:2,value:0},{key:3,value:0}];
    let key = []
  for(let i in solutionPattern){
    key[i] = Math.ceil(answers.length / solutionPattern[i].length)
    }

  for(let i in key){

    for(let j=0;j<key[i];j++){

      solutionResult[i].push(...solutionPattern[i])
    }

  }
  
  for(let i in answers){
 
    if(solutionResult[0][i] == answers[i] ) score[0].value++
    if(solutionResult[1][i] == answers[i] ) score[1].value++
    if(solutionResult[2][i] == answers[i] ) score[2].value++
  }
  score.sort((a,b) => {
    return b.value - a.value
  })
  for( let i of score){
    if(i.value != 0)
    answer.push(i.key)
  }
  
return answer
}
