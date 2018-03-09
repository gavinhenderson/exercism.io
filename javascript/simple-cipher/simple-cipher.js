module.exports = class{
    constructor(key){
      this.alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
                       'm','n','o','p','q','r','s','t','u','v','w','x',
                       'y','z']

      if(key != undefined){
        this.validateKey(key)
        this.key = key.toLowerCase()
      }else{
        this.key = this.genKey();
      }


    }

    genKey(){
      var key = "";
      for(var i =0;i<100;i++){
        var rand = Math.floor((Math.random() * 26));
        key += this.alphabet[rand];
      }
      return key;
    }

    validateKey(key){
      if(key.toLowerCase()!= key){
        throw new Error('Bad key')
      }else if(key.replace(/[0-9]/g, '')!=key){
        throw new Error('Bad key')
      }else if(key.length==0){
        throw new Error('Bad key')
      }
    }

    encode(enc){
      enc = enc.toLowerCase()
      var encoded = "";
      for(var i=0;i<enc.length;i++){
        var index = i;

        while(index>this.key.length-1) { index = index - this.key.length }

        var shiftBy = this.alphabet.indexOf(this.key[index]);
        var shiftFrom = this.alphabet.indexOf(enc[i]);

        var shifted = shiftFrom + shiftBy;
        if(shifted>25){ shifted-= 26; }

        encoded += this.alphabet[shifted];
      }
      return encoded;
    }

    decode(cipherText){
      cipherText = cipherText.toLowerCase();
      var decoded = "";
      for(var i=0;i<cipherText.length;i++){
        var shiftedBy = this.alphabet.indexOf(this.key[i]);
        var shiftFrom = this.alphabet.indexOf(cipherText[i]);

        var shifted = shiftFrom - shiftedBy
        if(shifted<0) shifted += 26;

        decoded += this.alphabet[shifted];
      }
      return decoded
    }
}
