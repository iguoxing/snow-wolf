/*
 * @Author: ArdenZhao
 * @Date: 2022-01-08 13:04:19
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-01-08 13:38:28
 * @FilePath: /snow-wolf/2、handWritten/15、第一个错误的版本.js
 * https://leetcode-cn.com/problems/first-bad-version/
 */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let left=0
      let right=n
      while(left<=right){
          //>>会超过时间限制，三个>>>就可以了
          let mid=((left+right)>>>1)
          if(isBadVersion(mid)){
              right=mid-1
          }else{
              left=mid+1
          }
      }
      return left
  };
};
