// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    numStr = n.toString()
  if (n >= 0) {
    return parseInt(numStr
      .split("")
      .reverse()
      .join(""));
  } else {
    rev = numStr
      .substr(1)
      .split("")
      .reverse()
      .join("");
    rev = numStr[0] + rev;

    return parseInt(rev);
  }
}

module.exports = reverseInt;
