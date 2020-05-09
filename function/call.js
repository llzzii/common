/*
 * call 的实现与apply 的实现
 * 1、 myCall 应该挂载Function.prototype 上
 * 2、fn 的this 指向为obj
 * 3、myCall的args透传给fn
 *
 */

Function.prototype.myCall = function (target, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('not this function')
  }
  target = target || window
  target.fn = this // 隐式绑定 改变构造函数的调用者间接的改变this指向
  let result = target.fn(...args)
  return result
}

Function.prototype.myApply = function (target) {
  if (typeof this !== 'function') {
    throw new TypeError('not this function')
  }
  let agrs = arguments[1]
  if (!Array.isArray(agrs)) {
    throw new Error('arguments is not Array')
  }
  target = target || window
  target.fn = this // 隐式绑定 改变构造函数的调用者间接的改变this指向
  let result = target.fn(agrs)
  return result
}

// test
var obj = { name: '123' }
function foo() {
  console.log(this.name, Array.from(arguments))
  console.log(this)
}

var s = foo.myCall(obj, 111, 222)
foo.myApply(obj, [1, 2, 3, 4], 5)
