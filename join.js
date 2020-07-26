function join(arr, separator) {
  let outcome = '';
  for(let idx = 0; idx < (arr.length - 1); idx++) {
    let char = arr[idx];
    outcome += (char + separator);
  }

  outcome += arr[arr.length - 1];
  return outcome;
}

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'
