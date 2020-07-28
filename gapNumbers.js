function missing(arr) {
  let minimum = findMinimum();
  let maximum = findMaximum();
  let gaps = [];
  for(let counter = (minimum + 1); counter < maximum; counter++) {
    if (!arr.includes(counter)) {
      gaps.push(counter);
    }
  }

  return gaps;

  function findMinimum() {
    let currentMinimum = arr[0];
    for (let idx = 0; idx < arr.length; idx++) {
      let minCandidate = arr[idx];
      if (minCandidate < currentMinimum) {
        currentMinimum = minCandidate;
      }
    }

    return currentMinimum;
  }

  function findMaximum() {
    let currentMaximum = arr[0];
    for (let idx = 0; idx < arr.length; idx++) {
      let maxCandidate = arr[idx];
      if (maxCandidate > currentMaximum) {
        currentMaximum = maxCandidate;
      }
    }

    return currentMaximum;
  }
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []
