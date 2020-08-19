function myOwnEvery(array, func) {
  for (let char of array) {
    if (!isAString(char)) {
      return false;
    }
  }
  return true;
}

let isAString = value => typeof value === 'string';
myOwnEvery(['a', 'a234', '1abc'], isAString);       // true
myOwnEvery(['a', 2, '1abc'], isAString);       // true
