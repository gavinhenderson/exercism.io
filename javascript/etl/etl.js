module.exports = class {
  constructor() {}

  transform(old) {
    let newTransform = {};
    for(let key in old) {
      old[key].forEach(current => {
        newTransform[current.toLowerCase()] = parseInt(key);
      });
    }
    return newTransform;
  }
}
