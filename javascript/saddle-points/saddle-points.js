function findMax( arr ) {
  return Math.max(...arr);
}

function findMin( arr ) {
  return Math.min(...arr);
}

module.exports = class {
  constructor( matrix ){
    this.rows = matrix.split("\n");
    this.rows = this.rows.map( x => {
      return x.split(" ");
    })
    this.rows = this.rows.map( x => {
      return x.map( y => { return parseInt(y); })
    });

    // Rotate rows
    this.columns = this.rows[0].map((x,i) => this.rows.map(x => x[i]))

    this.saddlePoints = [];

    for(let i=0; i<this.rows.length; i++){
      let rowMax = findMax(this.rows[i]);
      for(let j=0; j<this.rows[i].length; j++){
        if(this.rows[i][j] >= rowMax){
          let rowMin = findMin(this.columns[j]);
          if(rowMin >= this.rows[i][j]){
            this.saddlePoints.push([i,j])
          }
        }
      }
    }
  }
}
