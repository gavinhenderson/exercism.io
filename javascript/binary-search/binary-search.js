function isSorted( array ){
  let sortedArray = array.slice(0).sort(function(a,b){return a>b});
  if(JSON.stringify(array) === JSON.stringify(sortedArray)) { return array }
  return undefined;
}

module.exports = class {
  constructor( array ){
    this.array = isSorted( array );
  }

  indexOf( val ) {
    if(this.array == undefined) { return -1 }
    let minIndex = 0;
    let maxIndex = this.array.length - 1;

    while (minIndex <= maxIndex) {
        let currentIndex = (minIndex + maxIndex) / 2 | 0;
        let currentElement = this.array[currentIndex];

        if (currentElement < val) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > val) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }

    return -1;
  }
}
