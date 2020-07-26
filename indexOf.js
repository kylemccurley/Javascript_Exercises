function indexOf(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (char == value) {
      return i;
    }
  }

  return -1;
}

indexOf([1, 2, 3, 3], 3);         // 2
indexOf([1, 2, 3], 4);            // -1
