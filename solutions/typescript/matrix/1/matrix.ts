export class Matrix {
  matrix: number[][]
  constructor(public data: string) {
    this.data = data
    const rowStrings = data.split('\n')
    this.matrix = rowStrings.map(row => row.split(' ').map(Number))
  }

  get rows(): number[][] {
    return this.matrix
  }

  get columns(): number[][] {
    return this.matrix[0].map((_, colIndex) =>
      this.matrix.map(row => row[colIndex])
    )
  }
}
