/*
 * @Author: ArdenZhao
 * @Date: 2022-03-28 18:30:11
 * @LastEditTime: 2022-03-29 11:19:12
 * @FilePath: /snow-wolf/3、algorithm/4-stack/1-剑指 Offer 09. 用两个栈实现队列.js
 * @Description: file information
 * https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 * 示例 1：

输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
 */

// 我的卡点在于是函数作用域内的变量是用this
var CQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  if (this.stack2.length > 0) {
    return this.stack2.pop();
  } else {
    return -1;
  }
};

var obj = new CQueue()
console.log(obj)
obj.appendTail(1)
console.log(obj)
var param_2 = obj.deleteHead()
console.log(param_2)