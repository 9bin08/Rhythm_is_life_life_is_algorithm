//알고리즘 문제
// 포켓몬
//풀이

function solution(nums) {

  const countResult = nums.length / 2
  let setArr = new Set(nums);
  if(countResult < setArr.size) return countResult
  else if(countResult >= setArr.size)return setArr.size
}