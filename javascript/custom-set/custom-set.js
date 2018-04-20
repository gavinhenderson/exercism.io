class Set{
  constructor( preset ) {
    this.set = preset || [];
    this.makeUnique();
  }

  makeUnique(){
    this.set = this.set.filter(function(elem, pos,arr) {
      return arr.indexOf(elem) == pos;
    })
  }

  empty(){
    if(this.set.length === 0) {
      return true;
    }
    return false;
  }

  add( newElement ){
    this.set.push(newElement);
    this.makeUnique();
    return this;
  }

  contains( element ){
    for(let i=0; i<this.set.length; i++){
      if(this.set[i] == element){
        return true;
      }
    }
    return false;
  }

  subset( testSet ){
    for(let i=0 ; i<testSet.set.length; i++){
      if( !this.contains(testSet.set[i]) ){ return false; }
    }
    return true;
  }

  disjoint( testSet ){
    for(let i=0 ; i<testSet.set.length; i++){
      if( this.contains(testSet.set[i]) ){ return false; }
    }
    return true;
  }

  eql( testSet ){
    if(testSet.set.length != this.set.length){ return false; }

    let matchedCount = 0;
    for(let i=0 ; i<testSet.set.length; i++){
      if( this.contains(testSet.set[i]) ){ matchedCount++; }
    }

    if( matchedCount == this.set.length ){
      return true;
    }
    return false;
  }

  intersection( testSet ){
    let newSet = [];

    for(let i=0 ; i<testSet.set.length; i++){
      if( this.contains(testSet.set[i]) ){ newSet.push(testSet.set[i]) }
    }

    this.set = newSet;
    this.makeUnique();
    return this;
  }

  difference( testSet ) {
    let newSet = [];

    for(let i=0 ; i<this.set.length; i++){
      if( !testSet.contains(this.set[i]) ){ newSet.push(this.set[i]) }
    }

    this.set = newSet;
    this.makeUnique();
    return this;
  }

  size(){
    return this.set.length;
  }

  union(testSet){
    testSet.set.forEach(current => {
      this.add(current);
    })
    return this;
  }

  toList(){
    return this.set.sort(function(a,b){ return a-b; })
  }

  clear(){ this.set = []; return this; }
}

module.exports = Set;
