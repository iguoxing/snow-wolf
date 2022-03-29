/*
 * @Author: ArdenZhao
 * @Date: 2022-03-29 15:52:28
 * @LastEditTime: 2022-03-29 16:33:48
 * @FilePath: /snow-wolf/3、algorithm/5-LISTS/3-剑指 Offer 35. 复杂链表的复制.js
 * @Description: file information
 * https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/
 * 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，
 * 每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。
 * 
输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
1、先从头节点顺序遍历链表直至链尾，把每个遍历到的节点都存储到map中
2、再从头节点顺序遍历，更新map中对应节点的next指针和random指针
3、返回map中的头节点，也就是复制后的头节点

在实际代码中，我们需要特别判断给定节点为空节点的情况。
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return head
  const map = new Map()
  let node = head
  while (node) {
    map.set(node, new Node(node.val, null, null))
    node = node.next
  }
  // 再次赋值指针
  node = head
  while (node) {
    map.get(node).next = map.get(node.next) || null
    map.get(node).random = map.get(node.random)
    node = node.next
  }
  return map.get(head)
};





// var copyRandomList = function (head) {
//   // 非空判定
//   if (!head) return head;
//   let node = head;
//   // 把所有节点都存到map中
//   let map = new Map();
//   // 复制节点，将新节点放入map中
//   while (node) {
//     map.set(node, new Node(node.val));
//     node = node.next;
//   }
//   // 再将当前指针指向头节点
//   node = head;
//   // 从头节点再开始遍历，更改map中对应节点的next指针和random指针
//   while (node) {
//     map.get(node).next = map.get(node.next) || null;
//     map.get(node).random = map.get(node.random);
//     node = node.next;
//   }
//   // 返回map中的头节点，也就是复制后的头节点
//   return map.get(head);
// };