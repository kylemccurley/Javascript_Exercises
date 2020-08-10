function sumOfSums(arr) {
  let sum = 0;
  for (let idxMax = 0; idxMax < arr.length; idxMax++) {
    for (let idx2 = 0; idx2 <= idxMax; idx2++) {
      sum += (arr[idx2])
    }
  }

  return sum;
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
