// Copyright 2021 zhaoguoxing
// 给定一个字符串 s 和一些 长度相同 的单词 words 。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑 words 中单词串联的顺序。

let s = "barfoothefoobarman", words = ["foo","bar"]
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let left=0,right=0;//定义左右指针，采用滑动窗口的方式
    let strLen=s.length
    let res=[]
    let wordsMap=new Map();
    let wordsLen=words.join('').length
    for(let word of words) {
        if(wordsMap.has(word)){
            wordsMap.set(word,wordsMap.get(word)+1)
        }else{
            wordsMap.set(word,1)
        }
    }

    // 对比截到的子串和words 是否相等；
    function toJudge(str){
        //生成子串的map 
        let unit=words[0]&&words[0].length;
        let strMap=new Map();
        for(let j=0;j<words.length;j++) {//遍历单词的数组
            let sonStr=str.slice(j*unit, (j+1)*unit)
            // console.log('sonStr',str,sonStr);
            if(strMap.has(sonStr)){
                strMap.set(sonStr,strMap.get(sonStr)+1)
            }else{
                strMap.set(sonStr,1)
            }
        }
        // 对比两个map是否一致
        let isEqual = true
        strMap.forEach((value,key)=>{
            if(wordsMap.get(key)!=value){
                isEqual=false;
            }
        })
        return isEqual
    }

    while(right<strLen){
        right++;
        if((right-left)==wordsLen){//滑动到了想要的等于字符串长度的窗口
            let str=s.slice(left,right)
            let isRight=toJudge(str)
            if(isRight){
                res.push(left)
            }
            left++;
        }
    }
     return res
};
console.log(findSubstring(s,words));