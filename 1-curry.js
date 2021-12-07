// Copyright 2021 zhaoarden
//1.手写函数柯里化
function curry(func,...args) {
    return function(){
        args=[...args,...arguments];///...是拓展运算符 ，可以展开对象和数组的内容
        if (args.length < func.length){//func.length 可以计算出参数长度
            return curry(func,...args) //递归
        }else{
            return func.apply(null,args)
        }
    }
}
function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);

// console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
// console.log(curriedSum(1)(2)(3)); // 6, full currying
