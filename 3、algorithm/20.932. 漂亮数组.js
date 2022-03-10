/*
 * @Author: ArdenZhao
 * @Date: 2022-03-10 18:33:26
 * @LastEditTime: 2022-03-10 19:51:02
 * @FilePath: /snow-wolf/3、algorithm/20.932. 漂亮数组.js
 * @Description: file information
 * 对于某些固定的 N，如果数组 A 是整数 1, 2, ..., N 组成的排列，使得：
对于每个 i < j，都不存在 k 满足 i < k < j 使得 A[k] * 2 = A[i] + A[j]。
那么数组 A 是漂亮数组。
给定 N，返回任意漂亮数组 A（保证存在一个）。
输入：4
输出：[2,1,4,3]
等价于没有连续3个数是顺序的；或倒序
[3,1,2,5,4]
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function (n) {
  let memo = new Map()
  const f = (n) => {
    // console.log('[ n0 ] >', n)
    if (memo.has(n)) {
      return memo.get(n)
    }
    let ans = new Array(n)
    if (n == 1) {
      ans[0] = 1
    } else {
      let t = 0
      // ceil对一个数进行上取整。
      let l = f(Math.ceil(n / 2))  //奇数个数 递归调用，l是一个数组
      // console.log('[ l0 ] >', l, n)
      l.forEach((v) => {
        ans[t++] = 2 * v - 1 //找到左侧数字
        // console.log('[ v ] >', v, ans)
      })
      // console.log('[ l ] >', l, ans)
      // floor对一个数进行下取整。
      let r = f(Math.floor(n / 2))  //偶数
      r.forEach((v) => ans[t++] = 2 * v) //计算右侧数字，只要奇偶排列就不会出现重复
      // console.log('[ r ] >', r, ans)
    }
    memo.set(n, ans)
    // console.log('[ beautifulArray ] >', ans, memo)
    return ans
  }
  return f(n)
};
let n = 5
console.log('[ beautifulArray ] >', beautifulArray(n))

