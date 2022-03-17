/*
 * @Author: ArdenZhao
 * @Date: 2022-03-17 14:19:24
 * @LastEditTime: 2022-03-17 16:18:29
 * @FilePath: /snow-wolf/1、bagu/RegExp/demo3.js
 * @Description: file information
 */
// 使用括号的子字符串匹配
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
// 替换为了空格为逗号，并且把第一个和第二个换成了位置
var newstr = str.replace(re, "$2, $1");
console.log(newstr);
