/**
 * reduce 的实现
 * 1、参数 ： 一个回调函数 一个初始化参数
 * 2、回调函数参数有4个值（res:代表累加值，cur 目前值， index 第几个，arr 调用reduce 的数组
 * 3、整体返回res累加值
 */

Array.prototype.myReduce = function (cb, initValue) {
  if (!Array.isArray(this)) {
    throw new TypeError('this not array')
  }
  if (this.length === 0 && arguments.length < 2) {
    throw new TypeError('Reduce of empty array with no initial value')
  }
  let arr = this
  let res = null
  if (arguments.length > 1) {
    res = initValue
  } else {
    res = arr.splice(0, 1)[0]
  }
  arr.forEach((item, i) => {
    res = cb(res, item, i, arr)
  })
  return res
}

// test
let arr = [1, 2, 3, 4]
let fn = function (res, cur) {
  return res * cur
}
let result = arr.myReduce(fn)

console.log(result)
