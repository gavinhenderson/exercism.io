module.exports = class {
  constructor() {
    this.qualifier = "";
    this.parseArgs( arguments );
    this.getProverb();
  }

  getProverb() {
    this.proverb = "";
    for(let i=0; i<this.list.length-1; i++) {
      this.proverb += `For want of a ${this.list[i]} the ${this.list[i+1]} was lost.\n`;
    }

    this.proverb += `And all for the want of a ${this.qualifier}${this.list[0]}.`;

  }

  toString() {
    return this.proverb;
  }

  parseArgs( args ) {
    this.list = [];

    let argsList = Array.from(args);
    let possibleOps = argsList[argsList.length-1];

    if(typeof possibleOps == 'object' && possibleOps.hasOwnProperty('qualifier')){
      this.qualifier = possibleOps.qualifier + " ";
      argsList.pop();
    }

    this.list = argsList;
  }
}
