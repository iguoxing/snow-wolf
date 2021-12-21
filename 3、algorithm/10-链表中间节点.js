// Copyright 2021 zhaoarden
// 
// https://leetcode-cn.com/problems/middle-of-the-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let arr=[]
    let node=new ListNode()
    while(head){
        arr.push({val:head.val,next:head.next})
        head=head.next
    }
    let len=arr.length
    if(len%2==1){
        let tmp=(len-1)/2
        node=arr[tmp]
    }else{
        let tmp=len/2
        node=arr[tmp]
    }
    return node
};