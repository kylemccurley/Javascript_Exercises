function multiplyList(arr1, arr2) {
  let outcome = [];
  for (let i = 0; i < arr1.length; i++) {
    outcome.push(arr1[i] * arr2[i]);
  }

  return outcome;
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
