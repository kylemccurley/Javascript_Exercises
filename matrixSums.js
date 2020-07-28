function matrixSums(arr) {
  let outcome = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  for(let i = 0; i < arr.length; i++) {
    let subArray = arr[i];
    let sum = subArray.reduce(reducer);
    outcome.push(sum);
  }

  return outcome;
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]
