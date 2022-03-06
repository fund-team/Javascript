import { MatrixExponentiationRecursive } from '../MatrixExponentiationRecursive'

describe('Matrix Exponentiation Recursive', () => {
  it('should return the exponentiation of the matrix', () => {
    const matrix = [
      [1, 0, 2],
      [2, 1, 0],
      [0, 2, 1]
    ]
    expect(MatrixExponentiationRecursive(matrix, 0)).toEqual([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ])
    expect(MatrixExponentiationRecursive(matrix, 1)).toEqual([
      [1, 0, 2],
      [2, 1, 0],
      [0, 2, 1]
    ])
    expect(MatrixExponentiationRecursive(matrix, 2)).toEqual([
      [1, 4, 4],
      [4, 1, 4],
      [4, 4, 1]
    ])
    expect(MatrixExponentiationRecursive(matrix, 5)).toEqual([
      [81, 72, 90],
      [90, 81, 72],
      [72, 90, 81]
    ])
  })
})
