module.exports = class {
  constructor( series ){
    this.digits = series.split("");
    for(let i=0;i<this.digits.length;i++){ this.digits[i] = parseInt(this.digits[i]) }
  }

  slices( n ){
    if(n > this.digits.length){ throw new Error('Slice size is too big.') }

    let slices = [];
    let slicing = true;
    let currentStart = 0;
    while(slicing){
      let currentSlice = [];

      for(let i=currentStart; i<currentStart+n;i++){
        currentSlice.push(this.digits[i]);
      }

      slices.push(currentSlice)

      currentStart ++;
      if(currentStart+n > this.digits.length){ slicing = false; }
    }
    return slices;
  }
}
