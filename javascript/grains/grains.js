const BigInt = require('./big-integer');

module.exports = class {
  constructor() {}

  square(num) {
    let current = BigInt(1);
    for(let i=1; i<num; i++){
      current = current.multiply(2);
    }
    return current.toString();
  }

  total() {
    let total = BigInt(0);

    for(let i=1;i<65;i++){
      total = total.add(this.square(i))
    }

    return total.toString();
  }
}
