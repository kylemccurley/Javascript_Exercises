function luhn(numStr) {
  const TRIMMING_REGEX = /[0-9]+/g;
  let key = numStr.match(TRIMMING_REGEX).join('');
  
  let doubled = key.split('').map((digit, idx) => {
    digit = Number(digit);
    if (idx % 2 === 0) {
      return double(digit);
    } else {
      return digit;
    }
  });
  
  
  let sum = doubled.reduce(adder);
  return sum % 10 === 0 ? 'Valid' : 'Invalid';
  
  function adder(el1, el2) {
    return el1 + el2;
  }
  
  function double(digit) {
    let multiplied = digit * 2;
    return (multiplied > 9) ? multiplied - 9: multiplied;
  }
}

console.log(luhn('17692'));
console.log(luhn('1333'));
console.log(luhn('1341'));
console.log(luhn('2683'));
