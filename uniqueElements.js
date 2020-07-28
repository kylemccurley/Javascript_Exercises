function uniqueElements(arr) {
  let uniqueNums = [];
  for (let idx = 0; idx < arr.length; idx++) {
    let char = arr[idx];
    if (!uniqueNums.includes(char)) {
      uniqueNums.push(char);
    }
  }

  return uniqueNums;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]
