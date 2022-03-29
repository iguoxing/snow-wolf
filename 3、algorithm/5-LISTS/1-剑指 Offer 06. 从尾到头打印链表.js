/*
 * @Author: ArdenZhao
 * @Date: 2022-03-29 13:50:48
 * @LastEditTime: 2022-03-29 14:03:40
 * @FilePath: /snow-wolf/3、algorithm/5-LISTS/1-剑指 Offer 06. 从尾到头打印链表.js
 * @Description: file information
 * https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * 输入：head = [1,3,2]
输出：[2,3,1]
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
 * @return {number[]}
 */
var reversePrint = function (head) {
  let res = []
  while (head) {
    if (head.next != null) {
      res.unshift(head.val)
      head = head.next
    } else {
      res.unshift(head.val)
      head = 0
    }
  }
  return res
};

// 有篇题解不错，备忘下
// https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/solution/jian-zhi-offer-shu-zhong-guan-fang-ti-ji-ec4u/