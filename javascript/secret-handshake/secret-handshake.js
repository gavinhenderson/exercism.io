module.exports = class{
  constructor(val){
    if(isNaN(val)){
      throw new Error('Handshake must be a number');
    }
    this.val = val;
  }

  commands(){
    let commands = [];
    let temp = this.val;
    if(temp==0){
      return []
    }
    let reverse = false;

    if(temp>=16){
      temp -= 16;
      reverse = true;
    }

    if(temp>=8) {
      temp -= 8
      commands.push("jump")
    }

    if(temp>=4) {
      temp -= 4
      commands.push("close your eyes")
    }

    if(temp>=2) {
      temp -= 2
      commands.push("double blink")
    }

    if(temp>=1) {
      temp -= 1
      commands.push("wink");
    }

    if(!reverse){
      commands.reverse()
    }

    return commands
  }
}
