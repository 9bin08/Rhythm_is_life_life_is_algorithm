//알고리즘 문제
// 멀쩡한 사각형
//풀이


function getYaksu(w, h) {
      const yakSu = w % h;

      return yakSu === 0 ? h : getYaksu(h,yakSu);
  }
  
  function solution(w, h) {
      let answer = 0;
      const yakSu = getYaksu(w,h);
      
      answer = w * h - (w + h - yakSu);
      
      return answer;
  }