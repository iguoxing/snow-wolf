/*
 * @Author: ArdenZhao
 * @Date: 2022-01-05 19:43:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-01-05 19:52:05
 * @FilePath: /snow-wolf/3、algorithm/14-排序数组.js
 * https://leetcode-cn.com/problems/sort-an-array/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let nums = [5,2,3,1]
var sortArray = function(nums) {
  //冒泡排序 bubbleSort
  let len=nums.length
  for (var i=0; i<len-1;i++){
    for (var j=0; j<len-1-i; j++) {
      if(nums[j]>nums[j+1]){
        let tmp= nums[j]
        nums[j] = nums[j+1]
        nums[j+1] = tmp
      }
    }
  }
  // console.log('[ nums ] >', nums)
  return nums
};
console.log('[ sortArray ] >', sortArray(nums))
// 参考链接
// https://blog.csdn.net/xinghuowuzhao/article/details/120396633?spm=1001.2014.3001.5501