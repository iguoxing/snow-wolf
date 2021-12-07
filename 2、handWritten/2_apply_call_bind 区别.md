<!--
 Copyright 2021 zhaoarden
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

apply、call、bind用法
apply:
fn.apply(thisObj,数组参数）
定义：应用某一个对象的一个方法，用另一个对象替换当前对象
说明：如果参数不是数组类型的，则会报一个TypeError错误。

call:
fn.call(thisObj, arg1, arg2, argN)
apply与call的唯一区别就是接收参数的格式不同。

bind:
fn.bind(thisObj, arg1, arg2, argN)
bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。


参考文档
含各自的实现
https://segmentfault.com/a/1190000020013532


