module.exports = {
  for: (prime) => {
    let current = prime;
    let array = [];
    while(current!=1){

      let found = false;
      let temp = 2;
      while(!found){
        if((current/temp)==parseInt(current/temp)){
          array.push(temp);
          current = (current/temp)
          found = true;
        } else {
          temp ++;
        }
      }

    }

    return array;
  }
}
