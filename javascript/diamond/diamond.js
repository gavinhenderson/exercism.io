const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function addSpaces(n, str){
  for(let i=0; i<n; i++){ str += " "; }
  return str;
}

module.exports = class {
  constructor(){}

  halfDiamond( maxLetter ){
    let maxIndex = Alphabet.indexOf(maxLetter);
    let diamond = [];

    for(let i=0; i<=maxIndex; i++) {
      let line = "";
      line = addSpaces(maxIndex-i, line);

      if(i==0){ line += Alphabet[i] }
      else {
        line += Alphabet[i];
        line = addSpaces(i, line);
        line = addSpaces(i-1, line);
        line += Alphabet[i];
      }

      line = addSpaces(maxIndex-i, line);
      diamond.push(line);
    }

    return diamond;
  }

  makeDiamond( maxLetter ){
    let diamond = this.halfDiamond(maxLetter);
    diamond = diamond.concat(this.halfDiamond(maxLetter).slice(0, -1).reverse());
    return diamond.join("\n") + "\n"
  }
}
