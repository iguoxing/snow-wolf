/*
 * @Author: ArdenZhao
 * @Date: 2022-03-08 18:10:02
 * @LastEditors: Zhaos-MacBook-Pro.local
 * @LastEditTime: 2022-03-17 17:01:15
 * @FilePath: /snow-wolf/3、algorithm/Match/3剑指 Offer 21. 调整数组顺序使奇数位于偶数前面.js
 * https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  // 借助新数组
  // let left = [];
  // let right = [];
  // for (let i = 0; i < nums.length; i++) {
  //   nums[i] % 2 === 0 ? right.push(nums[i]) : left.push(nums[i])
  // }
  // return left.concat(right)
  // 方法2——双指针
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    console.log('[ left，right ] >', left, right)
    // 左面是奇数，则指针加1
    if (nums[left] % 2 === 1) {
      left++
      continue // 跳出当前循环，继续下一次循环
    }
    if (nums[right] % 2 === 0) { // 右面是偶数，则指针减1
      right--
      continue
    }
    // 左右都是偶数，则交换
    let temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp
    left++
    right--
  }
  return nums
};
let nums = [1, 2, 3, 4]
// 输出：[1, 3, 2, 4]
console.log('exchange', exchange(nums))