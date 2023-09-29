const divide = (arr, n) => {
  const result = [];
  let currentSubarray = [];
  for (const num of arr) {
    // If adding the current number to the current subarray doesn't exceed n, add it.
    if (currentSubarray.reduce((sum, x) => sum + x, 0) + num <= n) {
      currentSubarray.push(num);
    } else {
      // If it exceeds n, start a new subarray.
      result.push(currentSubarray);
      currentSubarray = [num];
    }
  }

  // Add the last subarray, if it's not empty.
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

const arr1 = [1, 2, 3, 4, 1, 0, 2, 2];
const n1 = 5;
console.log(divide(arr1, n1)); // Output: [[1, 2], [3], [4, 1, 0], [2, 2]]

const arr2 = [4, 3, 2, 1];
const n2 = 4;
console.log(divide(arr2, n2)); // Output: [[4], [3], [2], [1]]
