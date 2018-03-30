class Rational {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  //`r1 = a1/b1` and `r2 = a2/b2` is `r1 + r2 = a1/b1 + a2/b2 = (a1 * b2 + a2 * b1) / (b1 * b2)`.
  add(val) {
    let a = ((this.a * val.b) + (val.a * this.b));
    let b = (this.b * val.b);
    if(a==0){ return new Rational(0,1) }
    return new Rational(a,b)
  }

  sub(val) {
    let a = ((this.a * val.b) - (val.a * this.b));
    let b = (this.b * val.b);
    if(a==0){ return new Rational(0,1) }
    return new Rational(a,b)
  }

  // `r1 = a1/b1` and `r2 = a2/b2` is `r1 * r2 = (a1 * a2) / (b1 * b2)`.
  mul(val) {
    let a = this.a * val.a;
    let b = this.b * val.b;
    return new Rational(a,b).reduce();
  }

  // `r1 = a1/b1` by another `r2 = a2/b2` is `r1 / r2 = (a1 * b2) / (a2 * b1)` if `a2 * b1` is not zero.
  div(val) {
    let a = this.a * val.b;
    let b = val.a * this.b;
    return new Rational(a, b).reduce();
  }

  abs() {
    let a = this.a * (this.a<0 ? -1 : 1);
    let b = this.b * (this.b<0 ? -1 : 1);
    return new Rational(a,b)
  }

  exprational(exp) {
    if(exp==0){ return new Rational(1,1) };
    return new Rational(this.a, Math.pow(this.b,exp));
  }

  expreal(exp) {
    return Math.pow(10.0, Math.log10(Math.pow(exp, this.a)) / this.b)  
  }

  reduce() {
    let gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(Math.abs(this.a),Math.abs(this.b));
    return (new Rational((this.a/gcd), (this.b/gcd))).fix();
  }

  fix() {
    let a = this.a;
    let b = this.b;
    if((a<0 && b<0)||b<0){
      a = a*-1;
      b = b*-1;
      return new Rational(a,b);
    }
    return new Rational(a,b);
  }
}

module.exports = Rational;
