/**
 * @description 检查value值是否为空
 * @date 2020-02-26
 * @export
 * @param {*} val
 * @returns {boolean}
 */
export function isUndef(val): boolean {
  return val === undefined || val === null
}

/**
 * @description 快速对象检查
 * @date 2020-02-26
 * @export
 * @param {*} val
 * @returns {boolean}
 */
export function isObject(val): boolean {
  return val != null && typeof val === 'object'
}

/**
 * @description 获取值的原始类型字符串
 * @date 2020-02-26
 * @export
 * @param {*} val
 * @returns {string} String "Null" "Undefined" "Number" "Object" "Array"
 */
export function toRawType(val): string {
  return Object.prototype.toString.call(val).slice(8, -1)
}

/**
 * @description 检查是够是有效的数组下标,即检查val是否是number或者可以转成number
 * @date 2020-02-26
 * @export
 * @param {*} val
 * @returns {boolean}
 */
export function isValidArrayIndex(val): boolean {
  var n = parseFloat(String(val))
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * @description  严格的对象类型检查
 * @date 2020-02-26
 * @param {*} obj
 * @returns {boolean}
 */
export function isPlainObject(obj): boolean {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * @description 值转换为实际的字符串
 * @date 2020-02-26
 * @export
 * @param {*} val
 * @returns {string}
 */
export function toString(val): string {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === Object.prototype.toString)
    ? JSON.stringify(val, null, 2)
    : String(val)
}

/**
 * @description 值转换为数字以进行持久化
 * @date 2020-02-26
 * @export
 * @param {*} val
 * @returns
 */
export function toNumber(val) {
  var n = parseFloat(val)
  return isNaN(n) ? val : n
}

export /**
 * @description 返回val的类型 ，小写的
 * @param {*} v
 */
const getType = (v) => (v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase())

/**
 * Remove an item from an array.
 */
export function removeItemFromArr(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}
/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null)
  return function cachedFn(str) {
    var hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

// 将驼峰命名法转为 -   例如  absSbhS  =>  abs-sbh-s
export const hyphenate = cached(function(str) {
  var hyphenateRE = /\B([A-Z])/g
  return str.replace(hyphenateRE, '-$1').toLowerCase()
})
