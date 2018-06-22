module.exports = class{
  constructor(){
    this.classes = {}
  }

  add(name, grade){
    if(this.classes[grade]==undefined){
      this.classes[grade] = [ name ]
    } else {
      this.classes[grade].push(name)
    }
  }

  roster(){
    for(let grade in this.classes){
      this.classes[grade].sort()
    }
    return this.classes
  }

  grade(year){
    if(this.classes[year]==undefined){ return [] }
    let grade = this.classes[year];
    grade.sort();
    return grade

  }
}
