module.exports = {
  parse: function(title){
    let words = title.replace(/[:-]/g," ").replace(/([A-Z])/g, ' $1').replace().replace(/\s\s+/g, ' ').trim();
    words = words.split(" ");

    let acronym = "";
    let preAcronymed = false;
    words.forEach(current => {
      let alter = false;
      if(current.length==1){ alter = true; }
      else { preAcronymed = false; }
      if(!preAcronymed) {
        acronym += current[0].toUpperCase();
      }
      if(alter) { preAcronymed = true; }
    })
    return acronym;
  }
}
