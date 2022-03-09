// https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字.
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  const rows = matrix.length, columns = matrix[0].length;
  const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(false));
  const total = rows * columns;
  const order = new Array(total).fill(0);

  let directionIndex = 0, row = 0, column = 0;
  // 为什么路径是这四个，分别对应四个方向的坐标移动位置
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  for (let i = 0; i < total; i++) {
    // console.log('[ row ] >', row, column)
    order[i] = matrix[row][column];
    visited[row][column] = true;
    const nextRow = row + directions[directionIndex][0]
    const nextColumn = column + directions[directionIndex][1];
    // console.log('[ nextRow ] >', nextRow, nextColumn, directionIndex)
    if (!(0 <= nextRow && nextRow < rows && 0 <= nextColumn && nextColumn < columns && !(visited[nextRow][nextColumn]))) {
      directionIndex = (directionIndex + 1) % 4;
      console.log('[超过范围，换方向， directionIndex ] >', directionIndex)
    }
    row += directions[directionIndex][0];
    column += directions[directionIndex][1];
  }
  return order;
};
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log('[ spiralOrder(matrix) ] >', spiralOrder(matrix))
// [1, 2, 3] 1 , 2, 3
// [4, 5, 6] n+1,n+2,n+3
// [7, 8, 9] 2n+1,2n+2,2n+3