// https://projecteuler.net/problem=10

import { PrimeCheck } from '../Maths/PrimeCheck'

const calculateSumOfPrimeNumbers = (maxNumber) => {
  let sum = 0
  for (let i = maxNumber - 1; i >= 2; i--) {
    if (PrimeCheck(parseInt(i)) === true) {
      sum += i
    }
  }
  return sum
}
export { calculateSumOfPrimeNumbers }
