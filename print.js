//알고리즘 문제
// 프린트
//풀이

function solution(priorities, location) {
  let n = priorities.length;
  let index = Array.from({ length: n }, (v, k) => k);
  let cnt = 1;

  while (priorities.length !== 0) {
    let max = Math.max.apply(null, priorities);
    if (max === priorities[0]) {
      if (index[0] === location) return cnt;
      else priorities.shift(), index.shift(), cnt++;
    } else {
      priorities.push(priorities.shift());
      index.push(index.shift());
    }
  }
}
