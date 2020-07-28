function shift(arr) {
  if (arr.length == 0) {
    return undefined;
  }

  let firstChar = arr[0];
  return (arr.splice(0, 1)[0]);
}

function unshift(arr, ...args) {
  // For each argument:
    // Set arg:
      // To the nth value in the args array
    // Shift each element in arr over by 1
    // Set the first element to arg

  for (let i = 0; i < args.length; i++) {
    let arg = args[i];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i + 1] = arr[i];
    }
  
    arr[0] = arg;
  }

  return arr.length;
}

shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

const testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]
