/*
 * @Author: ArdenZhao
 * @Date: 2021-12-29 23:01:23
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-12-29 23:08:08
 * @FilePath: /snow-wolf/2、handWritten/14、实现Object.assign().js
 */
https://bigfrontend.dev/zh/problem/implement-object-assign
/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
const myObj= []
function objectAssign(target, ...sources) {
  // your code here
  Reflect.ownKeys(sources).forEach(key => {
    target[key]=sources[key]
  })
  return target
}
console.log(objectAssign({},myObj));
