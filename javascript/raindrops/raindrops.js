const getFactors = number => Array
    .from(Array(number), (_, i) => i)
    .filter(i => number % i === 0)

const ops = {
  3 : 'Pling',
  5 : 'Plang',
  7 : 'Plong'
}

module.exports = class {
  constructor() { }

  convert( n ) {
    let factors = getFactors( n );
    factors.push(n)
    let output = "";

    factors.forEach( current => {
      for(let factor in ops) {
        if( current == factor ) {
          output += ops[ factor ];
        }
      }
    });

    if(output == "") { return n.toString(); }
    return output;
  }
}
