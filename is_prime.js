function isPrime(x) {
  if (x === 1 || x === 0) return false;

  for (i = 2; i < x; i++) {
    if (x % i == 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false
