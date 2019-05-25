class Matrix {
  rows: number[][]
  columns: number[][]

  constructor(matrix: string) {
    const rows = matrix.split('\n')
    const splitRows: string[][] = rows.map((current) => current.split(' '))
    this.rows = this.toNumberMatrix(splitRows)
    this.columns = this.getColumns(this.rows)
  }

  getColumns(matrix: number[][]): number[][] {
    const newMatrix: number[][] = []

    for (let i = 0; i < matrix[0].length; i++) {
      const column = []

      // tslint:disable-next-line
      for (let j = 0; j < matrix.length; j++) {
        column.push(matrix[j][i])
      }

      newMatrix.push(column)
    }

    return newMatrix
  }

  toNumberMatrix(matrix: string[][]): number[][] {
    const rows = matrix.map((current) =>
      current.map((current) => parseInt(current, 10)),
    )

    return rows
  }
}

export default Matrix
