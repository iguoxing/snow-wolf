/*
 * @Author: ArdenZhao
 * @Date: 2022-03-10 16:53:46
 * @LastEditTime: 2022-03-10 17:03:38
 * @FilePath: /snow-wolf/3、algorithm/Array/8剑指 Offer 39. 数组中出现次数超过一半的数字.js
 * @Description: file information
 * https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let len = nums.length
  nums.sort(function (a, b) { return a - b })
  // console.log('[ nums ] >', nums)
  // 位移操作实现除以2的操作
  return nums[len >> 1]
};
// let nums = [1, 2, 3, 2, 2, 2, 5, 4, 2]
let nums = [3, 2, 3]
console.log('[ majorityElement(nums) ] >', majorityElement(nums))
  // 考察数组的排序和位移操作
// 解法2 还可以用Map统计的思路来做
