// Copyright 2021 zhaoarden
// https://bigfrontend.dev/zh/problem/two-way-binding

// 来简单实现下双向绑定。
// 请实现函数model(state, element)，使得state.value和HTMLInputElement element联动。
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// GLOBAL.document = new JSDOM(html).window.document;  //node 环境会报错，找不到GLOBAL
// TODO 在浏览器环境中执行
const model=function(state,element) {
    //1、State中的值改变，修改input中的值
    // 首次赋值
    element.value = state.value
    //持续拦截state
    Object.defineProperty(state,'value',{
        get(){
            return element.value //这里返回的是element的值，如果写成State会爆栈【不明白】
        },//中间要有逗号，否则报错
        set(val){
            element.value = val//是获取到val 赋值给input
        }
    })
    //input中的值改变，修改State中的数据
    element.addEventListener('change',function(e){ //写的时候使用element来监听
        state.value =element.value
    })
}
const input = document.createElement('input')
const state = { value: 'BFE' }
model(state, input)

console.log(input.value) // 'BFE'
state.value = 'dev'
console.log(input.value) // 'dev'
input.value = 'BFE.dev'
input.dispatchEvent(new Event('change'))//分发change事件，以便监听到
console.log(state.value) // 'BFE.dev'