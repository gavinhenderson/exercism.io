module.exports = {
  decode: function(cipher) {
    if(cipher == ""){ return "" }

    let plain = "";
    let currentNo = "";
    for(let i=0;i<cipher.length;i++){
      if(isNaN(cipher[i])|| cipher[i]==" "){
        if(currentNo==""){
          plain += cipher[i];
        } else {
          for(let j = 0; j<parseInt(currentNo);j++){
            plain += cipher[i];
          }
          currentNo = ""
        }
      } else {
        currentNo += cipher[i];
      }
    }

    return plain;

  },
  encode: function(plain) {
    let cipher = "";

    if(plain == ""){ return "" }

    let current = plain[0];
    let count = 1
    for(let i = 1;i<plain.length;i++){
      if(plain[i]==current){
        count++;
      } else {
        cipher += (count == 1 ? "" : count.toString()) + current;
        count = 1;
        current = plain[i]
      }
    }

    cipher += (count == 1 ? "" : count.toString()) + current;

    return cipher;
  }
}
