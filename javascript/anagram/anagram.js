module.exports = class {
  constructor(val) {
    this.val = val.toLowerCase();
  }

  isAnagram(test) {
    if(test == this.val) { return false; }

    let counts = [];

    for (let i = 0; i < test.length; i++) {
      let index = test.charCodeAt(i)-97;
      counts[index] = (counts[index] || 0) + 1;
    }

    for (let i = 0; i < this.val.length; i++) {
      let index = this.val.charCodeAt(i)-97;
      if (!counts[index]) { return false; }
      else { counts[index]--; }
    }

    return true;
  }

  matches(arr) {
    let words = Array.isArray(arr) ? arr : [].slice.call(arguments, 0);

    let pruned = [];

    // Remove words of different length
    words.forEach(current => {
      if(current.length == this.val.length){
        pruned.push(current);
      }
    });

    let final = [];
    pruned.forEach(current => {
      if(this.isAnagram(current.toLowerCase())){
        final.push(current);
      }
    });

    return final;
  }
}
