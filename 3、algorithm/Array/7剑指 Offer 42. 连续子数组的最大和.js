/*
 * @Author: ArdenZhao
 * @Date: 2022-03-10 15:56:14
 * @LastEditors: Zhaos-MacBook-Pro.local
 * @LastEditTime: 2022-03-10 16:40:44
 * @FilePath: /snow-wolf/3、algorithm/Array/7剑指 Offer 42. 连续子数组的最大和.js
 * https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。要求时间复杂度为O(n)。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
//  什么是负贡献？
//  对于新的数A假设是10，如果前面的一个数B是-2，那么前面的B就会对新的A产生了负贡献，让他变成了8，那么就舍弃加B，直接重新从A开始加起，因为此时是最大的

//  什么是正贡献？
//  对于新的数C假设是5，如果前面的一个数A是10，那么前面的A就会对新的C产生了正贡献，让他变成了15，所以就要加埋C，此时和15会比原本的A更大

var maxSubArray = function (nums) {
  let dp = [nums[0]]
  let len = nums.length
  let max = nums[0];
  for (let i = 1; i < len; i++) {
    if (dp[i - 1] > 0) { // 正贡献
      dp[i] = dp[i - 1] + nums[i]
    } else {
      dp[i] = nums[i]
    }
    if (dp[i] > max) {
      max = dp[i]
    }
  }
  return max;
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log('[ maxSubArray(nums) ] >', maxSubArray(nums))

// 参考链接
// https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/solution/gen-ju-gong-xian-zheng-fu-lai-jin-xing-s-xxgb/