function diamond(n) {
  generateTopHalf();
  generateBottomHalf();

  function generateBottomHalf() {
    for (let stars = (n - 2); stars > 0; stars -= 2) {
      let spaces = ((n - stars) / 2);
      console.log(generateSpaces(spaces) + generateStars(stars) + generateSpaces(spaces));
    }
  }

  function generateTopHalf() {
    for (let stars = 1; stars <= n; stars += 2) {
      let spaces = ((n - stars) / 2);
      console.log(generateSpaces(spaces) + generateStars(stars) + generateSpaces(spaces));
    }
  }

  function generateSpaces(size) {
    return repeat(size, ' ');
  }

  function generateStars(size) {
    return repeat(size, '*');
  }

  function repeat(number, char) {
    let outcome = '';
    for (let time = 0; time < number; time++) {
      outcome += char;
    }
    
    return outcome;
  }
}

diamond(1);
diamond(3);
diamond(9);
