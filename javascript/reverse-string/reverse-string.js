module.exports = function(forward){
  var backward = ""
  for(var i=forward.length-1;i>=0;i--){
    backward += forward[i]
  }
  return backward
}
