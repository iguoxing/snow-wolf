/*
 * @Author: your name
 * @Date: 2021-11-17 22:15:56
 * @LastEditTime: 2021-11-17 22:51:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /snow-wolf/2、Handwritten/2、symbol polyfill.js
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

// 手写|实现symbol polyfill
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol
// https://juejin.cn/post/6844903619544760328

// 第一版
(function() {
    var root = this;
    var SymbolPolyfill = function Symbol(description) {
        // 实现：Symbol 函数前不能使用 new 命令
        if (this instanceof SymbolPolyfill) throw new TypeError('Symbol is not a constructor');
        // 实现：如果 Symbol 的参数是一个对象，就会调用该对象的 toString 方法，将其转为字符串，然后才生成一个 Symbol 值。
        var descString = description === undefined ? undefined : String(description)
        var symbol = Object.create(null)
        Object.defineProperties(symbol, {
            '__Description__': {
                value: descString,
                writable: false,
                enumerable: false,
                configurable: false
            }
        });
        // 调用该方法，返回的是一个新对象，两个对象之间，只要引用不同，就不会相同
        return symbol;
    }
    root.SymbolPolyfill = SymbolPolyfill;
})();

// const symbol0 = new SymbolPolyfill(42);
const symbol1 = SymbolPolyfill(42);
const symbol2 = SymbolPolyfill(42);
console.log(symbol1==symbol2);