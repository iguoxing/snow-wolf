/*
 * @Author: ArdenZhao
 * @Date: 2022-03-11 18:06:34
 * @LastEditTime: 2022-03-11 19:39:53
 * @FilePath: /snow-wolf/3、algorithm/Array/11剑指 Offer 53 - II. 0～n-1中缺失的数字.js
 * @Description: file information
 * https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
 * 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
 * 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。求n
 * [0,1,3]
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let left = 0
  let right = nums.length - 1
  let middle = 0
  while (left <= right) {
    middle = (left + right) >> 1
    // console.log('[ left1 ] >', left, middle, right)
    if (nums[middle] === middle) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  // console.log('[ left2 ] >', left, middle, right)
  return left
};
let arr = [0, 1, 3]
console.log('[ missingNumber() ] >', missingNumber(arr))
