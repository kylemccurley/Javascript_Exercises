function sum(num) {
  return String(num).split('').reduce(adder);

  function adder(acc, digit) {
    return Number(acc) + Number(digit);
  }
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
