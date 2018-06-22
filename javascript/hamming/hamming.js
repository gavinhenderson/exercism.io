module.exports = class {
  constructor() {}

  compute(first, second) {
    if(first.length != second.length) { throw new Error('DNA strands must be of equal length.'); }
    let dist = 0;
    for(let i = 0; i < first.length; i++) {
      if( first[i] != second[i] ) { dist++ }
    }
    return dist;
  }
}
