// Copyright 2021 zhaoarden
// 搜索插入位置
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 请必须使用时间复杂度为 O(log n) 的算法。
// https://leetcode-cn.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 let arr = [1,3,5,6]
 let target = 7
//二分法不是，拆数组，而是定义两个指针逐渐逼近
var searchInsert = function(nums, target) {
    let len=nums.length;
    let left =0,right =len-1,res=len;//res 要付给最大长度，当目标值大于所有的值时，取数组长度
    //目标是找到第一个target小于等于nums[i]的索引值
    // >> 是位移操作，相当于找到中间点，好奇如果是偶数位移后是偏左，还是偏右
    // console.log('(left+right)>>1',(right-left)>>1);//二分法是要相减//log 是1【偏左】
    while (left <= right){
        let middle =( (right-left)>>1)+left//这里要加上left位置，否则无限循环，爆栈//位移操作需要单独加上括号（优先级低）
        console.log('middle',middle);
        if(target<=nums[middle]){
            res=middle
            right=middle-1//控制停止
        }else{
            left=middle+1//target比中值大，左指针，移动到中值右边第一个
        }
    }
    return res
};
console.log(searchInsert(arr, target));