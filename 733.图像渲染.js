/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
// 题目描述不好理解，中英切换对照着看，题目应该叫画图染色
// 从起始像素向上下左右扩散，只要相邻的点存在并和起始点颜色相同，就染成新的颜色，并继续扩散。
// row col 起点是 0，就是 index，方便访问 array

// 1. BFS 队列
var floodFill0 = function(image, sr, sc, newColor) {
  const m = image.length
  const n = image[0].length
  const oldColor = image[sr][sc]
  if (oldColor === newColor) return image

  const quene = [[sr, sc]]

  // 不写这行会超时？
  // [[0,0,0],[0,2,2]] 1 1 2
  
  while (quene.length) {
    const [x, y] = quene.shift()

    image[x][y] = newColor

    if (x - 1 >= 0 && image[x - 1][y] === oldColor) {
      quene.push([x - 1, y])
    }
    if (y - 1 >= 0 && image[x][y - 1] === oldColor) {
      quene.push([x, y - 1])
    }
    // 不能等于 m/n，也就是最大值是 length - 1
    if (x + 1 < m && image[x + 1][y] === oldColor) {
      quene.push([x + 1, y])
    }
    if (y + 1 < n && image[x][y + 1] === oldColor) {
      quene.push([x, y + 1])
    }
  }
  return image
};

// 2. DFS 递归
var floodFill = function(image, sr, sc, newColor) {
  const m = image.length
  const n = image[0].length
  const oldColor = image[sr][sc]
  if (oldColor === newColor) return image

  const fill = (x, y) => {
    if (x < 0 || y < 0 || x >= m || y >= n || image[x][y] !== oldColor) return

    image[x][y] = newColor
    fill(x, y - 1)
    fill(x - 1, y)
    fill(x, y+1)
    fill(x + 1, y)
  }

  fill(sr, sc)

  return image
}
// @lc code=end

