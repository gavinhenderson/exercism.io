module.exports = class{
  constructor(bin){
    this.bin = bin.split("").reverse().join("");
  }

  toDecimal(){
    let total = 0;

    for(let i=0; i<this.bin.length; i++){
      if(this.bin[i]!='0'&&this.bin[i]!='1'&&this.bin[i]!='2'){
        return 0;
      }

      total += (Math.pow(3,i))*this.bin[i];
    }

    return total;
  }
}
