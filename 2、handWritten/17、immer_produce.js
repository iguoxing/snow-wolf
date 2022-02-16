/*
 * @Author: ArdenZhao
 * @Date: 2022-02-16 11:43:44
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-16 11:51:20
 * @FilePath: /snow-wolf/2、handWritten/17、immer_produce.js
 */

/**
 * @param {any} base
 * @param {(draft: any) => any} recipe
 * @returns {any}
 */
function produce(base, recipe) {
  // your code here
  let produced = JSON.parse(JSON.stringify(base));
  recipe(produced);
  if (compare(base, produced)) {
    produced = base;
  }
  return produced;
}

const compare = (base, produced) => {
  if (typeof base !== typeof produced) {
    return false;
  }
  if (typeof base !== 'object') {
    return base == produced;
  }
  let equal = true;
  for (const key in produced) {
    if (key in base) {
      if (compare(base[key], produced[key])) {
        produced[key] = base[key];
      } else {
        equal = false;
      }
    } else {
      equal = false;
    }
  }
  for (const key in base) {
    if (!(key in produced)) {
      equal = false;
    }
  }
  return equal;
}

// 参考资料
// immer 用法 Immer（德语为：always）是一个小型包，可让您以更方便的方式使用不可变状态。
// https://immerjs.github.io/immer/

// // 基础对象
// const baseState = [
//   {
//     title: "Learn TypeScript",
//     done: true
//   },
//   {
//     title: "Try Immer",
//     done: false
//   }
// ]

// 不使用Immer 
// const nextState = baseState.slice() // shallow clone the array
// nextState[1] = {
//   // replace element 1...
//   ...nextState[1], // with a shallow clone of element 1
//   done: true // ...combined with the desired update
// }
// // since nextState was freshly cloned, using push is safe here,
// // but doing the same thing at any arbitrary time in the future would
// // violate the immutability principles and introduce a bug!
// nextState.push({ title: "Tweet about it" })

// // 使用Immer
// import produce from "immer"

// const nextState = produce(baseState, draft => {
//   draft[1].done = true
//   draft.push({ title: "Tweet about it" })
// })
