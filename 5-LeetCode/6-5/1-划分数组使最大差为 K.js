/*
 * @Author: ArdenZhao
 * @Date: 2022-06-05 11:41:29
 * @LastEditTime: 2022-06-05 12:00:27
 * @FilePath: /snow-wolf/5-LeetCode/6-5/1-划分数组使最大差为 K.js
 * @Description: https://leetcode.cn/contest/weekly-contest-296/problems/partition-array-such-that-maximum-difference-is-k/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let nums = [3, 6, 1, 2, 5]
let k = 2
var partitionArray = function (nums, k) {
  let max = Math.max(nums)
  let min = Math.min(nums)
  let arr = Array.from(max).fill(0)
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    arr[i] += 1
  }
  for (let j = min; i < max; i++) {
    if (arr[i] > k) {
      res += 1
    }
  }
};
partitionArray(nums, k)