// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  chunked = [];
  index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}
module.exports = chunk;

// function chunk(array, size) {
//     newArr = [];
//     i = 0;
//     c = 1;
//     newArr.push([]);
//     for (let j = 0; j < array.length; j++) {
//       newArr[i].push(array[j]);
//       if (c == size && j != array.length - 1) {
//         newArr.push([]);
//         i++;

//         c = 0;
//       }
//       c++;
//     }
//     return newArr;
//   }
