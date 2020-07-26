function arraysEqual(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  for(let idx = 0; idx < arr1.length; idx++) {
    let char1 = arr1[idx];
    let char2 = arr2[idx];
    if (char1 != char2) {
      return false;
    }
  }

  return true;
}

arraysEqual([1], [1]);                               // true
arraysEqual([1], [2]);                               // false
arraysEqual([1, 2], [1, 2, 3]);                      // false
arraysEqual([1, 'hi', true], [1, 'hi', true]);       // true
arraysEqual([1, 'hi', true], [1, 'hi', false]);      // false
arraysEqual([1, 'hi', true], [1, 'hello', true]);    // false
arraysEqual([1, 'hi', true], [2, 'hi', true]);       // false
