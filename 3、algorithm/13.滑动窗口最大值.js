/*
 * @Author: ArdenZhao
 * @Date: 2021-12-23 23:23:34
 * @LastEditors: Arden
 * @LastEditTime: 2021-12-23 23:35:01
 * @FilePath: /snow-wolf/3、algorithm/13.滑动窗口最大值.js
 */
// https://leetcode-cn.com/problems/sliding-window-maximum/
// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回滑动窗口中的最大值。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res=[]
    let left=0,right=k//截取的时候，会比本身长度+1的位置
    while (right<nums.length+1){
        let tmp=nums.slice(left, right)
        let max=Math.max(...tmp)
        // console.log('tmp',tmp,max);
        res.push(max)
        left++
        right++
    }
    return res
};
let nums = [1,3,-1,-3,5,3,6,7]
let k = 3
console.log(maxSlidingWindow(nums,k));