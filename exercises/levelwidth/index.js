// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
const Node = require("./node");

function levelWidth(root) {
  let counters = [];
  let arr = [];
  arr.push(root);
  arr.push("s");
  let i = 0;
  while (arr.length) {
    let node = arr.shift();
    if (node != "s") {
      arr.push(...node.children);
      if (counters[i] == undefined) {
        counters[i] = 1;
      } else {
        counters[i] += 1;
      }
    } else {
      if (arr.length == 0) {
        break;
      }
      arr.push("s");
      i = i + 1;
    }
  }
  return counters;
}

module.exports = levelWidth;
