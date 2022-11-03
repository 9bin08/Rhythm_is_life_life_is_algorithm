//넓이 탐색

const bfs = (graph, start) => {
  const checked = [];
  const willCheck = [];
  let count = 0;
  willCheck.push(start);

  // dfs 와 비교 사용
  // 어니언 래플 스케줄 생성에 사용 할 수 있을듯.
  while (willCheck.length !== 0) {
    const node = willCheck.shift();
    if (!checked.includes(node)) {
      count += 1;
      checked.push(node);
      willCheck.push(...graph[node]);
    }
  }

  return count;
};
