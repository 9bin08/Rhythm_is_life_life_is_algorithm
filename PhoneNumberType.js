//알고리즘 문제
// 번호 추론
//풀이

function test1(number) {
  let answer;
  const NumberType = [
    new RegExp(/\d{2}-\d{3}-\d{4}-\d{4}/),
    new RegExp(/\d{11}/),
    new RegExp(/\d{3}-\d{4}-\d{4}/),
  ];

  for (let i in NumberType) {
    if (NumberType[i].test(number)) answer = ++i;
  }
  return answer ? answer : -1;
}
