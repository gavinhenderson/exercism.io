function getUniqueLetters(puzzle) {
  const stripped = puzzle.replace(/[+=]/g, "").toUpperCase();
  const unique = [];
  for (let i = 0; i < stripped.length; i++) {
    const letter = stripped[i];
    if (unique.indexOf(letter) == -1) unique.push(letter);
  }
  return unique;
}

const numbers = "0123456789".split("").map(n => parseInt(n));
function pad(a, b) {
  return (1e15 + a + "").slice(-b);
} // https://gist.github.com/1180489

function getAllPermutations(uniqueLetters) {
  let permutations = [];

  const isUnique = str => new Set(str).size == str.length;

  for (let i = 0; i < Math.pow(10, uniqueLetters.length); i++) {
    const current = pad(i, uniqueLetters.length);
    if (!isUnique(current)) continue;
    const newPerm = {};
    for (let j = 0; j < current.length; j++) {
      newPerm[uniqueLetters[j]] = current[j];
    }
    permutations.push(newPerm);
  }
  return permutations;
}

function convertToNo(scores, word) {
  let total = 0;
  for (let i = 0; i < word.length; i++) {
    total += scores[word[i]].toString();
  }
  return parseInt(total);
}

function isCorrect(scores, operands, total) {
  nTotal = convertToNo(scores, total);

  let operandsTotal = 0;
  operands.forEach(current => {
    operandsTotal += convertToNo(scores, current);
  });

  if (nTotal == operandsTotal) return true;
  return false;
}

function parseScores(perm) {
  for (let letter in perm) {
    perm[letter] = parseInt(perm[letter]);
  }
  return perm;
}

function isNonZero(scores, operands, total) {
  if (scores[total[0]] == 0) {
    return false;
  }
  for (let i = 0; i < operands.length; i++) {
    if (scores[operands[i][0]] == 0) {
      return false;
    }
  }
  return true;
}

module.exports = function(puzzle) {
  const stripped = puzzle.replace(/\s/g, "");
  const allPermutations = getAllPermutations(getUniqueLetters(stripped));
  const [operandsList, total, ...rest] = stripped.split("==");
  if (rest.length !== 0) throw new Error("You have to many equals");
  const operands = operandsList.split("+");

  for (let i = 0; i < allPermutations.length; i++) {
    const currentPerm = allPermutations[i];
    if (isCorrect(currentPerm, operands, total)) {
      if (isNonZero(currentPerm, operands, total)) {
        return parseScores(currentPerm);
      }
      continue;
    }
  }

  return null;
};
