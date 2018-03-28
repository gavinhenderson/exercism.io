let usedNames = [];

module.exports = class{
  constructor(){
    this.name = "";
    this.randomName();
  }

  reset(){
    this.randomName();
  }

  randomName(){
    let unique = false;
    let newName       = "";
    while(!unique){
      let possibleChar  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let possibleNos   = "0123456789";

      for(let i=0;i<2;i++){
        newName += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length))
      }

      for(let i=0;i<3;i++){
        newName += possibleNos.charAt(Math.floor(Math.random() * possibleNos.length))
      }

      if(usedNames.indexOf(newName)==-1){ unique = true }
    }

    usedNames.push(newName)
    this.name = newName;
  }
}
