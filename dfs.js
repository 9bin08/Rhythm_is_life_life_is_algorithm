// 깊이 탐색

const dfs = (graph, start) => {
  const checked = [];
  const willCheck = [];
  let count = 0;
  willCheck.push(start);

  // bfs, dfs 비교 케이스에 맞는 탐색법 적용
  // 어니언 래플 스케줄 생성에 적용할 수 있을듯
  while (willCheck.length !== 0) {
    const node = willCheck.pop();
    if (!checked.includes(node)) {
      count++;
      checked.push(node);
      willCheck.push(...graph[node]);
    }
  }

  return count;
};
