function octalToDecimal(numberString) {
  return numberString.split('').map(value => { return Number(value)}).reduce(sum);

  function sum(acc, digit, idx) {
    return acc + (Number(digit) * Math.pow(8, (numberString.length - 1) - idx));
  }
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9
