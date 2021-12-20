// Copyright 2021 zhaoarden
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max=0
    let arr=[]
    for(let i=0; i<s.length; i++){
        let index=arr.indexOf(s[i])
        if(index===-1){
            arr.push(s[i])//如果找不到就存入数组中
        }else{
            arr.splice(0,index+1)//如果找到，就把之前的有重复的数据删掉
            arr.push(s[i])//并且把当前的数据存进去
        }
        console.log('index',arr,index);
        max=Math.max(max,arr.length)
    }
    return max
};
// let s = "dvdf"; 
let s = "abacann";
console.log(lengthOfLongestSubstring(s));