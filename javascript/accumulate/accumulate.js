module.exports = (arr, func) => {
  let newArr = [];
  arr.forEach( current => {
    newArr.push(func(current));
  })
  return newArr;
}
