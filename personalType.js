//알고리즘 문제
// 성격 유형 검사하기
//풀이

function solution(survey, choices) {
  const personalType = {};
  const types = ['RT', 'CF', 'JM', 'AN'];

  types.forEach((type) =>
    type.split('').forEach((char) => (personalType[char] = 0))
  );

  choices.forEach((choice, index) => {
    const [first, sec] = survey[index];

    personalType[choice > 4 ? first : sec] += Math.abs(choice - 4);
  });

  return types
    .map(([a, b]) => (personalType[b] > personalType[a] ? b : a))
    .join('');
}
