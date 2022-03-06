import { matrixMult } from '../MatrixMultiplication'

describe('Matrix multiplication', () => {
  it('should the product of the 2 matrices', () => {
    const firstMatrix = [
      [1, 2],
      [3, 4]
    ]
    const secondMatrix = [
      [5, 6],
      [7, 8]
    ]
    expect(matrixMult(firstMatrix, secondMatrix)).toEqual([
      [19, 22],
      [43, 50]
    ])
  })

  it('should the product of the 2 matrices', () => {
    const firstMatrix = [
      [-1, 4, 1],
      [7, -6, 2]
    ]
    const secondMatrix = [
      [2, -2],
      [5, 3],
      [3, 2]
    ]
    expect(matrixMult(firstMatrix, secondMatrix)).toEqual([
      [21, 16],
      [-10, -28]
    ])
  })

  it('should the product of the 2 matrices', () => {
    const firstMatrix = [
      [1, 0],
      [0, 1]
    ]
    const secondMatrix = [
      [1],
      [0]
    ]
    expect(matrixMult(firstMatrix, secondMatrix)).toEqual([
      [1],
      [0]
    ])
  })

  it('should the product of the 2 matrices', () => {
    const firstMatrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8]
    ]
    const secondMatrix = [
      [1],
      [2],
      [3],
      [4]
    ]
    expect(matrixMult(firstMatrix, secondMatrix)).toEqual([
      [30],
      [70]
    ])
  })
})
