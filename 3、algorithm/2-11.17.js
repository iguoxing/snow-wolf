/*
 * @Author: your name
 * @Date: 2021-11-16 12:58:00
 * @LastEditTime: 2021-11-17 22:06:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /雪狼班/1、算法/11.16.js
 */
// https://leetcode-cn.com/problems/shortest-distance-to-a-character/
// 输入：s = "aaab", c = "b"
// 输出：[3,2,1,0]
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
let s = "abaa"
let c = "b"
var shortestToChar = function(s, c) {
    console.log(s);
    console.log(s.split(c));
    let arrs=s.split(c)
    let res=[]
    for(let i=0; i<arrs.length; i++) {
        let len=arrs[i].length
        for(let j=0; j<arrs[i].length; j++) {
            if(i==0){
                res.push(arrs[i].length-j)
            }else{
                if(i+1<arrs.length){
                    res.push((1+j>len-j)?(len-j):(1+j))
                }else{
                    res.push(j+1)
                }
            }
        }
        if(i+1<arrs.length){
            res.push(0)
        }
    }
    console.log(res);
    return res
};
shortestToChar(s,c)