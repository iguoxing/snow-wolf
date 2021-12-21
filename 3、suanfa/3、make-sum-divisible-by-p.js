// Copyright 2021 zhaoguoxing
// 给你一个正整数数组 nums，请你移除 最短 子数组（可以为 空），使得剩余元素的 和 能被 p 整除。 不允许 将整个数组都移除。
// 请你返回你需要移除的最短子数组的长度，如果无法满足题目要求，返回 -1 。
// 子数组 定义为原数组中连续的一组元素。
/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
//  */
//  若 Sm % p == (Sn - mod) % p 意味着(m,n]区间内有 ,(Sn - mod - Sm ) % p == 0; 那么(Sn-Sm)%p == mod , 这个可以简单的这么推一下 设 a = Sn - mod - Sm , 则 a + mod == Sn-Sm , (a + mod)%p == (a%p + mod%p)%p == mod % p == mod ;
//  根据上一步可知使得整个数列mod不为0的子数列应该在(m,n]中间，然后我们只要遍历整个数组找到这个最小的区间便可。

var minSubarray = function(nums, p) {
    let sum=0;
    nums.forEach((value) => {
        sum+=value
        console.log(value);
    })
    let mod=sum%p
    if(sum<p) return -1;//基础长度不够，返回-1
    if(mod==0) return 0
    //sum>p
    const map = new Map;
    let curCount = 0;
    let res = Infinity;
    map.set(0,-1);
    for( let i = 0 ; i < nums.length ; i++ ){
        curCount += nums[i];
        const curPos = (curCount - mod + p) % p;
        if( map.has(curPos) ){
            res = Math.min(res, i - map.get(curPos));
            if( res == 1 &&nums.length > 1 ){
                return res;
            }
        }
        map.set(curCount % p,i)
    }
    res >= nums.length && (res = Infinity);
    return res === Infinity ? -1 : res;
};
// let nums = [3,1,4,2], p = 6
// console.log('minSubarray(nums,p)',minSubarray(nums,p));