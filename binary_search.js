const yellowPages = ['Apple Store', 'Bags Galore',
                     'Bike Store',  'Donuts R Us',
                     'Eat a Lot',   'Good Food',
                     'Pasta Place', 'Pizzeria',
                     'Tiki Lounge', 'Zooper'];

function binarySearch(arr, search) {
  "use strict";
  let terms = arr.slice();
  let middleIdx;
  let middle;
  while (!(terms.length === 0)) {
    middleIdx = Math.floor(terms.length / 2);
    middle = terms[middleIdx];
    if (middle === search) {
      return arr.indexOf(middle);
    } else if (middle < search) {
      terms.splice(0, middleIdx + 1);
    } else if (middle > search) {
      terms.splice(middleIdx, terms.length);
    }
  }

  return -1;
}

binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6
