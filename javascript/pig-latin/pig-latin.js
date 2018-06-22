const vowels      = "aeiou".split("");
const consonant   = [ "thr", "sch", "ch", "qu", "th" ]

// Translates a single word
function translateWord( word ) {
  let translated = ""

  // Check for vowels
  if( vowels.includes( word[0] ) ) {
    return word + "ay";
  }

  // Check for qu exception
  if( word.substring(1,3) == "qu" ){
    return word.substring(3) + word.substring(0,3) + "ay"
  }


  // Check for multiple character consonants
  for(let i=0; i<consonant.length; i++){
    let current = consonant[i];
    if( word.substring(0, current.length) == current ){
      return word.substring( current.length ) + current + "ay";
    }
  }

  // Assume a single character consonant
  return word.substring(1) + word[0] + "ay"
}

// Translates an entire sentence
function translate( sentence ) {
  let translated = "";
  sentence.split(" ").forEach( current => {
    translated += translateWord( current ) + " ";
  })
  return translated.substring( 0, translated.length - 1 )
}

module.exports = { translate }
