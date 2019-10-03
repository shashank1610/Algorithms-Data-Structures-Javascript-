// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    let minVal = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minVal) {
        minIndex = j;
        minVal = arr[j];
      }
    }
    if (minIndex != i) {
      tmp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = tmp;
    }
  }
  return arr;
}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
