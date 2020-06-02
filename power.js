const power = (base, exponent) => {
  let result = base
  for(let i = 1; i < exponent; i++) {
    result *= base
  }
  return result
}
const power1 = (base, exponent) => {
  if (exponent === 0) return 1
  return base * power1(base, exponent - 1)
}
console.log(power1(2, 4))
console.log(power1(2, 0))
