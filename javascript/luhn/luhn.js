function isValid( test ){
  let numbers = test.replace(/\s/g, '').split("");

  for(let i=0; i<numbers.length; i++) {
    if( isNaN(numbers[i]) ) { return false; }
  }

  numbers = numbers.map(d => parseInt(d, 10))

  numbers = numbers.map((d, i) => {
    if (i % 2 !== 0) {
      return d * 2;
    }
    return d;
  });

  numbers = numbers.map(d => {
    if (d > 9) {
      return d - 9;
    }
    return d;
  })
  
  let sum = numbers.reduce((d, acc) => d + acc, 0);

  return sum > 0 && sum % 10 === 0;
}

module.exports = class {
  constructor( testString ) {
    this.valid = isValid(testString);
  }
}
