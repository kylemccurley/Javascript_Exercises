function slice(array, begin, end) {
  let outcome = [];
  let idxSize = (array.length - 1);
  if (begin > idxSize) {
    var start = idxSize;
  } else {
    var start = begin;
  }

  if (end > idxSize) {
    var stop = (idxSize + 1);
  } else {
    var stop = end;
  }

  for (let idx = start; idx < stop; idx++) {
    let char = array[idx];
    outcome.push(char);
  }

  console.log(outcome);
  return outcome;
}

slice([1, 2, 3], 1, 2);               // [2]
slice([1, 2, 3], 2, 0);               // []
slice([1, 2, 3], 5, 1);               // []
slice([1, 2, 3], 0, 5);               // [1, 2, 3]

const arr1 = [1, 2, 3];
slice(arr1, 1, 3);                     // [2, 3]
arr1;                                  // [1, 2, 3]
