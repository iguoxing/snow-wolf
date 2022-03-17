/*
 * @Author: ArdenZhao
 * @Date: 2022-03-17 14:19:24
 * @LastEditTime: 2022-03-17 16:20:09
 * @FilePath: /snow-wolf/1、bagu/RegExp/demo4.js
 * @Description: file information
 */
// 正则表达式标志
// \w 代表一个或多个字符    \s 是代表空格
var re = /\w+\s/g;
var str = "fee fi fo fum";
var myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]
