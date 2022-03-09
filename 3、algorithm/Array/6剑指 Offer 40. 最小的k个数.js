// Copyright 2022 zhaoguoxing
//https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3./
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  // 先排序,后裁剪
  arr.sort(function (a, b) {
    return a - b
  })
  return arr.slice(0, k)
};
let arr = [3, 2, 1]
let k = 2
console.log('[ getLeastNumbers(arr, k) ] >', getLeastNumbers(arr, k))

