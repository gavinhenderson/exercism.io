function isMultiple(multiples, i) {
  var result = false;
  multiples.forEach(function (multiple) {
    if (i % multiple === 0) {
      result = true;
    }
  });
  return result;
}

module.exports = class {
  constructor( arr ) {
    this.multiples = arr;
  }

  to( n ) {
    var sum = 0;
    for (var i = 1; i < n; i++) {
      if (isMultiple(this.multiples, i)) {
        sum += i;
      }
    }
    return sum;
  }
}
