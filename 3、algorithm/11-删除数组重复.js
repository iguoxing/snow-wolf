// Copyright 2021 zhaoarden
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0,
        right = 0 //需要准备两个指针
    while (right < nums.length) {
        let tmp = nums[right]
        if (nums[left] < tmp) {
            left += 1
            nums[left] = tmp
        }
        right++;
    }
    return left + 1
};
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums));