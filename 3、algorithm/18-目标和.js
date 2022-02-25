/*
 * @Author: ArdenZhao
 * @Date: 2022-02-25 17:25:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-25 18:10:45
 * @FilePath: /snow-wolf/3、algorithm/18-目标和.js
 * https://leetcode-cn.com/problems/target-sum/
 */
// 给你一个整数数组 nums 和一个整数 target 。
// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
// 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
// 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let count = 0;
  let dfs = function (nums, target, index, sum) {
    if (index === nums.length) {
      if (sum === target) {
        count++;
      }
      return;
    }
    dfs(nums, target, index + 1, sum + nums[index]);
    dfs(nums, target, index + 1, sum - nums[index]);
  }
  dfs(nums, target, 0, 0);
  return count
};

// 5 种
let nums = [1, 1, 1, 1, 1]
let target = 3
console.log('[ findTargetSumWays(nums, target) ] >', findTargetSumWays(nums, target))