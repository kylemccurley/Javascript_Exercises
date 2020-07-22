function multiplesOfThreeAndFive() {
  const DIVISOR_ONE = 3;
  const DIVISOR_TWO = 5;

  for(i = 1; i <= 100; i++) {
    if (i % DIVISOR_TWO == 0 && i % DIVISOR_ONE == 0) {
      console.log(String(i) + '!');
    } else if (i % DIVISOR_TWO == 0 || i % DIVISOR_ONE == 0)  {
      console.log(String(i));
    }
  }
}

multiplesOfThreeAndFive();
