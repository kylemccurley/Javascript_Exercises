function stringToSignedInteger(string) {
  let number_form = processSign(string);
  let num = stringToInteger(number_form[1]);
  if (number_form[0] == '+') {
    return num;
  } else {
    return (0 - num);
  }

  function stringToInteger(string) {
    const DIGITS = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9
    };
    let arrayOfDigits = string.split("").map(char => DIGITS[char]);
    let value = 0;
    arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
    return value;
  }

  function processSign(str) {
    let outcome = [];

    if (str[0] == '-') {
      outcome.push('-');
      let num = str.slice(1, (str.length));
      outcome.push(num);
    } else if (str[0] == '+') {
      outcome.push('+');
      let num = str.slice(1, (str.length));
      outcome.push(num);
    } else {
      outcome.push('+');
      outcome.push(str);
    }

    return outcome
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
