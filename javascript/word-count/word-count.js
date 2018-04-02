module.exports = class {
  constructor() {}

  count(sentence) {
    let counter = {}
    let stripped = sentence.replace(/[,!&¿¡?@$%^&:.]/g," ").replace( / +/g, ' ' ).trim().toLowerCase();
    stripped = stripped.replace(/\n/g," ");
    stripped = stripped.replace(/\t/g," ");
    let words = stripped.split(" ");

    words.forEach(current => {
      if(current[0]=="'" && current[current.length-1]=="'"){
        current = current.replace(/[']/g,"");
      }
      if(!counter.hasOwnProperty(current)){
        counter[current] = 1;
      } else {
        counter[current] ++;
      }
    });

    return counter;
  }
}
