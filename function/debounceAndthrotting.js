/**
 * 防抖触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间（取最后一次） 思路：每次触发前都取消之前的延时调用方法
 *
 */

function debounce(fn, delay) {
  let timer = null
  return function () {
    let self = this
    let args = Array.from(arguments)
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      fn.call(self, ...args)
    }, delay)
  }
}

// test

function testFn() {
  console.log('被点击了...', this)
}
// document.addEventListener('click', debounce(testFn, 9000))

/**
 * 节流：高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率 思路：每次触发事件时都判断当前是否有等待执行的延时函数，需要一个标记
 *
 */

function throtting(fn, delay) {
  let timer = null
  let isCancel = false
  return function () {
    if (isCancel) return
    isCancel = true
    let self = this
    let args = Array.prototype.slice.call(arguments)
    if (timer) clearTimeout(timer)
    timer = setTimeout(function () {
      fn.call(self, ...args)
      isCancel = false
    }, delay)
  }
}

//document.addEventListener('click', throtting(testFn, 1000))
