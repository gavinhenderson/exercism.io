function toBase(decNum, base){
  let tmp = decNum;
    const result = [];
    while (tmp) {
      result.unshift(tmp % base);
      tmp = Math.floor(tmp / base);
    }
  return result;
}

function isValidBase(base) {
  return !base || base < 2 || Math.floor(base) !== base;
};

function isInputValid(array, base) {
  if (!array || !array.length) {
    return false;
  }
  const val = base - 1;
  for (let i = 0, n = array.length; i < n; i++) {
    const tmp = array[i];
    if (tmp > val || tmp < 0) {
      return false;
    }
  }
  return true;
};

module.exports = class {
  constructor(){}

  convert(originalArr, baseFrom, baseTo) {
    if (isValidBase(baseFrom)) {
      throw new Error('Wrong input base');
    }
    if (isValidBase(baseTo)) {
      throw new Error('Wrong output base');
    }
    const regexp = new RegExp('^0.', 'g');
    const str = originalArr.join('');
    if (str.match(regexp)
      || !isInputValid(originalArr, baseFrom)) {
      throw new Error('Input has wrong format');
    }

    if(originalArr.length == 0) { throw new Error('Input has wrong format'); }
    else if(originalArr.join("") == "0"){ return [0]; }
    else if(originalArr.join("") == "1"){ return [1]; }

    let decimalValue = originalArr.reduce((accumulator, value) => {
      return accumulator * baseFrom + value;
    }, 0);

    return toBase(decimalValue, baseTo);
  }
}
