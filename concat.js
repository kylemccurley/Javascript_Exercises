function concat(arr1, arr2) {
  let outcome = [];
  for(let idx = 0; idx < arr1.length; idx++) {
    let char = arr1[idx];
    outcome.push(char);
  }
  for (let idx = 0; idx < arr2.length; idx++) {
    let char = arr2[idx];
    outcome.push(char);
  }

  return outcome;
}

concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]
