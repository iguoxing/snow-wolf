/*
 * @Author: ArdenZhao
 * @Date: 2022-03-10 16:53:46
 * @LastEditTime: 2022-03-17 17:33:02
 * @FilePath: /snow-wolf/3、algorithm/Match/4剑指 Offer 39. 数组中出现次数超过一半的数字.js
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
  // 排序算法
  // let len = nums.length
  // nums.sort(function (a, b) { return a - b })
  // // console.log('[ nums ] >', nums)
  // // 位移操作实现除以2的操作
  // return nums[len >> 1]
  // 摩尔投票法
  // 所谓摩尔投票法，核心就是对拼消耗。玩一个诸侯争霸的游戏，假设你方人口超过总人口一半以上，并且能保证每个人口出去干仗都能一对一同归于尽。最后还有人活下来的国家就是胜利。那就大混战呗，最差所有人都联合起来对付你（对应你每次选择作为计数器的数都是众数），或者其他国家也会相互攻击（会选择其他数作为计数器的数），但是只要你们不要内斗，最后肯定你赢。最后能剩下的必定是自己人。
  // 摩尔投票法的性能是会好一些
  let count = 0 // 计数器
  let candidate = 0 // 候选人
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i]
    }
    count += (nums[i] === candidate) ? 1 : -1
  }
  return candidate
};
// let nums = [1, 2, 3, 2, 2, 2, 5, 4, 2]
let nums = [3, 2, 3]
console.log('[ majorityElement(nums) ] >', majorityElement(nums))
  // 考察数组的排序和位移操作
// 解法2 还可以用Map统计的思路来做
