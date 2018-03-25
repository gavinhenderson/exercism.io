module.exports = class{
  constructor(){}

  rotate(plaintext, rot) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
                    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let cipherText = "";

    for(let i=0;i<plaintext.length;i++){
      let index = alphabet.indexOf(plaintext[i].toLowerCase());

      if(index == -1){
        cipherText += plaintext[i];
        continue;
      }

      let newIndex = index+rot

      if(newIndex>=alphabet.length){ newIndex -= alphabet.length }

      if(plaintext[i].toUpperCase() == plaintext[i]){
        cipherText += alphabet[newIndex].toUpperCase();
      } else {
        cipherText += alphabet[newIndex]
      }
    }

    return cipherText
  }
}
