/*
 * @Author: ArdenZhao
 * @Date: 2022-03-01 18:13:28
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-01 18:24:33
 * @FilePath: /snow-wolf/3、algorithm/String/2剑指 Offer 05. 替换空格.js
 * https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 * 
 * https://leetcode-cn.com/submissions/detail/275419242/
 */
// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
// 示例 1：
// 输入：s = "We are happy."
// 输出："We%20are%20happy."

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let len = s.length;
  let res = '';
  for (let i = 0; i < len; i++) {
    if (s[i] === ' ') {
      res += '%20';
    } else {
      res += s[i];
    }
  }
  return res
  // \s匹配一个空白字符，包括空格、制表符、换页符和换行符。等价于[ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]。
  // /g 代表一个或多个字符
  // return s.replace(/\s/g, '%20')
};
let s = "We are happy."
console.log(replaceSpace(s))

// 参考链接
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions