const alphabet  = 'abcdefghijklmnopqrstuvwxyz'.split("")
const key       = 'zyxwvutsrqponmlkjihgfedcba'.split("");

function encode( text ) {
  let plaintext = text.toLowerCase().replace(/[\s.,]/g, '');

  let ciphertext = "";

  plaintext.split("").forEach( current => {
    let index = alphabet.indexOf(current);
    if(index!=-1) {
      ciphertext += key[index];
    } else {
      ciphertext += current;
    }
  });

  let spacedCipher = "";

  for( let i=0; i<ciphertext.length; i++){
    if((i) % 5 == 0 && i!=0) { spacedCipher += " " }
    spacedCipher += ciphertext[i];
  }

  return spacedCipher;
}

module.exports = { encode }
