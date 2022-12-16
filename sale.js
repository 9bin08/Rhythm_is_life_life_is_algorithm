//알고리즘 문제
// 할인행사
//풀이

function solution(want, number, discount) {
  let answer = 0;
  for (let i = 0; i + 10 < discount.length + 1; i++) {
    let wantBucket = [];
    want.map((thing, index) =>
      wantBucket.push(
        discount.slice(i, i + 10).filter((el) => el === thing).length
      )
    );
    if (wantBucket.filter((el, i) => number[i] === el).length === number.length)
      answer += 1;
  }
  return answer;
}
