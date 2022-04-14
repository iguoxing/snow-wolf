/*
 * @Author: ArdenZhao
 * @Date: 2022-04-14 17:17:39
 * @LastEditTime: 2022-04-14 18:05:31
 * @FilePath: /snow-wolf/3、algorithm/8-BinaryTree/1-剑指 Offer 55 - I. 二叉树的深度.js
 * @Description: file information
 * 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

例如：

给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。

链接：https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 1、深度优先 DFC(Deep First Search）
  // if (root == null) {
  //   return 0
  // }
  // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
  // 2、广度优先BFC（Breath First Search）
  if (root == null) return 0
  let queue = [root]
  let depth = 0
  while (queue.length > 0) {
    let len = queue.length // 这样做是要分层，每层的长度都不一样
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    depth++
  }
  return depth
};

// https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/solution/die-dai-he-di-gui-liang-chong-si-lu-zui-emd85/