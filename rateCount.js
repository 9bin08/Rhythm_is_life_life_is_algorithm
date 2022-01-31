//알고리즘 문제
// 실패율
//풀이

function solution(N, stages) {
  var answer = [];

  let stageLevel = stages.length;

  for(let i = 1; i <= N; i++){
    let failStage = 0;
    let stageStep = stages.filter(el => el === i).length;
    
    if(stageStep ===0) {
      failStage = 0;
    }else {
      failStage = stageStep / stageLevel
    }

    stageLevel -= stageStep;
    answer.push({stage: i, result: failStage});
  }

  answer.sort((a,b) => {
    if(a.result === b.result){
      return a.stage - b.stage
    } else{
      return b.result - a.result
    }
  })
  return answer.map(el => el.stage)
}