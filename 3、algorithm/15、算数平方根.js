/*
 * @Author: ArdenZhao
 * @Date: 2022-01-06 20:45:16
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-01-06 21:01:04
 * @FilePath: /snow-wolf/3、algorithm/15、算数平方根.js
 * https://leetcode-cn.com/problems/sqrtx/
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 */
/**
 * @param {number} x
 * @return {number}
 */
let x = 8
// 二分法解题
var mySqrt = function(x) {
  let left=0
  let right=x
  while (left <= right) {
    let mid=left + ((right -left)>>1)//除以2，偶数取小的
    // console.log('[ (right -left)>>1 ] >', mid,right,(right -left)>>1)
    if(mid * mid <=x){//和目标去比较
      left = mid+1
    }else{
      right = mid-1
    }
  }
  return right
};
console.log('[ mySqrt ] >', mySqrt(x))
