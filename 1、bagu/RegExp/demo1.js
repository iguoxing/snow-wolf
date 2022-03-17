/*
 * @Author: ArdenZhao
 * @Date: 2022-03-17 14:19:24
 * @LastEditTime: 2022-03-17 14:37:47
 * @FilePath: /snow-wolf/1、bagu/RegExp/demo1.js
 * @Description: file information
 */
// 创建正则对象
// 方式1——就是用两个/区分出是正则表达式的开始和结束
// var re = /ab+c/;
// 方式2
var re = new RegExp("ab+c");
console.log('[ re ] >', re)