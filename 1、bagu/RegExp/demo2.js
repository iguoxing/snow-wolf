/*
 * @Author: ArdenZhao
 * @Date: 2022-03-17 14:19:24
 * @LastEditTime: 2022-03-17 16:10:31
 * @FilePath: /snow-wolf/1、bagu/RegExp/demo2.js
 * @Description: file information
 */
// 使用正则表达式
var myRe = /d(b+)d/g;
// var myArray = myRe.test("cdbbdbsbz");
var myArray = myRe.exec("cdbbdbsbz");
// 一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回 null）。
//[ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz', groups: undefined ]
console.log('[ myArray ] >', myArray)