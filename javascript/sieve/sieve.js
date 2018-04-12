module.exports = class {
  constructor( n ) {
    /*
    Let A be an array of Boolean values, indexed by integers 2 to n,
    initially all set to true.

    for i = 2, 3, 4, ..., not exceeding √n:
     if A[i] is true:
       for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n:
         A[j] := false.

    Output: all i such that A[i] is true.

    */

    n++

    let A = [];
    for(let i=2;i<n;i++){ A[i] = true; }

    for(let i=2; i<Math.sqrt(n); i++){
      if(A[i]){
        for(let j=i*i; j<n; j+=i){
          A[j] = false;
        }
      }
    }

    this.primes = [];

    for(let i=0;i<A.length; i++){
      if(A[i]){ this.primes.push(i)}
    }

    this.primes = this.primes.slice(0,n)
  }

}
