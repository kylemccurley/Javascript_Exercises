function indexOf(firstString, secondString) {
   for (idx1 = 0; idx1 < firstString.length; idx1++) {
    if (firstString[idx1] == secondString[0]) {
      for (offset = 0; offset < secondString.length; offset++) {
        if (firstString[idx1 + offset] != secondString[offset]) {
          return -1;
        }
      }
      return idx1;
    }
  }
}

function lastIndexOf(firstString, secondString) {
  let index;
    for (idx1 = 0; idx1 < firstString.length; idx1++) {
    if (firstString[idx1] == secondString[0]) {
      for (offset = 0; offset < secondString.length; offset++) {
        if (firstString[idx1 + offset] != secondString[offset]) {
          return -1;
        }
      }
      index = idx1;
    }
  }
  return index;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1
