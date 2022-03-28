/*
 * @Author: ArdenZhao
 * @Date: 2022-03-01 14:46:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-01 14:49:49
 * @FilePath: /snow-wolf/3、algorithm/String/1_统计包含给定前缀的字符串.js
 */
// 给你一个字符串数组 words 和一个字符串 pref 。
// 返回 words 中以 pref 作为 前缀 的字符串的数目。
// 字符串 s 的 前缀 就是  s 的任一前导连续字符串。
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let result = 0;
  words.forEach(function (item) {
    if (item.indexOf(pref) === 0) {
      result++;
    }
  })
  return result;
};
let words = ["pay", "attention", "practice", "attend"]
let pref = "at"
console.log('[ prefixCount(words, pref) ] >', prefixCount(words, pref))