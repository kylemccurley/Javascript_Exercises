function sequence(count, multipleOf) {
  if (count < 1) {
    return [];
  }

  let outcome = [];
  for (let i = multipleOf; ; i += multipleOf) {
    outcome.push(i);
    if (outcome.length === count) {
      return outcome;
    }
  }
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
