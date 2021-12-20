/*
 * @Author: your name
 * @Date: 2021-11-16 13:33:04
 * @LastEditTime: 2021-11-16 14:13:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /雪狼班/2、手写/1、柯里化.js
 */
/*
 * @Author: your name
 * @Date: 2021-11-16 13:33:04
 * @LastEditTime: 2021-11-16 13:33:04
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /雪狼班/2、手写/1、柯里化.js
 */
// Copyright 2021 zhaoarden
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//1.手写函数柯里化
function curry(func,...args) {
    return function(){
        args=[...args,...arguments];///...是拓展运算符 ，可以展开对象和数组的内容
        if (args.length < func.length){//func.length 可以计算出参数长度
            return curry(func,...args) //递归
        }else{
            return func.apply(null,args)
        }
    }
}
function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);

// console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
// console.log(curriedSum(1)(2)(3)); // 6, full currying
