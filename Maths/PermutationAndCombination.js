/**
 * @details Calculates the number of permutations and combinations.
 * @external_link (Permutation And Combinations)[https://www.geeksforgeeks.org/permutation-and-combination/]
 */

import { factorial } from '../Recursive/Factorial'

/**
 * @brief Calculates the number of Permutations from the given data.
 * @param
 * n: integer -> number of items.
 * r: integer -> number of times n is taken.
 * @returns integer: The number of permutations.
            NaN: if negative number is provided.
 */
const permutation = (n, r) => {
  return factorial(n) / factorial(n - r)
}

/**
 * @brief Calculates the number of Combinations from the given data.
 * @param
 * n -> number of items.
 * r -> number of times n is taken.
 * @returns integer: The number of combinations.
            NaN: if negative number is provided.
 */
const combination = (n, r) => {
  return factorial(n) / (factorial(r) * factorial(n - r))
}

// Exports the functions to be used in other files.
export { permutation, combination }
