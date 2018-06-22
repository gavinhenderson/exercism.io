const givenChildren = [  "Alice", "Bob", "Charlie", "David", "Eve", "Fred",
                    "Ginny", "Harriet", "Ileana", "Joseph", "Kincaid", "Larry" ];
const plants = {
  G: 'grass',
  C: 'clover',
  R: 'radishes',
  V: 'violets'
}

function fillPatch( patch ){
  return patch.split('\n').map(function (row) {
   return row.split('').map(function (sign) {
     return plants[sign];
   });
 });
}

function getPlant(pots, index) {
  var plantsArr = [];
  var position = 2 * index;
  plantsArr.push(pots[0][position]);
  plantsArr.push(pots[0][position + 1]);
  plantsArr.push(pots[1][position]);
  plantsArr.push(pots[1][position + 1]);
  return plantsArr;
}

module.exports = function( patch, alternateStudents ){
  let kids = {}
  let children = alternateStudents || givenChildren;
  children.sort();

  let filled = fillPatch( patch );

  for(let i=0; i<children.length; i++){
    kids[children[i].toLowerCase()] = getPlant(filled, i)
  }

  return kids;
}
