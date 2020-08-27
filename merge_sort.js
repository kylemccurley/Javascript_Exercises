/*
Merge sort is a recursive sorting algorithm that works by breaking down an array's elements into nested subarrays, then combining those nested subarrays back together in sorted order. It is best explained with an example. Given the array [9, 5, 7, 1], let's walk through the process of sorting it with merge sort. We'll start off by breaking the array down into nested subarrays:

[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]]
We then work our way back to a flat array by merging each pair of nested subarrays back together in the proper order:

[[[9], [5]], [[7], [1]]] -->
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]
Write a function that takes an array, and returns a new array that contains the values from the input array in sorted order. The function should sort the array using the merge sort algorithm as described above. You may assume that every element of the array will be of the same data type—either all numbers or all strings.

Feel free to use the merge function you wrote in the previous exercise.

Input: Array of numbers
Output: New Array in sorted order

Rules/Requirements:
  - Every element of the array will be of the same data type
    - Strings/numbers
  - Use Merge Search:
    - Split the Array in half
    - 
*/

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  
  let middleIdx;
  if (arr.length % 2 === 0) {
    middleIdx = arr.length / 2;
  } else {
    middleIdx = Math.floor(arr.length / 2)
  }

  let sub1 = mergeSort(arr.slice(0, middleIdx));
  let sub2 = mergeSort(arr.slice(middleIdx, arr.length));

  return merge(sub1, sub2);

  function merge(array1, array2) {
    const copy1 = array1.slice();
    const copy2 = array2.slice();
    const result = [];

    while (copy1.length > 0 && copy2.length > 0) {
      result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
    }

    return result.concat(copy1.length === 0 ? copy2 : copy1);
  }
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
