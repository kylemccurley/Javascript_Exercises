var logMultiples = (x) => {
  for (i = 99; i >= x; i -= 2 ) {
    if (i % x === 0) console.log(i);
  }
}

logMultiples(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

logMultiples(21);
// output (3x and 1x)
// 63
// 21
