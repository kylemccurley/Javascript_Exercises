function showMultiplicativeAverage(arr) {
  let multiplier = (el1, el2) => {
    return el1 * el2;
  }

  return (arr.reduce(multiplier) / arr.length).toFixed(3);
}

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
