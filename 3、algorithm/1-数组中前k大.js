/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let len=nums.length
    if(len<=1) return nums;
    let map=new Map();
    for(var i=0; i<len; i++){
        let tmp=nums[i]
        if(map.has(tmp)){
            map.set(tmp,map.get(tmp)+1)
        }else{
            map.set(tmp,1)
        }
    }
    let arr=Array.from(map)
    let sortArr=arr.sort((a, b) =>b[1]-a[1])
    let res=[]
    for(let j=0;j<k;j++){
        res.push(sortArr[j][0])
    }
    return res
};
let nums = [1,3,3,1,5,2,3], k = 2
console.log(topKFrequent(nums,k));