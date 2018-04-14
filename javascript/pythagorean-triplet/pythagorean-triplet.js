'use strict'

module.exports = Triplet

function Triplet(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}


function Triplets( ops ) {
  this.minFactor  = ops.minFactor || 1;
  this.maxFactor  = ops.maxFactor;
  this.sum        = ops.sum;
}

Triplet.prototype.sum = function() {
  return this.a + this.b + this.c;
}

Triplet.prototype.product = function() {
  return this.a * this.b * this.c;
}

Triplet.prototype.isPythagorean = function() {
  return Math.pow(this.a, 2) + Math.pow(this.b, 2) == Math.pow(this.c, 2);
}

Triplet.where = function( ops ) {
  return new Triplets( ops ).getTriplets();
}

Triplets.prototype.getTriplets = function () {
  let triplets = [];

  // Get all 3 numbers permutations
  for(let a = this.minFactor; a<this.maxFactor - 1; a++){
    for(let b = a+1; b<this.maxFactor; b++){
      for(let c = b+1; c<this.maxFactor + 1; c++){

        let temp = new Triplet(a, b, c);

        if(temp.isPythagorean()){
          if(temp.isPythagorean() && (!this.sum || temp.sum() === this.sum)){
            triplets.push(temp)
          }
        }

      }
    }
  }

  return triplets
}
