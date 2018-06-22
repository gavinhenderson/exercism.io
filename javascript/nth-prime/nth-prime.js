module.exports = { nth }

function nth( n ){
  if( n == 0 ){ throw new Error('Prime is not possible') }
  let primes = sieve(200000);
  return primes[n-1];
}

function sieve( n ){
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

  primes = [];

  for(let i=0;i<A.length; i++){
    if(A[i]){ primes.push(i)}
  }

  primes = this.primes.slice(0,n)

  return primes;
}
