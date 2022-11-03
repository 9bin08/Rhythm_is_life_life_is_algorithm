// binary 탐색

const binary = (target, binaryArr) => {
  let count = 0;
  let midArr = [];
  let low = 0;
  let hi = binaryArr.length - 1;

  // 선형 탐색과 비교 결과 우월한 성능 (filter)
  // 이해하기 쉬운 코드, 정렬된 arr만 가능.. 적용할 때 주의 필요
  while (low <= hi) {
    let mid = Math.floor((low + hi) / 2);
    midArr.push(mid);
    if (target === binaryArr[mid].id) {
      count += 1;
      return midArr;
    } else if (target > binaryArr[mid].id) {
      count += 1;
      low = mid + 1;
    } else if (target < binaryArr[mid].id) {
      count += 1;
      hi = mid - 1;
    }
  }
  return midArr;
};
