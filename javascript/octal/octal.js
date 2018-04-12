const valid = "01234567".split("")

module.exports = class{
  constructor(bin){
    this.bin = bin.split("").reverse().join("");
  }

  toDecimal(){
    let total = 0;

    for(let i=0; i<this.bin.length; i++){
      let isValid = false;

      valid.forEach(current => {
        if(this.bin[i] == current){ isValid = true; }
      })

      if(!isValid){ return 0; }

      total += (Math.pow(8,i))*this.bin[i];
    }

    return total;
  }
}
