/*
    author sandyboypraper

    Here is the EulerTotientFunction.
    it is also represented by phi

    so EulersTotientFunction(n) (or phi(n)) is the count of numbers in {1,2,3,....,n} that are relatively
    prime to n, i.e., the numbers whose GCD (Greatest Common Divisor) with n is 1.
*/

import { GetEuclidGCD } from './GetEuclidGCD'

const eulersTotientFunction = (n) => {
  let countOfRelativelyPrimeNumbers = 1
  for (let iterator = 2; iterator <= n; iterator++) {
    if (GetEuclidGCD(iterator, n) === 1) countOfRelativelyPrimeNumbers++
  }
  return countOfRelativelyPrimeNumbers
}

export { eulersTotientFunction }
