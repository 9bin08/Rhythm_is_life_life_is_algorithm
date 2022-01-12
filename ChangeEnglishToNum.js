//알고리즘 문제
// 숫자 문자열과 영단어
//풀이

function solution(s) {
  const EnglishNum = [{english:'zero',
                      num: 0},{english:'one',
                      num: 1},{english:'two',
                      num: 2},{english:'three',
                      num: 3},{english:'four',
                      num: 4},{english:'five',
                      num: 5},{english:'six',
                      num: 6},{english:'seven',
                      num: 7},{english:'eight',
                      num: 8},{english:'nine',
                      num: 9},]
  
    var answer = 0;
  for(let i of EnglishNum){
    if(s.includes(i.english)){
       s = (s.replace(i.english, i.num))
    }
    answer = Number(s)

  }
    return answer;
}
