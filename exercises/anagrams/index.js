// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let trimmedStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  let trimmedStringB = stringB.replace(/[^\w]/g, "").toLowerCase();
  let mapA = {};
  let mapB = {};
  let flag = true;
  let found = false;
  for (charA of trimmedStringA) {
    if (mapA[charA] == undefined) {
      mapA[charA] = 1;
    } else {
      mapA[charA] = mapA[charA] + 1;
    }
  }

  for (charB of trimmedStringB) {
    if (mapB[charB] == undefined) {
      mapB[charB] = 1;
    } else {
      mapB[charB] += 1;
    }
  }
  if (Object.keys(mapA).length != Object.keys(mapB).length) {
    return false;
  }
  for (char in mapA) {
    if (mapA[char] != mapB[char]) return false;
    return true;
  }

  return flag;
}
module.exports = anagrams;
