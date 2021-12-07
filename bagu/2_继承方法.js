// Copyright 2021 zhaoarden
// 继承方法
var o = {
    a: 2,
    m: function(){
      return this.a + 1;
    }
  };
  console.log(o.m()); // 3
  // 当调用 o.m 时，'this' 指向了 o.
  var p = Object.create(o);
  // p是一个继承自 o 的对象
  p.a = 4; // 创建 p 的自身属性 'a'
  console.log(p.m()); // 5
  // 调用 p.m 时，'this' 指向了 p
  // 又因为 p 继承了 o 的 m 函数
  // 所以，此时的 'this.a' 即 p.a，就是 p 的自身属性 'a' 
