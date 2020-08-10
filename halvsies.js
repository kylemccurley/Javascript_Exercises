function halvsies(arr) {
  let splitArrays = [];
  let middleIdx = Math.ceil(arr.length / 2);
  if (middleIdx < 0) {
    middleIdx = 0;
  }

  splitArrays.push(arr.slice(0, middleIdx));
  splitArrays.push(arr.slice(middleIdx, arr.length));
  return splitArrays;
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
