module.exports = class{
  constructor(){
    this.list = []
  }

  push(val){
    this.list.push(val);
  }

  pop(){
    return this.list.pop()
  }

  shift(){
    return this.list.shift();
  }

  unshift(val){
    this.list.unshift(val);
  }

  count(){
    return this.list.length
  }

  delete(val){
    this.list.splice(this.list.indexOf(val),1)
  }
}
