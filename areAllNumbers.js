function areAllNumbers(array) {
  for (let char of array) {
    if (!isANumber(char)) {
      return false;
    }
  }

  return true;
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

areAllNumbers([1, 5, 6, 7, '1']);             // false
areAllNumbers([1, 5, 6, 7, 1]);               // true
areAllNumbers([1, 5, 6, 7, NaN]);             // false
