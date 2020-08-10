function union(arr1, arr2) {
  let outcome = [];
  let sorter = (el1, el2) => {
    if (el1 > el2) {
      return 1;
    } else if (el2 > el1) {
      return -1;
    } else {
      return 0;
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    let arr1El = arr1[i];
    let arr2El = arr2[i];

    if (!outcome.includes(arr1El)) {
      outcome.push(arr1El);
    }
    
    if (!outcome.includes(arr2El)) {
      outcome.push(arr2El);
    }
  }

  return outcome.sort(sorter);
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
