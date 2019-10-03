// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return (str == str.split('').reverse().join('')) ? true : false
}
module.exports = palindrome;


// function palindrome(str) {
//     flag = true;
//     let len = str.length - 1;
//     for (let i = 0; i <= (str.length - 1) function reverseInt(n) {
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
  }/ 2; i++) {
//       if (str[i] != str[len]) {
//         flag = false;
//         break;
//       }
//       len--;
//     }
//     console.log(flag);
//     return flag;
//   }