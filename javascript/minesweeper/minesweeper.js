module.exports = class {
  constructor(){}

  addOneToSquare(i,j){
    if(this.grid[i] == undefined){ return }
    if(this.grid[i][j] == undefined){ return }
    if(this.grid[i][j] == "*"){ return }
    if(this.grid[i][j] == " "){
      this.grid[i][j] = "1"
    } else{
      this.grid[i][j] = (parseInt(this.grid[i][j])+1).toString();
    }
  }

  annotate( emptyBoard ){
    if(emptyBoard.length == 0){ return []; }
    if(emptyBoard.length == 1 && emptyBoard[0] == ""){ return [""]; }

    this.grid = [];
    emptyBoard.forEach( row => {
      this.grid.push(row.split(""));
    });

    for(let i=0; i<this.grid.length; i++){
      for(let j=0; j<this.grid[i].length; j++){
        if(this.grid[i][j] == "*"){
          this.addOneToSquare(i,    j-1);
          this.addOneToSquare(i-1,  j-1);
          this.addOneToSquare(i-1,  j);
          this.addOneToSquare(i-1,  j+1);
          this.addOneToSquare(i,    j+1);
          this.addOneToSquare(i+1,  j+1);
          this.addOneToSquare(i+1,   j);
          this.addOneToSquare(i+1,  j-1);
        }
      }
    }

    let finalGrid = [];
    this.grid.forEach(current => {
      finalGrid.push(current.join(""))
    })
    return finalGrid;
  }
}
