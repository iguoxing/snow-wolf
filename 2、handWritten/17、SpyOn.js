/*
 * @Author: ArdenZhao
 * @Date: 2022-02-09 23:08:19
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-09 23:23:28
 * @FilePath: /snow-wolf/2、handWritten/17、SpyOn.js
 * https://bigfrontend.dev/zh/problem/implement-spyOn/discuss
 *  jest.spyOn()
 */
/**
 * @param {object} obj
 * @param {string} methodName
 */
 function spyOn(obj, methodName) {
  const method = obj[methodName];
  console.log('[ method ] >', method)
  if (typeof method !== 'function') {
    throw new Error(`${methodName} is not function`);
  }
  const calls = [];
  obj[methodName] = function(...args) {
    calls.push(args); //存储所有调用的参数
    method.apply(this, args); //调用执行方法
  };
  console.log('[ calls ] >', calls)
  return { calls };
}
const obj = {
  data: 1, 
  increment(num) {
     this.data += num
  }
}

const spy = spyOn(obj, 'increment')
console.log('[ spy 11] >', spy)
obj.increment(1)
// console.log('[ obj 11] >', obj)
console.log(obj.data) // 2
console.log('[ spy 22] >', spy)
obj.increment(2)
// console.log('[ obj 22] >', obj)
console.log(obj.data) // 4
console.log('[ spy 33] >', spy)
console.log(spy.calls)
// [ [1], [2] ]