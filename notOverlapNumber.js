//알고리즘 문제
// 같은 숫자는 싫어
//풀이

function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
