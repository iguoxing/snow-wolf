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
// https://leetcode-cn.com/problems/implement-queue-using-stacks/
// 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：
// 队列的特点是先进先出

var MyQueue = function() {
 this.arrA=[];//输入栈
 this.arrB=[];//输出栈
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.arrA.push(x)
    console.log(x);
    console.log(this.arrA);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {

};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {

};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {

};
MyQueue.prototype.push(1)

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */