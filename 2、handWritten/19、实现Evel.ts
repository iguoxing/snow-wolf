/*
 * @Author: ArdenZhao
 * @Date: 2022-02-18 17:08:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-18 17:47:21
 * @FilePath: /snow-wolf/2、handWritten/19、实现Evel.ts
 * 永远不要使用 eval！
 * eval() 是一个危险的函数， 它使用与调用者相同的权限执行代码。如果你用 eval() 运行的字符串代码被恶意方（不怀好意的人）修改，您最终可能会在您的网页/扩展程序的权限下，在用户计算机上运行恶意代码。更重要的是，第三方代码可以看到某一个 eval() 被调用时的作用域，这也有可能导致一些不同方式的攻击。相似的 Function 就不容易被攻击。
 */

// 思路是用IIFE（立即调用函数表达式）+ 使用 window.Function
import { obj2json } from '../obj2json'; // 这个库不好使，那么需要手动先实现对象转json
import { TAnyObject } from '../types'; // 类型库，使用JS时，可以不用
export const safeEval = (returnCode: string, vars: TAnyObject = {}, expression?: string) => {
  // Object.entrie 遍历对象中可枚举的属性的值；
  // Array.prototype.reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
  const varsStr = Object.entries(vars).reduce((prev, next) => {
    const [key, value] = next;
    prev += `const ${key} = ${obj2json(value)};`;
    return prev;
  }, '');
  return new Function(
    `"use strict";${varsStr};${expression ? expression : ''};return (${returnCode});`
  )();
};

// test
const params = {
  name: 'name',
  email: 'exmail@qq.com',
  address: {
    city: 'beijing',
  }
}
const keypath = ['params', 'address', 'number']
const value = 1000
const newParams = safeEval('params', { params }, `${keypath.join('.')}=${value}`);
console.log(newParams.address.number === value) // true
safeEval('console.log(111)') // 111

// 参考链接
// 1、Eval 说明： 
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval
// 2、TS 的 eval：
// https://github.com/mqyqingfeng/Blog/issues/183
// 3、有限状态机的实现：
// https://juejin.cn/post/6844904202121003021