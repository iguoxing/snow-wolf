/*
 * @Author: ArdenZhao
 * @Date: 2022-03-14 15:41:25
 * @LastEditTime: 2022-03-14 16:26:51
 * @FilePath: /snow-wolf/3、algorithm/Sort/1两个列表的最小索引总和.js
 * @Description: file information
 * https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/
 * 假设 Andy 和 Doris 想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。
你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设答案总是存在。
 */

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
// let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"], list2 = ["KFC", "Shogun", "Burger King"]
// let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// let list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
let list2 = ["KFC", "Burger King", "Tapioca Express", "Shogun"]
var findRestaurant = function (list1, list2) {
  let res = []
  let min = -1
  let resMap = new Map()
  let map = new Map()
  list1.forEach((item, index) => {
    map.set(item, index)
  })
  list2.forEach((item, index) => {
    if (map.has(item)) {
      let tmp = map.get(item) + index
      resMap.set(item, tmp)
    } else {
      map.set(item, index)
    }
  })
  console.log('[ resMap ] >', resMap)
  resMap.forEach((value, key) => {
    if (min == -1) {
      min = value
    }
    if (min > value) {
      min = value
    }
  })
  resMap.forEach((value, key) => {
    if (min == value) {
      res.push(key)
    }
  })
  return res
}
console.log('[ findRestaurant(list1,list2) ] >', findRestaurant(list1, list2))

// 我的题解
// https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/solution/yong-kong-jian-huan-liao-shi-jian-by-guo-zfdo/

