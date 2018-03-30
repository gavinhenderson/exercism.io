module.exports = class {
  constructor(val) {
    this.testString = val.toLowerCase();
    this.allowed = ["-"," "];
  }

  isIsogram() {
    let appeared = [];
    for(let i = 0; i < this.testString.length; i++) {
      if (this.testString[i] == "-" || this.testString[i] == " ") { continue }
      if(appeared.indexOf(this.testString[i])!=-1){
        return false;
      } else {
        appeared.push(this.testString[i])
      }
    }
    return true;
  }
}
