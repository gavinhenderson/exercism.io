module.exports = class{
  constructor(bin){
    this.bin = bin.split("").reverse().join("");
  }

  toDecimal(){
    let total = 0;

    for(let i=0; i<this.bin.length; i++){
      if(this.bin[i]!='0'&&this.bin[i]!='1'){
        return 0;
      }

      if(this.bin[i]=='1'){
        total += Math.pow(2,i);
      }
    }

    return total;
  }
}
