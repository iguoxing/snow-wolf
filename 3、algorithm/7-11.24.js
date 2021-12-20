// 旋转链表
let head = [1,2,3,4,5], k = 8
var rotateRight = function(head, k) {
    let len=head.length
    let gap=k%len //实际旋转链表的长度
    let left=new ListNode()
    let right=new ListNode()
    for (let i=0; i<len; i++) {
        if(i<gap-1){
            right.push(head[i])
        }else{
            left.push(head[i])
        }
    }
    console.log(left);
    console.log(right);
    // let left=head.slice(gap-1)
    // let right=head.slice(0,gap-1)
    return left.concat(right)
};
console.log(rotateRight(head, k));