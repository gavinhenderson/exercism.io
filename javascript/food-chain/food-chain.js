module.exports = class {
  constuctor() {
  }

  verse(verseNo) {
    let animals = ["fly","spider","bird","cat","dog","goat","cow","horse"];
    let tagLines = [
      "",
      "It wriggled and jiggled and tickled inside her.\n",
      "How absurd to swallow a bird!\n",
      "Imagine that, to swallow a cat!\n",
      "What a hog, to swallow a dog!\n",
      "Just opened her throat and swallowed a goat!\n",
      "I don't know how she swallowed a cow!\n"
    ];

    let verse = ""
    verse += `I know an old lady who swallowed a ${animals[verseNo-1]}.\n`


    if(verseNo<8) {
      verse += tagLines[verseNo-1];
      for(let i=verseNo-1; i>0; i--) {
        verse += `She swallowed the ${animals[i]} to catch the ${animals[i-1]}`
        if(i==2) { verse += ` that wriggled and jiggled and tickled inside her` }
        verse += ".\n"
      }
      verse += 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    } else {
      verse += "She's dead, of course!\n"
    }

    return verse;
  }

  verses(from, to) {
    let song = ""
    for(let i = from; i <= to; i++) {
      song += this.verse(i);
      song += "\n"
    }
    return song;
  }
}
