// 퀵정렬

const quickSort = (arr) => {
  //카운팅을 위한 int
  let count = 0;

  if (arr.length <= 1) return arr;

  //피봇 - 기준점 피봇의 명세나 규칙이 있다면 성능 극대화, 규칙이 없을 경우 인덱스0 을 피봇으로?
  //피봇 조건을 특정할 수 있다면 무조건 퀵정렬
  let pivot = arr[0];

  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]), (count += 1);
    } else {
      right.push(arr[i]), (count += 1);
    }
  }

  const leftSort = quickSort(left);
  const rightSort = quickSort(right);

  //arr의 길이가 길수록 효과적임, 정렬 알고리즘 중 가장 효율적인 방법인듯, 이해하기 쉽고 데이터가 클 수록 사용하기 좋음.
  //mergeSort와 비교 해보기
  return [...leftSort, pivot, ...rightSort];
};
