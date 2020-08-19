function myMap(array, func) {
  let outcome = [];

  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    outcome.push(func[el]);
  }

  return outcome;
}

let plusOne = n =>n + 1;
myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]
