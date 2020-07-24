function stringToInteger(str) {
  let index = --str.length;
  let outcome = 0;

  for(let i = 1; index >= 0; i *= 10, index--) {
    let digit = str.charCodeAt(index) - 48;
    outcome += (digit * i);
  }

  return outcome;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
