/*
 * @Author: ArdenZhao
 * @Date: 2022-02-12 13:38:16
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-12 14:06:40
 * @FilePath: /snow-wolf/3、algorithm/17、使用最小花费爬楼梯.js
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 */
let cost = [1,100,1,1,1,100,1,1,100,1]
var minCostClimbingStairs = function(cost) {
  let len=cost.length
  let arr=new Array(len+1).fill(0)
  for(let i=2; i<=len; i++){
    let sumA=cost[i-2]+arr[i-2]
    let sumB=cost[i-1]+arr[i-1]
    arr[i] = Math.min(sumA,sumB)
  }
  return arr[len]
};
console.log('[ minCostClimbingStairs ] >', minCostClimbingStairs(cost))