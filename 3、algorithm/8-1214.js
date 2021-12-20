// Copyright 2021 zhaoarden
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let res=0
    for(let p of points) {
        const map=new Map();//按单个长度存成map结构
        for(let q of points) {
            let width=(p[0]-q[0])*(p[0]-q[0])+(p[1]-q[1])*(p[1]-q[1]) //勾股定理的斜边平方，和开根号的数值一样；
            if(map.has(width)){
                map.set(width,map.get(width)+1);
            }else{
                map.set(width,1)
            }
        }
        //如果当前值大于1，那么可以利用 n*(n-1)的方式，求得不同向量组之间的值；
        let arr=Array.from(map)
        for(let tmp of arr){
            if(tmp[1]>1){
                res+=tmp[1]*(tmp[1]-1)
            }
        }
    }
    return res
};
let points = [[0,0],[1,0],[2,0]]
numberOfBoomerangs(points)

