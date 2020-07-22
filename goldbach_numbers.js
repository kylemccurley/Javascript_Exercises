function goldbachNum(num) {
  for(i = 1; i <= num; i++) {
    console.log(!!isPrime(i));
  }
}

function isPrime(num) {
  if (num === 1 || num === 0) return false;
  for(i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

goldbachNum(5);
