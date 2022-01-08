//알고리즘 문제
// 로또의 최고 순위와 최저 순위
//풀이


function solution(lottos, win_nums) {
  var answer = [];

  //맞는 숫자 체크
  const win_num_count = lottos.filter(num => win_nums.includes(num)).length

  // max = 0이 다맞음 | min = 0이 다 틀림
  const check_unknown_count = lottos.filter(num => num === 0).length

  // 맞춘 갯수
  const win_result = win_num_count + check_unknown_count
  
  let max = (win_result === 0) ? 6 : 7 - (win_result)
  let min = (win_num_count === 0) ? 6 : 7- win_num_count
  
  
  answer = [max, min]
  return answer;

}