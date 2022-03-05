/*
 * @Author: ArdenZhao
 * @Date: 2022-03-05 16:24:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-05 16:26:15
 * @FilePath: /snow-wolf/3、algorithm/String/5剑指 Offer 58 - II. 左旋转字符串.js
 * https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。
 * 比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 */
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  let left = s.slice(n)
  let right = s.slice(0, n)
  return left + right
};

let s = "abcdefg"
let k = 2
console.log('[ reverseLeftWords(s, k) ] >', reverseLeftWords(s, k))
