module.exports = class {
  constructor( positions ) {
    if(positions){
      if(positions.white == positions.black){ throw new Error('Queens cannot share the same space') }
      this.black = positions.black;
      this.white = positions.white;
    } else {
      this.black = [7,3];
      this.white = [0,3];
    }
  }

  toString(){
    let board = "";
    for(let i=0; i<8;i++) {
      let line = [];
      for(let j=0; j<8;j++) {
        if(i==this.black[0] && j == this.black[1]){
          line.push("B");
        } else if(i==this.white[0] && j == this.white[1]){
          line.push("W");
        } else {
          line.push("_")
        }
      }
      board += line.join(" ") + '\n';
    }
    return board;
  }

  canAttack() {
    if(this.white[0] === this.black[0]){ return true; }
    if(this.white[1] === this.black[1]){ return true; }

    for(let i=1; i<8; i++){
      // check NE
      let temp = [this.black[0]-i, this.black[1]-i];
      if(this.white[0] == temp[0] && this.white[1] == temp[1]){ return true; }

      // check NW
      temp = [this.black[0]-i, this.black[1]+i];
      if(this.white[0] == temp[0] && this.white[1] == temp[1]){ return true; }

      // check SW
      temp = [this.black[0]+i, this.black[1]-i];
      if(this.white[0] == temp[0] && this.white[1] == temp[1]){ return true; }

      // check SE
      temp = [this.black[0]+i, this.black[1]+i];
      if(this.white[0] == temp[0] && this.white[1] == temp[1]){ return true; }
    }
    return false;
  }
}
