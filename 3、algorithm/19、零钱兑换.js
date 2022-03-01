/*
 * @Author: ArdenZhao
 * @Date: 2022-03-01 07:24:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-01 08:08:45
 * @FilePath: /snow-wolf/3、algorithm/19、零钱兑换.js
 * https://leetcode-cn.com/problems/coin-change-2/
 */
// 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
// 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
// 假设每一种面额的硬币有无限个。 
// 题目数据保证结果符合 32 位带符号整数。
// 完全背包问题-动态规划
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  let len=coins.length;
  let dp=new Array(amount+1).fill(0) //dp 是所有组合
  dp[0] = 1
  //遍历所有钱币
  for(let i=0; i<len; i++){
    for(let j=coins[i]; j<=amount; j++){
      if(j>=coins[i]){
        dp[j]+=dp[j-coins[i]]
      }
    }
  }
  return dp[amount]
};
let amount = 5
let coins = [1, 2, 5]
console.log('[ change(amount, coins) ] >', change(amount, coins))


