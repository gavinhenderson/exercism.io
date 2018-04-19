function isPalindrome(a,b){
  let value = a*b
  let product = value.toString();
  if(product == product.split("").reverse().join("")){
    return true;
  }
  return false;
}

module.exports = class {
  constructor( ops ){
    this.max = ops.maxFactor || 9;
    this.min = ops.minFactor || 1;
  }

  generate(){
    this.factors = [];
    for(let i = this.min; i <= this.max; i++){
      for(let j = i; j <=this.max; j++){
        if(isPalindrome(i,j)) { this.factors.push({
          a:i,
          b:j,
          val:i*j
        })}
      }
    }
    this.factors = this.factors.sort(function(a,b){
      return a.val - b.val
    })
  }

  largest(){
    let a = this.factors[this.factors.length-1].a;
    let b = this.factors[this.factors.length-1].b;
    let val = a*b
    let tempFactors = [];
    this.factors.forEach( current => {
      if(current.val == val){
        tempFactors.push([current.a,current.b]);
      }
    })
    return {
      value: val,
      factors: tempFactors,
    }
  }

  smallest(){
    let a = this.factors[0].a;
    let b = this.factors[0].b;
    let val = a*b
    let tempFactors = [];
    this.factors.forEach( current => {
      if(current.val == val){
        tempFactors.push([current.a,current.b]);
      }
    })
    return {
      value: val,
      factors: tempFactors,
    }
  }
}
