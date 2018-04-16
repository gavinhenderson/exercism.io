const Flattener = function(){ }

function recFlatten( arr ){
  let flattened = [];

  arr.forEach( current => {
    if(Array.isArray(current)){
      flattened = flattened.concat(recFlatten(current));
    } else {
      if(current!=null){
        flattened.push(current);
      }
    }
  });

  //console.log(flatten)
  return flattened;
}

Flattener.prototype.flatten = function( arr ) {
  return recFlatten( arr )
}

module.exports = Flattener;
