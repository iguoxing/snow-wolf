/*
 * @Author: ArdenZhao
 * @Date: 2021-12-26 14:25:15
 * @LastEditors: Arden
 * @LastEditTime: 2021-12-27 09:26:48
 * @FilePath: /snow-wolf/3、algorithm/14-算法|找到小镇的法官.js
 * https://leetcode-cn.com/problems/find-the-town-judge/
 */
// 小镇里有 n 个人，按从 1 到 n 的顺序编号。传言称，这些人中有一个暗地里是小镇法官。
// 如果小镇法官真的存在，那么：
// 小镇法官不会信任任何人。
// 每个人（除了小镇法官）都信任这位小镇法官。
// 只有一个人同时满足属性 1 和属性 2 。
// 给你一个数组 trust ，其中 trust[i] = [ai, bi] 表示编号为 ai 的人信任编号为 bi 的人。
// 如果小镇法官存在并且可以确定他的身份，请返回该法官的编号；否则，返回 -1 。
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
    let arr =new Array(n).fill(0)
    // for(let i=0; i<trust.length; i++) {
    //     let item=trust[i]
    //     arr[item[1]-1]+=1
    // }
    // console.log('Number.MIN_SAFE_INTEGER',Number.MIN_SAFE_INTEGER);
    for (let [a, b] of trust) {
        // console.log('b - 1',b - 1);//b 是[1]
        // console.log('a - 1',a - 1);//a 是[0]
        arr[b - 1]++; //没想明白，再看看
        arr[a - 1] = Number.MIN_SAFE_INTEGER;
    }
    console.log(arr);
    for (let i = 0; i < n; i++) {
        if (arr[i] == n - 1) {
            return i + 1;
        }
    }
    return -1
};
let n = 3
let trust = [[1,3],[2,3],[3,1]]
console.log('findJudge',findJudge(n,trust));

