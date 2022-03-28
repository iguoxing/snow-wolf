/*
 * @Author: ArdenZhao
 * @Date: 2022-03-05 15:46:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-05 16:04:16
 * @FilePath: /snow-wolf/3、algorithm/String/4面试题50. 第一个只出现一次的字符.js
 * https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 * s = "abaccdeff"
 */

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  if(!s) return "";
  let obj = {}
  let res = ''
  for (var i = 0; i < s.length; i++) {
    let val = s[i]
    obj[val] = obj[val] ? obj[val] + 1 : 1
  }
  for(let key in obj) {
    console.log('[ key ] >', key)
    if(obj[key]===1){
      res+=key
    }
  }
  return res.length>0?res[0]: ' '
};
let s = "abaccdeff"
console.log('[ firstUniqChar(s) ] >', firstUniqChar(s))