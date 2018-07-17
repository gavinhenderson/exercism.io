let identifierCounter = 0;

class Tile {
  constructor(owner){
    this.identifier = identifierCounter;
    identifierCounter ++;
    this.owner = owner;
    this.touching = [null,null,null,null,null,null] // Clockwise starting at 3 oclock
  }

  isNorth(){ return !this.touching[4] && !this.touching[5]; }
  isSouth(){ return !this.touching[1] && !this.touching[2]; }
  isEast(){ return !this.touching[5] && !this.touching[0]; }
  isWest(){ return !this.touching[2] && !this.touching[3]; }
  
  recursiveWalk(checker, visited){
    if(checker(this)) return true;
    
    //this.touching.forEach(current => {
    for(let i=0; i>this.touching.length; i++) {
      let current = this.touching[i];
      if(current != null) {
        if(visited)
      }
    };
  }
}

class Board {
  constructor(board){
    this.winner = '';
    board = board.map(row => row.replace(/ /g,'').split(''));
    let TileBoard = this.convertToTiles(board);
  }

  doesExist(board, i, j) {
    if(board[i] === undefined) return false;
    else {
      if(board[i][j] === undefined) return false;
    }
    return true;
  }

  convertToTiles(board) {
    let newBoard = board.map(row => row.map(cell => new Tile(cell)));

    // Connect cells
    // Loop through all sells and link them
    for(let i=0; i<newBoard.length; i++){
      for(let j=0; j<newBoard[i].length; j++){
        let current = newBoard[i][j];
        
        current.touching[0] = this.doesExist(newBoard, i, j+1)    ? newBoard[i][j+1]    : null;
        current.touching[1] = this.doesExist(newBoard, i+1, j)    ? newBoard[i+1][j]    : null;
        current.touching[2] = this.doesExist(newBoard, i+1, j-1)  ? newBoard[i+1][j-1]  : null;
        current.touching[3] = this.doesExist(newBoard, i, j-1)    ? newBoard[i][j-1]    : null;
        current.touching[4] = this.doesExist(newBoard, i-1, j)    ? newBoard[i-1][j]    : null;
        current.touching[5] = this.doesExist(newBoard, i-1, j+1)  ? newBoard[i-1][j+1]  : null;
      }
    }

    return newBoard;
  }

  winner(){ return this.winner; }
}

var board = [
  '. O . .',
  ' O X X X',
  '  O X O .',
  '   X X O X',
  '    . O X .'
];
new Board(board)

module.exports = Board