module.exports = class {
  constructor( plaintext ) {
    this.plaintext = plaintext;
    this.normalizePlaintext();
    this.size();
    this.plaintextSegments();
    this.ciphertext();
  }

  normalizePlaintext(){
    this.plaintext = this.plaintext.replace(/[#$%^&\s!,.]/g, "").toLowerCase();
    return this.plaintext;
  }

  size(){
    let realLength = Math.sqrt(this.plaintext.length);
    this.maxSize = Math.ceil(realLength);
    return Math.ceil(realLength);
  }

  plaintextSegments() {
    this.plainSegments = [];

    let temp = "";
    for(let i=0; i<this.plaintext.length;i++){
      if( temp.length == this.maxSize ){
        this.plainSegments.push(temp);
        temp = "";
      }
      temp += this.plaintext[i];
    }

    if(temp!="") { this.plainSegments.push(temp) }

    return this.plainSegments;
  }

  ciphertext() {
    this.cipher = "";

    let i=0;
    while( this.cipher.length < this.plaintext.length ) {
      this.plainSegments.forEach( current => {
        if(current[i] != undefined) {
          this.cipher += current[i];
        }
      })
      i++
    }

    return this.cipher;
  }

}
