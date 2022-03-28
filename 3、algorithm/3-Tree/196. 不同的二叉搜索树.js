/*
 * @Author: ArdenZhao
 * @Date: 2022-03-08 21:15:15
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-08 21:15:17
 * @FilePath: /snow-wolf/3、algorithm/Tree/196. 不同的二叉搜索树.js
 * https://leetcode-cn.com/problems/unique-binary-search-trees/
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 * 
 * 1、二叉查找树（Binary Search Tree）
 * （又：二叉搜索树，二叉排序树）它或者是一棵空树，或者是具有下列性质的二叉树： 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值； 它的左、右子树也分别为二叉排序树。
 */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // 动态规划
  if (n === 0 || n === 1) return 1
  let dp = new Array(n + 1).fill(0)
  // 当 n = 0n=0 时，没有数字，只能形成一种 BSTBST ：空树。
  // 当 n = 1n=1 时，只有一个数字，只能形成一种 BSTBST ：单个节点.
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j] // 从特殊到一半；画图对理解是有帮助的
    }
  }
  return dp[n]
};
let n = 4
console.log(numTrees(n))


// 参考题解
// https://leetcode-cn.com/problems/unique-binary-search-trees/solution/shou-hua-tu-jie-san-chong-xie-fa-dp-di-gui-ji-yi-h/