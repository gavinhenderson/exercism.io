function isValid(n) {
  if(n<=0){ return false; }
  return true;
}

function aliquotSum(n) {
    let sum = 0;
    for (let i = 1; i < n; i++){
      if (n % i == 0){
        sum += i;
      }
    }

    return sum;
}

module.exports = class {
  constructor() {}

  classify(n) {
    if(!isValid(n)) { return "Classification is only possible for natural numbers."; }
    let sum = aliquotSum(n);
    if(sum == n) { return "perfect" }
    if(sum > n) { return "abundant" }
    if(sum < n) { return "deficient" }
  }
}
