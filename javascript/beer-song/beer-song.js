let exceptions = {
  0: `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`,
  1: `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`,
  2: `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`
}

module.exports = class {
  constructor() {

  }

  verse(verseNo) {
    if(exceptions[verseNo]==undefined){
      return `${verseNo} bottles of beer on the wall, ${verseNo} bottles of beer.\nTake one down and pass it around, ${verseNo-1} bottles of beer on the wall.\n`
    } else {
      return exceptions[verseNo];
    }
  }

  sing(from, to=0) {
    let song = "";
    for (let i=from;i>=to;i--){
      song += this.verse(i);
      if(i!=to) { song += "\n" }
    }
    return song;
  }
}
