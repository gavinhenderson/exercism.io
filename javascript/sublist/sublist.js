module.exports = class {
  constructor(list) {
    this.list = list || [];
  }

  equals(listTwo) {
    if(listTwo.list.length != this.list.length) { return false; }
    for(let i=0; i<this.list.length; i++){
      if(this.list[i]!=listTwo.list[i]){ return false; }
    }
    return true;
  }

  isSublist(test) {
    return this.list.join().match(test.list.join());
  }

  compare(testList) {
    if(this.equals(testList)) { return "EQUAL"; }
    if(this.isSublist(testList)) { return "SUPERLIST"; }
    if(testList.isSublist(this)) { return "SUBLIST"; }
    return "UNEQUAL";
  }
}
