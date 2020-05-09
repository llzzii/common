/**
 * currying 方法实现
 * 什么是柯里化？将复杂问题分解为多个可编程的小问题，实现多参函数提供了一个递归降解的实现思路
 * 把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且
 * 返回结果的新函数
 */
function sum() {
  let allArgs = Array.prototype.slice.call(arguments)
  let add = function () {
    allArgs.push(...arguments) // 每次调用sun函数都收集参数
    return add
  }
  add.toString = function () {
    return allArgs.reduce((a, b) => a + b)
  }
  return add
}
let s = sum(1, 2, 3, 4)
console.log(s)
console.log(sum(1, 2, 3, 4)(5))
console.log(sum(1, 2, 3, 4)(5)(6))
