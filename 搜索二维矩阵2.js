/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 思路1: 右上角数字特殊性，O(m+n)
// [【C++】 LeetCode 240. 搜索二维矩阵 II - 沧海漂游的博客 - CSDN博客](https://blog.csdn.net/lv1224/article/details/80960083)
var searchMatrix = function(matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let r = 0, c = n - 1;
  while(r < m && c >= 0) {
    if (matrix[r][c] === target) {
      return true
    } else if (matrix[r][c] < target) {
      r++
    } else {
      c--
    }
  }
  return false
};

const matrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
console.log(searchMatrix(matrix, 18))
