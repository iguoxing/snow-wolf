/*
 * @Author: your name
 * @Date: 2021-11-16 12:58:00
 * @LastEditTime: 2021-11-16 13:30:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /雪狼班/1、算法/11.16.js
 */
// https://leetcode-cn.com/problems/add-to-array-form-of-integer/
// 输入：A = [1,2,0,0], K = 34
// 输出：[1,2,3,4]
// 解释：1200 + 34 = 1234
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
let A=[2,7,4]
let K = 881
var addToArrayForm = function(num, k) {
    let lenN=num.length;
    let lenK=(k+'').length;
    let len=lenN>lenK?lenN:lenK;
    let arr= (new String(k)).split('')
    let maxArr=lenN>lenK?num:arr;
    let minArr=lenN>lenK?arr:num;
    let tmpArr=new Array(len-minArr.length)
    minArr=tmpArr.concat(minArr)
    let res=new Array(len)
    let tmp=0
    for(let i=len-1; i>-1; i--){
        minArr[i]=!minArr[i]?0:minArr[i]
        res[i]=parseInt(maxArr[i])+parseInt(minArr[i])
        if(tmp>0){
            res[i]=res[i]+1
            tmp=0
        }
        if(res[i]>9){
            tmp=1;
            res[i]=res[i]%10
            // console.log('res[i]-'+res[i]);
        }
    }
    if(tmp>0){
        res=[1].concat(res)
    }
    // console.log(res);
    return res;
};
addToArrayForm(A,K)