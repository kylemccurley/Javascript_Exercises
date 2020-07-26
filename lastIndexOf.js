function lastIndexOf(arr, value) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == value) {
      index = i;
    }
  }

  return index;
}

lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);        // -1
