function repeatingStrings(string, times) {
  if (!Number.isInteger(times)) return undefined;
  if (times < 0) return undefined;
  
  let outcome = '';
  for(i = 0; i < times; i++) {
    outcome += string;
  }

  return outcome;
}

console.log(repeatingStrings('abc', 2));
