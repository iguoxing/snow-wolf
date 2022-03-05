/*
 * @Author: ArdenZhao
 * @Date: 2022-03-05 15:26:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-05 15:37:02
 * @FilePath: /snow-wolf/3、algorithm/String/3剑指 Offer 58 - I. 翻转单词顺序.js
 * 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。
 * 输入: "the sky is blue"
输出: "blue is sky the"
 */
/**
 * @param {string} s
 * @return {string}
 */
//  匹配一个空白字符，包括空格、制表符、换页符和换行符。等价于[ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]。
//  例如, /\s\w*/ 匹配"foo bar."中的' bar'.
//  经测试，\s不匹配"\u180e"，在当前版本Chrome(v80.0.3987.122)和Firefox(76.0.1)控制台输入/\s/.test("\u180e")均返回false.
 var reverseWords = function(s) {
   let tmp = s.replace(/\s+/g, ' ').split(' ').reverse()
  //  console.log('tmp', tmp)
   return tmp.join(' ').trim()
};
let str="a good   example"
// let str="  hello world!  "
console.log('[ reverseWords(str) ] >', reverseWords(str))