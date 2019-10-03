// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}
module.exports = reverse;

// function reverse(str) {
//   let revStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// }

// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }
