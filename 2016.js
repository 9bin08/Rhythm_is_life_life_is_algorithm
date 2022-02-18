//알고리즘 문제
// 2016
//풀이

function solution(a, b) {
  
  let  day=["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  const date = new Date(`2016,${a},${b}`);
  
  return day[date.getDay()]
}