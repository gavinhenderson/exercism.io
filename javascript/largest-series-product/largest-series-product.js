let LargestProduct = function( series ) {
  this.series = series;
}

LargestProduct.prototype.largestProduct = function( size ) {
  if(isNaN(this.series)){ throw new Error('Invalid input.') }
  if(size<0){ throw new Error('Invalid input.') }
  if(this.series.length < size){ throw new Error('Slice size is too big.') }

  this.series = this.series.split("")

  let largest = 0;

  let gettingProduct = true;
  let currentStart = 0;
  while(gettingProduct) {
    let current = 1;

    for(let i=currentStart;i<currentStart+size;i++){
      current = current * parseInt(this.series[i]);
    }

    if(current>largest){ largest = current }

    currentStart++;
    if(currentStart+size > this.series.length){
      gettingProduct = false;
    }
  }

  return largest;
}

module.exports = LargestProduct;
