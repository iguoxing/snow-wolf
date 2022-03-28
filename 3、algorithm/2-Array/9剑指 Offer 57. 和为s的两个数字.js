/*
 * @Author: ArdenZhao
 * @Date: 2022-03-10 17:35:05
 * @LastEditTime: 2022-03-10 17:58:28
 * @FilePath: /snow-wolf/3、algorithm/Array/9剑指 Offer 57. 和为s的两个数字.js
 * @Description: file information
 * https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/
 * 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 解法1 总超时
  // let arr = []
  // while (arr.length == 0) {
  //   let i = 0
  //   let a = nums[i]
  //   let b = target - a
  //   if (nums.indexOf(a) > -1 && nums.indexOf(b) > -1) {
  //     arr.push(a)
  //     arr.push(b)
  //   }
  //   i++
  // }
  // 解法2 双指针
  let arr = []
  let i = 0
  let j = nums.length - 1
  while (arr.length == 0) {
    let a = nums[i]
    let b = nums[j]
    if (a + b == target) {
      arr.push(a)
      arr.push(b)
    } else if (a + b > target) {
      j--
    } else {
      i++
    }
  }
  return arr
};
let nums = [16, 16, 18, 24, 30, 32], target = 48
console.log('[ twoSum ] >', twoSum(nums, target))