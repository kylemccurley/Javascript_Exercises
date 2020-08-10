function multiplyAllPairs(arr1, arr2) {
  let sorter = (el1, el2) => {
    if (el1 > el2) {
      return 1;
    } else if (el1 < el2) {
      return -1;
    } else {
      return 0;
    }
  }

  let products = [];

  for (let idx1 = 0; idx1 < arr1.length; idx1++) {
    for (let idx2 = 0; idx2 < arr2.length; idx2++) {
      products.push(arr1[idx1] * arr2[idx2]);
    }
  }

  return products.sort(sorter);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
