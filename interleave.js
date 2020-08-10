function interleave(arr1, arr2) {
  let interleavedArrays = [];
  for (let idx = 0; idx < arr1.length; idx++) {
    let arr1El = arr1[idx];
    let arr2El = arr2[idx];
    interleavedArrays.push(arr1El, arr2El);
  }

  return interleavedArrays;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
