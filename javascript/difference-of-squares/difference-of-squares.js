module.exports = class {
  constructor( max ) {
    this.max = max;
    this.setSquareOfSums();
    this.setSumOfSquares();
    this.setDifference();
  }

  setSumOfSquares() {
    let sum = 0;
    for(let i=1; i<=this.max;i++){ sum += Math.pow(i, 2); }
    this.sumOfSquares = sum;
  }

  setSquareOfSums() {
    let sum = 0;
    for(let i=1;i<=this.max;i++){ sum += i; }
    this.squareOfSums = Math.pow(sum, 2);
  }

  setDifference() {
    this.difference = this.squareOfSums - this.sumOfSquares;
  }
}
