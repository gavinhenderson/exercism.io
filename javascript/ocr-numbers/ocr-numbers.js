const OCR = [
  [
    ' _ ' ,
    '| |' ,
    '|_|' ,
  ],
  [
    '   ' ,
    '  |' ,
    '  |' ,
  ],
  [
    ' _ ' ,
    ' _|' ,
    '|_ ' ,
  ],
  [
    ' _ ' ,
    ' _|' ,
    ' _|' ,
  ],
  [
    '   ' ,
    '|_|' ,
    '  |' ,
  ],
  [
    ' _ ' ,
    '|_ ' ,
    ' _|' ,
  ],
  [
    ' _ ' ,
    '|_ ' ,
    '|_|' ,
  ],
  [
    ' _ ' ,
    '  |' ,
    '  |' ,
  ],
  [
    ' _ ' ,
    '|_|' ,
    '|_|' ,
  ],
  [
    ' _ ' ,
    '|_|' ,
    ' _|' ,
  ],
]

function convertSingle( single ){
  //single.forEach(current => { console.log(current.join("")) })
  for(let i=0; i<OCR.length;i++){
    let matches = 0;
    for(let j=0; j<3;j++){
      if(single[j] == OCR[i][j]){
        matches++;
      }
    }
    if(matches==3){
      return i.toString();
    }
  }
  return "?"
}

function convertLine( line ){
  let i=0;
  let currentLine = "";
  while(i<line[0].length){
    let current = [];
    current.push(line[0][i] + line[0][i+1] + line[0][i+2]);
    current.push(line[1][i] + line[1][i+1] + line[1][i+2]);
    current.push(line[2][i] + line[2][i+1] + line[2][i+2]);
    i+=3;
    currentLine += convertSingle( current );
  }
  return currentLine;
}

function convertScreen( wholeScreen ){
  let i=0;
  let currentRow = [];
  while(i<wholeScreen.length){
    let current = [];
    current.push(wholeScreen[i]);
    current.push(wholeScreen[i+1]);
    current.push(wholeScreen[i+2]);
    i+=4;
    currentRow.push(convertLine( current ));
  }
  return currentRow.join(",")
}

function convert( ocr ){
  let parsedOCR = ocr.split("\n");
  //parsedOCR.pop();
  return convertScreen( parsedOCR )
}

module.exports = { convert }
