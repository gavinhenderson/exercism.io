module.exports = class {
  constructor(sideOne, sideTwo, sideThree){
    this.sideOne    = sideOne;
    this.sideTwo    = sideTwo;
    this.sideThree  = sideThree;
  }

  isEquilateral(){
    if(this.sideOne === this.sideTwo && this.sideOne === this.sideThree){
      return true;
    }
    return false;
  }

  isIsosceles(){
    let pairs = [
      [this.sideOne, this.sideTwo],
      [this.sideOne, this.sideThree],
      [this.sideTwo, this.sideThree]
    ];

    for(let i=0; i<pairs.length;i++){
      let current = pairs[i]
      if(current[0] == current[1]) { return true; }
    }

    return false;
  }

  isValid() {
    if(this.sideOne <= 0 || this.sideTwo <= 0 || this.sideThree <= 0) {
      return false;
    }

    let sides = [this.sideOne, this.sideTwo, this.sideThree].sort(function(a, b){return b-a});
    let largest = sides.splice(0,1);
    let smallTotal = sides[0] + sides[1];
    if(smallTotal < largest) {
      return false; }

    return true;
  }

  kind(){
    if(!this.isValid()) { throw new Error('Not a valid triangle')}
    if(this.isEquilateral()) { return "equilateral"; }
    if(this.isIsosceles()) { return "isosceles"; }
    return "scalene"
  }
}
