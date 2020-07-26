function firstNOf(arr, count) {
  let outcome = [];

  for(let idx = 0; idx < count; idx++) {
    let el = arr[idx];
    outcome.push(el);
  }

  return outcome;
}

let digits = [4, 8, 15, 16, 23, 42];
firstNOf(digits, 3);    // returns [4, 8, 15]
