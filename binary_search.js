/*
Input: Array of Numbers
Output: Index of the Number if Found

Rules/Requirements:
  - Can I use the method: indexOf?
  - Binary Search:
    - Find the middle Value of the array:
      - If middle value === Search Term
        - Return the middle value
      - Middle value > Search Term:
        - Delete the bottom half from middle (inclusive);
      - Middle Value < Search Term:
        - Delete the upper half (inclusive)
  - Keeping track of the index:
    - Initializing the index to 0
    - When the bottom/top is deleted:
      - Add the size of that half to the index
  - Finding the middle value:
    - If there are 2 values in the middle:
      - Select the element at the bottom of the 2 middle values
      - Middle: [2, 3] -> 2

  Data Structure:
    - Arrays: Containing all of the raw input:
    - Numbers: To keep track of the index of the middle element

  Algorithm: Given an array of Numbers:
    - Initialize a variable: index:
      - Set to 0;
    - Intialize a variable: offset
      - Set to 0;
    Loop:
      - Calculate the middle index:
        - Array length is even?
          - Yes: Divide length by 2; Subtract 1;
          - No: Divide the length by 2; Round down (Math.floor);
        - Assign the calculated number to the index variable
      - Is the middle element equal to the search term:
        - Return index + offset (index + array.splice(0, middleIdx + 1)
      - Is the middle element Larger than the search term?
        - Delete the lower half of the array (Array#splice)
        - Add the size of the lower half splice to offset
      - Is the middle element smaller than the search term?
        - Delete the upper half of the array (Array#splice)
      - If the array is empty:
        - Return -1
*/

function binarySearch(arr, search) {
  arr = arr.slice(0, arr.length);
  let index = 0;
  let offset = 0;
  let element;
  while (!(arr.length === 0)) {
    let middle;
    if (arr.length % 2 === 0) {
      middle = (arr.length / 2) - 1;
    } else {
      middle = Math.floor(arr.length / 2);
    }

    let middleElement = arr[middle];
    if (middleElement === search) {
      return middle + offset;
    } else if (middleElement > search) {
      arr.splice(middle, arr.length);
    } else if (middleElement < search) {
      offset += arr.splice(0, middle + 1).length;
    }
  }

  return -1;
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6
