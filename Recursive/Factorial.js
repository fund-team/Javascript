/**
 * @function Factorial
 * @description function to find factorial using recursion.
 * @param {Integer} n - The input integer
 * @details Factorial of n = n * (n - 1) * (n - 2) * ... * 1
 * @returns {Integer}: Factorial of the number.
            {NaN}: if negative number is provided.
 * @see [Factorial](https://en.wikipedia.org/wiki/Factorial)
 * @example 5! = 1*2*3*4*5 = 120
 * @example 2! = 1*2 = 2
 */

const factorial = (n) => {
  if (n >= 0) {
    if (n === 0) {
      return 1
    } else {
      return n * factorial(n - 1)
    }
  } else {
    return NaN
  }
}
export { factorial }
