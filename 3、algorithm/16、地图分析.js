/*
 * @Author: ArdenZhao
 * @Date: 2022-02-07 13:20:09
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-07 13:53:59
 * @FilePath: /snow-wolf/3、algorithm/16、地图分析.js
 * https://leetcode-cn.com/problems/as-far-from-land-as-possible/
 * BFS（Breadth First Search）广度优先
 */
let grid = [[1,0,1],[0,0,0],[1,0,1]];

var maxDistance = function(grid) {
  // console.log('[ grid ] >', grid)
  let m = grid.length;
  let n = grid[0].length;
  let max = 0;
  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }
  // console.log('[ queue ] >', queue)
  let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let visited = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // console.log('[ visited ] >', visited)
  let ans = -1;
  // 都是海洋 或 都是陆地
  if (queue.length === 0 || queue.length === n * n) {
      return ans;
  }
  // 方向数组
  let locations = [[0, -1], [0, 1], [-1, 0], [1, 0]];

  while (queue.length != 0) {
      let len = queue.length;

      // 对每个陆地4个方向搜索
      for (let k = 0; k < len; k++) {
          let [x, y] = queue.shift();
          // 向该点的4个方向进行搜索
          for (let location of locations) {
              let nextI = x + location[0];
              let nextJ = y + location[1];

              // 合法 且 是海洋
              if (nextI >= 0 && nextI < n && nextJ >=0 && nextJ < n && grid[nextI][nextJ] == 0) { 
                  grid[nextI][nextJ] = 1; // 变为陆地
                  queue.push([nextI, nextJ]);
              }
          }
      }
      ans++;
  }
  return ans;
};

console.log('[ maxDistance(grid) ] >', maxDistance(grid))