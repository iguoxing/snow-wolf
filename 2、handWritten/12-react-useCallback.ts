// Copyright 2021 zhaoguoxing
// import React, { useState, memo } from 'react';
// import ReactDOM from 'react-dom';
let lastCallback
// eslint-disable-next-line
let lastCallbackDependencies
function useCallback(callback, dependencies) {
  if (lastCallbackDependencies) {
    let changed = !dependencies.every((item, index) => {
      return item === lastCallbackDependencies[index]
    })
    if (changed) {
      lastCallback = callback
      lastCallbackDependencies = dependencies
    }
  } else { // 没有传入依赖项

    lastCallback = callback
    lastCallbackDependencies = dependencies
  }
  return lastCallback
}
// function Child({ data }) {
//   console.log("天啊，我怎么被渲染啦，我并不希望啊")
//   return (
//     <div>child < /div>
//   )
// }
// eslint-disable-next-line
// Child = memo(Child)
// function App() {
//   const [count, setCount] = useState(0);
//   // eslint-disable-next-line
//   const addClick = useCallback(() => { console.log("addClick") }, [])
//   return (
//     <div>

//     <Child data= { 123} onClick = { addClick } > </Child>
//       < button onClick = {() => { setCount(count + 1) }
// }>
//   增加
//   < /button>
//   < /div>
//     );
// }
// function render() {
//   ReactDOM.render(
//     <App />,
//         document.getElementById('root')
//   );
// }
// render()

// 源码
// export function useCallback<T>(
//   callback: T,
//   inputs: Array<mixed> | void | null,
// ): T {
//   currentlyRenderingFiber = resolveCurrentlyRenderingFiber();
//   workInProgressHook = createWorkInProgressHook();
//   // 以上两句几乎在hooks中都用到了
//   const nextInputs =
//     inputs !== undefined && inputs !== null ? inputs : [callback];  // 新的依赖项，如果为undefined或者null的话， 则用callback，否则用依赖项
//   const prevState = workInProgressHook.memoizedState;
//   if (prevState !== null) {
//     const prevInputs = prevState[1];  // 依赖项
//     if (areHookInputsEqual(nextInputs, prevInputs)) {  //对比依赖项，相同从memoizedState获取
//       return prevState[0];  // 返回上一个memoizedState的callback
//     }
//   }
//   workInProgressHook.memoizedState = [callback, nextInputs]; // 首次或非首次不相同存入memoizedState
//   return callback;  // 返回callback
// }
// 参考链接
// https://cloud.tencent.com/developer/article/1784501
// https://juejin.cn/post/6875881579462279175