// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charArr = [];
  for (character of str) {
    if (charArr[character] >= 0) {
      charArr[character] += 1;
    } else {
      charArr[character] = 1;
    }
  }
  max = -123456789;
  maxCh = "";
  for (char in charArr) {
    if (max < charArr[char]) {
      max = charArr[char];
      maxCh = char;
    }
  }
  return maxCh
}

module.exports = maxChar;
