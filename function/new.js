/**
 *  new 的实现过程
 * 1、新定义一个对象
 * 2、对象 继承 构造函数的原型链
 * 3、将构造函数的 this 指向这个对象
 * 4、根据构造函数的返回值类型返回结果，
 **/

function myNew(fn) {
  var obj = {}
  obj.__proto__ = Object.create(fn.prototype)
  let agrs = Array.prototype.slice.call(arguments, 1)
  let result = fn.call(obj, ...agrs)
  return typeof result === 'object' ? result : obj
}

// test
function foo() {
  this.name = 'zhangsan'
  this.age = arguments[0]
}

foo.prototype.say = function () {
  console.log(this.name + ' ss ' + this.age)
}

let test = myNew(foo, 'hh', '123')
test.say()

let test01 = new foo()
test01.say('sss')
