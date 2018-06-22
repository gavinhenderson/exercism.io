module.exports = class{
  constructor(matrixString){
    let lines = matrixString.split("\n");
    this.rows = [];
    lines.forEach(current => {
      this.rows.push(current.split(" "));
    });

    for(let i=0;i<this.rows.length;i++){
      for(let j=0;j<this.rows[i].length;j++){
        this.rows[i][j] = parseInt(this.rows[i][j])
      }
    }

    const flipMatrix = matrix => (
      matrix[0].map((column, index) => (
        matrix.map(row => row[index])
      ))
    );

    this.columns = []

    for(let i=0;i<this.rows.length;i++){
      for(let j=0;j<this.rows[i].length;j++){
        if(this.columns[j]==undefined){
          this.columns[j] = []
        }
        this.columns[j][i] = (this.rows[i][j])
      }
    }

  }
}
