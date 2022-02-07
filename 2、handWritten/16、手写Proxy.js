/*
 * @Author: ArdenZhao
 * @Date: 2022-02-07 18:49:23
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-07 18:54:21
 * @FilePath: /snow-wolf/2、handWritten/16、手写Proxy.js
 * https://github.com/GoogleChrome/proxy-polyfill
 */
function MyProxy(target, handler) {
  var _target = deepClone(target)
  Object.keys(_target).forEach((key) => {
    Object.defineProperty(_target, key, {
      get() {
        return handler.getVal && handler.getVal(target, key)
      },
      set(newVal) {
        handler.set && handler.set(target, key, newVal)
      }
    })
  })
  return _target
  // 深克隆
  function deepClone(obj, newObj) {
    var newObj = newObj || {},
      str = Object.prototype.toString
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof (obj[key]) === 'object' && obj[key] !== null) {
          newObj[key] = str.call(obj[key]) === '[object Array]' ? [] : {},
            deepClone(obj[key], newObj[key])
        } else {
          newObj[key] = obj[key]
        }

      }
    }
    return newObj
  }
}
let target = {
  a: 1,
  b: 2
}
let proxy = new MyProxy(target, {
  getVal(target, prop) {
    return target[prop]
  },
  set(target, prop, value) {
    target[prop] = value
  }
})
console.log(proxy.a);  // 1
proxy.b = 3
console.log(proxy.b); //3
console.log(target)

// 参考链接
// https://blog.csdn.net/shabbyaxe/article/details/111876095