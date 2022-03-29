/*
 * @Author: ArdenZhao
 * @Date: 2022-03-29 15:17:09
 * @LastEditTime: 2022-03-29 15:49:12
 * @FilePath: /snow-wolf/3、algorithm/5-LISTS/2剑指 Offer 24. 反转链表.js
 * @Description: file information
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let preNode = null
  let curNode = head
  while (curNode) { //遍历所有的节点
    const nextNode = curNode.next //存储下一个节点nextNode
    curNode.next = preNode // 就是把当前节点赋值为上一个节点
    preNode = curNode // 当前节点，赋值给上一个节点
    curNode = nextNode // 最后一个nextNode为null，就是结束循环
  }
  return preNode
};
// 时间复杂度：O(n)，其中 nn 是链表的长度。需要遍历链表一次。
// 空间复杂度：O(1)。（空间复杂度主要取决于调用的栈空间）

