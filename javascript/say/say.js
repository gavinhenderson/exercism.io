const Units = [ "zero", "one", "two", "three", "four", "five",
                "six", "seven", "eight", "nine" ]

const Tens = [ "", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ]

const exceptions = {
  0 : "zero",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen"
}

const triples = [ "", "thousand", "million", "billion", "trillion" ];

function trimSpaces( string ){
  let noSpaces = string;
  while(true){
    if(noSpaces[0] == " "){
      noSpaces = noSpaces.substr(1);
    } else {
      break;
    }
  }

  while(true){
    if(noSpaces[noSpaces.length-1] == " "){
      noSpaces = noSpaces.substring(0, noSpaces.length - 1);
    } else {
      break;
    }
  }

  return noSpaces;
}

// expects a number under 999
function tripleInEnglish( n ){
  let hundreds  = Math.floor(n / 100);
  let tens      = Math.floor((n % 100) / 10);
  let units     = n % 10;

  let english = "";
  if(hundreds != 0) {
    english += Units[hundreds] + " hundred"
  }

  if(tens!=0){
    english += " " + Tens[tens];
  }

  if(units!=0){
    if(tens!=0){ english+= "-"}
    else { english += " "}
    english += Units[units];
  }
  return trimSpaces( english );
}

function inEnglish( n ) {
  if(n<0 || n > 999999999999){
    throw new Error('Number must be between 0 and 999,999,999,999.')
  }
  if(exceptions.hasOwnProperty(n)) { return exceptions[n] };

  let chunks = n.toString().split("").reverse().join("").match(/.{1,3}/g);

  english = ""
  for(let i=0; i<chunks.length; i++){
    chunks[i] = chunks[i].split("").reverse().join("")
    if( tripleInEnglish(parseInt(chunks[i])) != "" )
    english = tripleInEnglish(parseInt(chunks[i])) + " " + triples[i] + " "+ english
  }

  return trimSpaces(english);
}

module.exports = { inEnglish }
