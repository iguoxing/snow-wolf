/*
 * @Author: ArdenZhao
 * @Date: 2022-04-13 17:27:02
 * @LastEditTime: 2022-04-13 18:24:37
 * @FilePath: /snow-wolf/3、algorithm/7-sort/1-剑指 Offer 41. 数据流中的中位数.js
 * @Description:
 * https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/
 */
// 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。
// 如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

// 例如，
// [2, 3, 4] 的中位数是 3
// [2, 3] 的中位数是(2 + 3) / 2 = 2.5
// 设计一个支持以下两种操作的数据结构：

// void addNum(int num) - 从数据流中添加一个整数到数据结构中。
// double findMedian() - 返回目前所有元素的中位数。
// 示例 1：

// 输入：
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// 输出：[null, null, null, 1.50000, null, 2.00000]


// 参考链接
// https://wuuconix.link/2022/03/20/priorityQueue/
