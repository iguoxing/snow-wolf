// Copyright 2021 zhaoarden
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii/
// 这个问题和“最多能完成排序的块”相似，但给定数组中的元素可以重复，输入数组最大长度为2000，其中的元素最大为10**8。
// arr是一个可能包含重复元素的整数数组，我们将这个数组分割成几个“块”，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。
// 我们最多能将数组分成多少块？
/**
 * @param {number[]} arr
 * @return {number}
 */
// 拆分子数组，排序顺序一致，找到最小的子数组；找到子串的最大值，排序，如果子串最大值小于下一个那么前一个子串可以拆分;栈中存入各分组的最大值
// let arr = [5,4,3,2,1]
//  let arr = [2,1,3,4,4]
//  let arr = [1,1,0,0,1]
let arr =[1,0,1,3,2]
 var maxChunksToSorted = function(arr) {
     let tmpArr=[]
     for(let i =0; i < arr.length; i++){
         if(tmpArr.length==0){
             tmpArr.push(arr[i])
         }else{
             if(arr[i]>=tmpArr[tmpArr.length-1]){
                tmpArr.push(arr[i])
             }else{
                 while(tmpArr.length>1&&arr[i]<=tmpArr[tmpArr.length-1]){
                    tmpArr.pop()
                 }
             }
         }
     }
     console.log('tmpArr',tmpArr);
    // console.log(tmpArr.length);
     return tmpArr.length
};
maxChunksToSorted(arr)