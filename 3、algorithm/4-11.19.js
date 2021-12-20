/*
 * @Author: your name
 * @Date: 2021-11-19 09:35:41
 * @LastEditTime: 2021-11-19 12:06:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /snow-wolf/1、Algorithm/4-11.19.js
 */
// https://leetcode-cn.com/problems/decode-string/
// 输入：s = "3[a]2[bc]"
// 输出："aaabcbc"
// "zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef"
let s = "3[z]2[2[y]pq4[2[jk]e1[f]]]ef"
var decodeString = function(s) {
    let stack = [];//栈存储
    let tmpStack = [];//临时存重复的字母
    let tmpNum = [];//临时存重复的次数
    let tmp={
        num:0,
        str:''
    }
    let testNum=/^[0-9]*$/
    let testStr=/^[A-Za-z]*$/
    for (let i = 0; i <s.length; i++) {
        //遇到 ] 开始
        if(s[i]==']'){
            let hasLeft=false;//默认开始是字母，在[右面
            for(let j = stack.length-1; j >-1; j--) {
                //遇到 [ 结束并开始计算
                if(!hasLeft){
                    // 1、先处理字母 的 开始
                    if(stack[j]&&stack[j]!='['&& testStr.test(stack[j])){
                        tmpStack.unshift(stack.pop())
                    }
                    // 2、再判断[
                    if(stack[j]&& stack[j]=='['){
                        stack.pop()
                        hasLeft=true;
                    }
                }else{
                    // 3、再判断数字
                    if(stack[j]&&testNum.test(stack[j])){
                        tmpNum.unshift(stack.pop())
                    }else{
                        hasLeft=false;
                        break
                    }
                }
            }
            // 如果有子数据就处理
            if(tmpStack.length>0){
                tmp.str=tmpStack.join('')
                tmp.num=Number(tmpNum.join(''))
                stack.push(tmp.str.repeat(tmp.num))
                tmpStack=[]
                tmpNum=[]
                tmp.str=''
                tmp.num=0
            }
        }else{
            stack.push(s[i])
        }
    }
    // console.log('final',stack.join(''));
    return stack.join('')
};
decodeString(s)
