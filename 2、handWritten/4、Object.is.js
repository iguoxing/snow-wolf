/*
 * @Author: your name
 * @Date: 2021-11-19 12:51:32
 * @LastEditTime: 2021-11-19 13:22:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /snow-wolf/2、Handwritten/4、Object.is.js
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

// Object.is() 方法判断两个值是否为同一个值(不会强制转换两边的值)。
// console.log(Object.is(+0,+0));//true
// console.log(Object.is(+0,0));//true
// console.log(Object.is(+0,-0));//false
// console.log(Object.is(0,-0));//false
// console.log(Object.is(+0,0));//true +0和0相等
// console.log(+0===-0);//true
// console.log(+0===0);//true
// console.log(-0===0);//true
// console.log(typeof(-0));//true
// console.log(Object.is(NaN,NaN));//true
// console.log(NaN===NaN);//false=-0);//false
// console.log(1/0);///Infinite
// console.log(1/-0);//-Infinite
// function isNegativeZero(num) {
//     // 1与+0\0的商为Infinite(极大值)，1与-0的商为-Infinite，除号的运算级别比小于高
//     return num === 0 && (1 / num < 0); 
// }
// console.log(isNegativeZero(-0));

/*
等价于用===来实现Object.is(),需要实现两点
1、(+0\0)和-0判断为false
2、判断两个NaN是相等
*/
function is(a,b){
    // 1与+0\0的商为Infinite(极大值)，1与-0的商为-Infinite，除号的运算级别比小于高
    if(a===0&&b===0){
        return (1 / a) === (1 / b);
    }
    //NaN是JS中唯一不等于自身的值
    if(a!==a&&b!==b){
        return true
    }
    return a===b
}
// console.log(is(+0,-0));//false
// console.log(is(+0,0));//true
// console.log(is(NaN,NaN));//true

