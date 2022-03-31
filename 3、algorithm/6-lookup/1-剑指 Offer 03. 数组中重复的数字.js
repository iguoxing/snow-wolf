/*
 * @Author: ArdenZhao
 * @Date: 2022-03-08 14:00:23
 * @LastEditors: bogon
 * @LastEditTime: 2022-03-31 18:04:50
 * @FilePath: /snow-wolf/3、algorithm/6-lookup/1-剑指 Offer 03. 数组中重复的数字.js
 * https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 * 找出数组中重复的数字。
在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 */
/**
* @param { number[] } nums
* @return { number }
*/

var findRepeatNumber = function (nums) {
  let res = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (res.has(nums[i])) {
      res.set(nums[i], res.get(nums[i]) + 1);
    } else {
      res.set(nums[i], 1);
    }
  }
  let target = 0
  res.forEach(function (value, key) {
    if (value > 1 && !target) {
      // console.log('[ findRepeatNumber(nums) ] >', key, value)
      target = key;
    }
  })
  return target
};
let arr = [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3
console.log('[ findRepeatNumber(arr) ] >', findRepeatNumber(arr))

// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/submissions/

// 【官方题解】确实会简洁一些~
// var findRepeatNumber = function(nums) {
//   let map = new Map();
//   for(let i of nums){
//       if(map.has(i)) return i;
//       map.set(i, 1);
//   }
//   return null;
// };