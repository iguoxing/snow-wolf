// 未完待续
// bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
// 可以修改函数this指向。
// bind返回一个绑定了this的新函数boundFcuntion，例子中我们用bound表示。
// 支持函数柯里化，我们在返回bound函数时已传递了部分参数2，在调用时bound补全了剩余参数。
// boundFunction的this无法再被修改，使用call、apply也不行。
// 绑定函数也可以使用 new 运算符构造，它会表现为目标函数已经被构建完毕了似的。提供的 this 值会被忽略，但前置参数仍会提供给模拟函数。
Function.prototype.bind_ = function (obj) {
    // console.log('obj',obj);
    // console.log('arguments',arguments);
    //第0位是this，所以得从第一位开始裁剪
    var args = Array.prototype.slice.call(arguments, 1);
    // console.log('args',args);
    var fn = this;
    return function () {
        //二次调用我们也抓取arguments对象
        // console.log('arguments2',arguments);
        var params = Array.prototype.slice.call(arguments);
        // console.log('params',params);
        // console.log('args.concat(params)',args.concat(params));
        //注意concat的顺序
        fn.apply(obj, args.concat(params));
    };
};

var obj = {
    z: 1
};

function fn(x, y) {
    console.log(x + y + this.z);
};

var bound = fn.bind_(obj, 1);
bound(3); //5



// Demo1
// var obj = {
//     z: 1
// };
// var obj1 = {
//     z: 2
// };

// function fn(x, y) {
//     console.log(x + y + this.z);
// };
// // call与apply
// // fn.call(obj, 2, 3); //6
// // fn.apply(obj, [2, 3]); //6

// var bound = fn.bind(obj, 2);
// bound(6); //9
// //尝试修改bind返回函数的this
// bound.call(obj1, 1); //4
// 参考链接
// https://www.cnblogs.com/echolun/p/12178655.html