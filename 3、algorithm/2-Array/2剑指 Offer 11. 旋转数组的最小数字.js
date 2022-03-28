/*
 * @Author: ArdenZhao
 * @Date: 2022-03-08 17:55:09
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-08 18:07:14
 * @FilePath: /snow-wolf/3、algorithm/Array/2剑指 Offer 11. 旋转数组的最小数字.js
 * https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为1。  
 */
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  // 方法1——【经测试，第一种的性能最好】
  let min = Math.min.apply(null, numbers);
  // 方法2
  // let min = Math.min(...numbers);
  // 方法3 排序
  // numbers.sort((a, b) => a - b);
  // let min = numbers[0];
  return min
};
let nums = [3, 4, 5, 1, 2]
console.log('minArray', minArray(nums))
// 输出：1


// 找到数组中的最小值
// 思路：排序；设定最小值；Math.min.apply(this, args);ES6 Math.min(...args)
// https://www.cnblogs.com/zhouyangla/p/8482010.html