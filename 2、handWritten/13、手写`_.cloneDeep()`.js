/*
 * @Author: ArdenZhao
 * @Date: 2021-12-29 21:59:41
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-12-29 23:02:32
 * @FilePath: /snow-wolf/2、handWritten/13、手写`_.cloneDeep()`.js
 */
// https://bigfrontend.dev/zh/problem/create-cloneDeep
// Object.assign() 可以用来前拷贝，而_.cloneDeep 在深度拷贝中非常有用。
// 你能否实现自己的_.cloneDeep()?
// lodash的实现囊括了多种数据类型，简单起见，该题目中你只需要支持：
// 基础数据类型 及其wrapper object。
// 简单Object（仅需处理可枚举属性）
// 数组Array
// const myObj={
//   "name":"ArdenZhao",
//   "from":{
//     "province":"Shanxi",
//     "city":"Taiyuan"
//   },
//   "friends":[
//     "liujia","duoduo"
//   ]
// }
// const myObj={[Symbol()]:'bfe'}
const myObj=[1,[2,3],{a:{b:{c:3}, d: 4}}]
const cloneDeep=function(data){
  if(!data){return data}
  // console.log('[ data ] >', data)
  // console.log('[ Object.prototype.toString.call(data) ] >', Object.prototype.toString.call(data))
  let res=null
  if(Object.prototype.toString.call(data)==='[object Object]'){
    res={}
    // 静态方法 Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组。
    // console.log('[ Reflect.ownKeys(data) ] >',data, Reflect.ownKeys(data))
    Reflect.ownKeys(data).forEach(key=>{
      console.log('[ data[key]---- ] >', data[key])
      if(data[key] instanceof Object){
        res[key]=cloneDeep(data[key])
      }else{
        res[key]=data[key]
      }
    })
  }else if(Object.prototype.toString.call(data)==='[object Array]'){
    res=[]
    console.log('[ Reflect.ownKeys(data) ] >', Reflect.ownKeys(data))//[ '0', '1', '2', 'length' ]
    Reflect.ownKeys(data).forEach((key,index)=>{
      if(data[key] instanceof Object){
        res[key]=cloneDeep(data[key])
      }else{
        // console.log('[ data[index] ] >', data[index])
        if(data[index]){
          res[index]=data[index]
        }
      }
    })
  }else{
    res=data
  }
  console.log('[ Object.prototype.toString.call ] >', res)
  return res
}
console.log(cloneDeep(myObj));