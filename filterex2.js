function myFilter(arr, func) {
  let filteredValues = [];
  arr.forEach(value => {
    if (func(value)) {
      filteredValues.push(value);
    }
  })

  return filteredValues
}

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]);  // [ 3, 5, 18, 15 ]
