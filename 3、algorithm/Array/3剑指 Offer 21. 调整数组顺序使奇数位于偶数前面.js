/*
 * @Author: ArdenZhao
 * @Date: 2022-03-08 18:10:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-08 18:12:39
 * @FilePath: /snow-wolf/3、algorithm/Array/3剑指 Offer 21. 调整数组顺序使奇数位于偶数前面.js
 * https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let left = [];
  let right = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i] % 2 === 0 ? right.push(nums[i]) : left.push(nums[i])
  }
  return left.concat(right)
};
let nums = [1, 2, 3, 4]
// 输出：[1, 3, 2, 4]
console.log('exchange', exchange(nums))