module.exports = class{
  constructor(string){
    this.testString = string.toLowerCase();
  }

  isPangram(){
    let alphabetCount = {
      'a':0,
      'b':0,
      'c':0,
      'd':0,
      'e':0,
      'f':0,
      'g':0,
      'h':0,
      'i':0,
      'j':0,
      'k':0,
      'l':0,
      'm':0,
      'n':0,
      'o':0,
      'p':0,
      'q':0,
      'r':0,
      's':0,
      't':0,
      'u':0,
      'v':0,
      'w':0,
      'x':0,
      'y':0,
      'z':0
    }
    for(var i=0;i<this.testString.length;i++){
      var character = this.testString[i];
      if(alphabetCount[character]!=undefined){
        alphabetCount[character]++;
      }
    }

    let pangram = true;
    for(var key in alphabetCount){
      if(alphabetCount[key]<1){
        pangram = false;
      }
    }
    return pangram;
  }
}
