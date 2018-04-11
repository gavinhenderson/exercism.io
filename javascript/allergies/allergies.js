function toBin( n ) {
  return (n >>> 0).toString(2);
}

const allergies = [ 'eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats' ];

module.exports = class {
  constructor(score) {
    this.score = toBin(score);
    this.getAllergies();
  }

  getAllergies(){
    let list = []

    let j=0
    for( let i=this.score.length-1; i>=0; i--) {
      if(this.score[i] == '1' && j < allergies.length) {
        list.push(allergies[j])
      }
      j++
    }

    this.badFood = list;
  }

  list(){
    return this.badFood;
  }

  allergicTo(food) {
    return this.badFood.includes(food);
  }
}
