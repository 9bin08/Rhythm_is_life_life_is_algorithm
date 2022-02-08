//알고리즘 문제
// 오픈채팅방
//풀이


  function solution(record) {
    const users = {};
    const transformWord = [];
    const msg = {
      Enter: "님이 들어왔습니다.",
      Leave: "님이 나갔습니다.",
    };
  
    for (let i of record) {
      const [action, uid, nickname] = i.split(" ");
      if (nickname) users[uid] = nickname;
      if (action !== "Change") transformWord.push([action, uid]);
    }
  
    return transformWord.map(([action, uid]) => `${users[uid]}${msg[action]}`);
  }
