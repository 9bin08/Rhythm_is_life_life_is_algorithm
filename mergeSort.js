// mergeSort

const mergeSort = (binaryArr) => {
  if (binaryArr.length <= 1) return binaryArr;

  let mid = Math.floor(binaryArr.length / 2);
  let left = mergeSort(binaryArr.slice(0, mid));
  let right = mergeSort(binaryArr.slice(mid));

  return merge(left, right);
};

const merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    //조건 식에 따라 원하는 결과값 도출 가능
    //변형하여 사용하기 좋을 듯.
    //퀵정렬과 비교
    if (arr2[j].id > arr1[i].id) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};
