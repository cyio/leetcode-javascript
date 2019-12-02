/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let result = 0
  if (dividend > divisor) {
    result = 1
  }
  let isZheng = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor <0)
  dividend = parseInt(dividend)
  divisor = parseInt(divisor)
  while(dividend - divisor >= divisor) {
    result = result + 1
    dividend = dividend - divisor
  }
  // if (result < -2**31 || result > 2**31 - 1) return -1
  return isZheng ? result : -result
};

console.log(divide(10, 3))
