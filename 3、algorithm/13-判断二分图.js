/*
 * @Author: ArdenZhao
 * @Date: 2021-12-28 08:13:38
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-12-28 09:02:05
 * @FilePath: /snow-wolf/3、algorithm/13-判断二分图.js
 * https://leetcode-cn.com/problems/is-graph-bipartite/
 */
// 存在一个 无向图 ，图中有 n 个节点。其中每个节点都有一个介于 0 到 n - 1 之间的唯一编号。给你一个二维数组 graph ，其中 graph[u] 是一个节点数组，由节点 u 的邻接节点组成。形式上，对于 graph[u] 中的每个 v ，都存在一条位于节点 u 和节点 v 之间的无向边。该无向图同时具有以下属性：
// 不存在自环（graph[u] 不包含 u）。
// 不存在平行边（graph[u] 不包含重复值）。
// 如果 v 在 graph[u] 内，那么 u 也应该在 graph[v] 内（该图是无向图）
// 这个图可能不是连通图，也就是说两个节点 u 和 v 之间可能不存在一条连通彼此的路径。
// 二分图 定义：如果能将一个图的节点集合分割成两个独立的子集 A 和 B ，并使图中的每一条边的两个节点一个来自 A 集合，一个来自 B 集合，就将这个图称为 二分图 。

// 如果图是二分图，返回 true ；否则，返回 false 。
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const colorArr= new Array(graph.length).fill(0)//创建一个图对应的数组（之后把数组中的元素上色） 0是未上色，1是蓝色，-1是黄色
  for(let i=0;i<graph.length; i++){//遍历每个图的顶点
    if(colorArr[i]){//拿到当前顶点,如已染过色，就跳过
      continue;
    }
    const pointArr = [i]//初始化包含顶点的坐标
    colorArr[i]=1 //顶点坐标染色为蓝色
    while(pointArr.length){//遍历顶点的相邻节点并染色,这里一定是队列的长度
      const point=pointArr.shift()//获得首个顶点
      // console.log('point',point,colorArr[point],graph[point]);
      const pointColor=colorArr[point] //获得顶点颜色
      const nextColor=-pointColor //获得相邻节点颜色
      for(let j=0;j<graph[point].length;j++){//遍历相邻节点 i就是顶点坐标
        const next=graph[point][j]//获得相邻节点
        if(colorArr[next]==0){//相邻节点没被上色
          colorArr[next]=nextColor//把相邻节点该有的颜色上上
          pointArr.push(next)
          // console.log('pointArr---',pointArr);
        }else{
          if(colorArr[next]!=nextColor){//上过色，但不为该有的颜色
            return false;
          }
        }
      }
    }

  }
  return true;
};
let graph = [[1,3],[0,2],[1,3],[0,2]]
console.log('isBipartite',isBipartite(graph));

// 参考链接
// https://leetcode-cn.com/problems/is-graph-bipartite/solution/shou-hua-tu-jie-bfs-si-lu-by-hyj8/
