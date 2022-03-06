import { permutation, combination } from '../PermutationAndCombination'

describe('Permutation', () => {
  it('permutation(5, 2)', () => {
    expect(permutation(5, 2)).toBe(20)
  })
})

describe('Combination', () => {
  it('combination(5, 2)', () => {
    expect(combination(5, 2)).toBe(10)
  })
})
