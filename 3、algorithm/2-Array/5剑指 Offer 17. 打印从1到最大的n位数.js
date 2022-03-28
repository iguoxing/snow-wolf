// Copyright 2022 zhaoguoxing
// https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
// 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999.
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let result = [];
  let max = 1
  // 求出n*n的值
  for (let i = 0; i < n; i++) {
    max = max * 10
  }
  for (let j = 1; j < max; j++) {
    result.push(j)
  }
  return result
};
let n = 3
console.log('[ printNumbers(n) ] >', printNumbers(n))

