class List{
  constructor(values){
    this.values = values || [];
  }

  length() {
    let counter = 0;
    this.values.forEach(current => {
      counter ++;
    });
    return counter;
  }

  addValue(newVal) {
    this.values.push(newVal);
  }

  append(newList) {
    let appended = this.values
    newList.values.forEach(current => {
      appended.push(current);
    });
    return new List(appended);
  }

  concat(newList) {
    return this.append(newList);
  }

  filter(f) {
    let newVals = [];
    this.values.forEach(current => {
      if(f(current)){ newVals.push(current); }
    })
    return new List(newVals);
  }

  map(f) {
    let newVals = [];
    this.values.forEach(current => {
      newVals.push(f(current));
    })
    return new List(newVals)
  }

  foldl(f, start) {
    let counter = start;

    for(let i=0;i<this.values.length;i++){
      counter = f(this.values[i], counter);
    }

    return counter;
  }

  foldr(f, start) {
    let counter = start;

    for(let i=this.values.length-1;i>=0;i--){
      counter = f(this.values[i], counter);
    }

    return counter;
  }

  reverse() {
    let newVals = [];
    for(let i=this.values.length-1;i>=0;i--){
      newVals.push(this.values[i]);
    }
    return new List(newVals);
  }
}


module.exports = List;
