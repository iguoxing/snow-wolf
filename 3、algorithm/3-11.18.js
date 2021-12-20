/*
 * @Author: your name
 * @Date: 2021-11-18 12:57:14
 * @LastEditTime: 2021-11-18 13:22:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /snow-wolf/1、Algorithm/3-11.18.js
 */
// 1381. 设计一个支持增量操作的栈
// https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/

// 请你设计一个支持下述操作的栈。

// 实现自定义栈类 CustomStack ：

// CustomStack(int maxSize)：用 maxSize 初始化对象，maxSize 是栈中最多能容纳的元素数量，栈在增长到 maxSize 之后则不支持 push 操作。
// void push(int x)：如果栈还未增长到 maxSize ，就将 x 添加到栈顶。
// int pop()：弹出栈顶元素，并返回栈顶的值，或栈为空时返回 -1 。
// void inc(int k, int val)：栈底的 k 个元素的值都增加 val 。如果栈中元素总数小于 k ，则栈中的所有元素都增加 val 。

/**
 * @param {number} maxSize
 */
 var CustomStack = function(maxSize) {
    this.maxSize = maxSize;
    this.stack = new Array();
};

/** 
* @param {number} x
* @return {void}
*/
CustomStack.prototype.push = function(x) {
   if(this.stack.length<=this.maxSize){
       this.stack.push(x)
   }
};

/**
* @return {number}
*/
CustomStack.prototype.pop = function() {
   return this.stack.pop()
};

/** 
* @param {number} k 
* @param {number} val
* @return {void}
*/
CustomStack.prototype.increment = function(k, val) {
   let len=this.maxSize<k?this.maxSize:k
   for(let i = 0; i < len; i++) {
       this.stack[i]+=val
   }
};

var obj = new CustomStack(3)
obj.push(1)
console.log(this.obj);
console.log(this.stack);

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
