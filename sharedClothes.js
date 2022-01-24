//알고리즘 문제
// 체육복
//풀이

//TODO.....
function solution(n, lost, reserve) {
  
  let cantPm = 0;
  let countMoreClothes = lost.filter(el => !reserve.includes(el));
  let countLost = reserve.filter(el => !lost.includes(el));

  // cantPm = countMoreClothes.filter(lost => {
  //   let boundaryClothes = countLost.find(el => Math.abs(el-lost) <= 1);

  //   if(!boundaryClothes) return true

  //   cantPm = countLost.filter(el => el !== boundaryClothes)

  // }).length;
  // return n - cantPm
  // for(let i=0; i < countLost.lenght; i++){
  //   for(let j = 0; j < countMoreClothes.lenght; j++){
  //     if( countMoreClothes[j] === countLost[i]-1 || countMoreClothes[j] === countLost[i]+1){
  //       countMoreClothes[j]= -1;
  //       break;
  //     }
  //   }
  // }
  // const length = countMoreClothes.filter(el => !el == -1).length
  // return n-length
}