/*
 * @Author: ArdenZhao
 * @Date: 2022-02-12 11:14:05
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-12 11:38:34
 * @FilePath: /snow-wolf/2、handWritten/18、snakeToCamel.js
 */
function snakeToCamel(str) {
  // return str.replace(/([^_])_([a-zA-Z])/g, (_, before, after) => {
    //[^_]  等价于  [a-zA-Z]
  return str.replace(/([[a-zA-Z])_([^_])/g, (_, before, after) => {
    return before + after.toUpperCase()
  })
}

console.log(snakeToCamel('snake_case'))
// 'snakeCase'
// console.log(snakeToCamel('is_flag_on'))

