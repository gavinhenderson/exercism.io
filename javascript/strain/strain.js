function keep(arr, func) {
  let newArr = [];
  arr.forEach(current => {
    if(func(current)){
      newArr.push(current);
    }
  })

  return newArr;
}

function discard(arr, func) {
  let newArr = [];
  arr.forEach(current => {
    if(!func(current)){
      newArr.push(current);
    }
  })

  return newArr;
}

module.exports = { keep, discard }
