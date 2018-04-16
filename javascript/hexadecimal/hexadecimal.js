const HexConverter = function( hex ) { this.hex = hex.split(""); }

const HexSpec = {
  '0':'0000',
  '1':'0001',
  '2':'0010',
  '3':'0011',
  '4':'0100',
  '5':'0101',
  '6':'0110',
  '7':'0111',
  '8':'1000',
  '9':'1001',
  'a':'1010',
  'b':'1011',
  'c':'1100',
  'd':'1101',
  'e':'1110',
  'f':'1111'
}

function binToDec( bin ){
  let total = 0;

  for(let i=0; i<bin.length; i++){
    if(bin[i]!='0'&&bin[i]!='1'){
      return 0;
    }

    if(bin[i]=='1'){
      total += Math.pow(2,i);
    }
  }

  return total;
}

HexConverter.prototype.toDecimal = function(){
  let binString = "";

  for(let i=0;i<this.hex.length;i++){
    let current = this.hex[i];

    if(HexSpec.hasOwnProperty(current)){
      binString += HexSpec[current];
    } else {
      return 0;
    }
  }

  return binToDec(binString.split("").reverse());
}

module.exports = HexConverter
