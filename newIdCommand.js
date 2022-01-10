//알고리즘 문제
// 신규 아이디 추천
//풀이

function solution(new_id) {
  const transformId = new_id
  .toLowerCase()
  .replace(/[^\w\-\.]/g, '') 
  .replace(/\.+/g, '.') 
  .replace(/^\.|\.$/g, '') 
  .replace(/^$/, 'a') 
  .slice(0, 15).replace(/\.$/, ''); 

  if(transformId.length > 2) return transformId
  else return transformId.padEnd(3, transformId[transformId.length - 1])  
}
