/*
 * @Author: ArdenZhao
 * @Date: 2022-03-11 19:45:28
 * @LastEditTime: 2022-03-11 20:38:57
 * @FilePath: /snow-wolf/3、algorithm/Array/12剑指 Offer 61. 扑克牌中的顺子.js
 * @Description: file information
 * https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/
 * 从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这5张牌是不是连续的。
 * 2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
 * 五张牌，连续的牌，且数字大小有顺序。
 * 而大、小王为 0 ，可以看成任意数字
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  let set = new Set()
  let min = 14
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      continue // 遇到大小王 ，跳过
    }
    if (set.has(nums[i])) {
      return false //有重复数字
    }
    set.add(nums[i])
    min = Math.min(min, nums[i])
    max = Math.max(max, nums[i])
  }
  return max - min < 5 //最大值减去最小值小于5，即为顺子
};
let nums = [1, 0, 3, 4, 5]
console.log('[ isStraight ] >', isStraight(nums))
