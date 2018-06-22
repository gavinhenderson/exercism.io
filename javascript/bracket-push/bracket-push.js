const openers = [ "[", "{", "("]
const closers = [ "]", "}", ")"]

module.exports = function( brackets ) {
  let bracketsArr = brackets.split("");

  let opened = [];

  for(let i=0; i<bracketsArr.length; i++){
    let current = bracketsArr[i];
    if(openers.includes(current)){
      opened.push(current);
    } else if(closers.includes(current)){
      let closerIndex = closers.indexOf(current);
      let popped = opened.pop();
      if((popped != openers[closerIndex])) {
        return false;
      }
    }
  }

  if(opened!=0){
    return false;
  }
  return true;
}
