/*
 * @Author: ArdenZhao
 * @Date: 2022-03-11 18:01:19
 * @LastEditTime: 2022-03-11 18:03:17
 * @FilePath: /snow-wolf/3、algorithm/Array/10剑指 Offer 53 - I. 在排序数组中查找数字 I.js
 * @Description: file information
 * https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
 * 统计一个数字在排序数组中出现的次数。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let res = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res++
    }
  }
  return res
};
let nums = [5, 7, 7, 8, 8, 10]
let target = 8
console.log('[ search(nums,target) ] >', search(nums, target))

