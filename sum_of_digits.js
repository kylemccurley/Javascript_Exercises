function sum(num) {
  let sum = 0;
  let numStr = String(num);
  for (let i = 0; i < numStr.length; i++) {
    let digit = Number(numStr[i]);
    sum += digit;
  }

  return sum;
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
