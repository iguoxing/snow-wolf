/*
 * @Author: ArdenZhao
 * @Date: 2022-01-06 21:04:49
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-01-06 21:13:31
 * @FilePath: /snow-wolf/2、handWritten/13、实现_.chunk().js
 * https://bigfrontend.dev/zh/problem/implement-lodash-chunk
 */
function chunk(items, size) {
  if(size<1) return [];
  let res=[]
  while(items.length>0){//不能使用len=items.length 因为splice是会改变数组长度的
    res.push(items.splice(0,size))
  }
  return res
}
console.log(chunk([1,2,3,4,5],2))
