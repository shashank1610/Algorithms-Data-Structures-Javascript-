// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let words = str.split(" ");
  capsLetter = "";
  capStrArr = []
  for (word of words) {
    capsLetter = word[0].toUpperCase();
    word = capsLetter + word.slice(1);
    capStrArr.push(word)
  }
  return capStrArr.join(" ")
}
capitalize("look, it is working!");
module.exports = capitalize;
