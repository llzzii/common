/**
 * bind 方法实现
 * 1、与call与apply的区别：fn.bind(obj) 不会立即执行fn函数，而call 、 apply 会立即执行
 * 2、bind返回的新函数可以普通调用也可以构造函数方式调用，当为构造函数时，this是指向实例的
 * 3、bind（） 方法的参数具有一个特性，就是函数柯里化，简单的说就是保留一个参数的位置，再第二次传参时自动把参数存入到这个位置中
 *
 */

Function.prototype.myBind = function (thisArg) {
  if (typeof this !== 'function') {
    throw new TypeError('bind must be called on a function')
  }
  const args = Array.prototype.slice.call(arguments, 1) // 拿到参数，为了传给调用者
  const self = this
  let nop = function () {} // 构建一个干净的函数，用于保存原函数的原型
  let bound = function () {
    // 绑定的函数
    // this instanceof nop, 判断是否使用 new 来调用 bound
    // 如果是 new 来调用的话，this的指向就是其实例，
    // 如果不是 new 调用的话，就改变 this 指向到指定的对象 o
    return self.apply(this instanceof nop ? this : thisArg, args.concat(Array.prototype.slice.call(arguments)))
  }
  // 箭头函数没有 prototype，箭头函数this永远指向它所在的作用域
  if (this.prototype) {
    nop.prototype = this.prototype
  }
  // 修改绑定函数的原型指向
  bound.prototype = new nop()
  return bound
}

// test

let obj = { name: 'ceshi' }
function test(x, y, z) {
  console.log(Array.from(arguments))
  console.log(this.name)
  console.log(this)
  console.log(x + y + z)
}
var Bound = test.myBind(obj, 1, 2, 4)
Bound(3)
