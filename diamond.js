function diamond(n) {
  generateTopHalf();
  generateBottomHalf();

  function generateBottomHalf() {
    for (let stars = (n - 2); stars > 0; stars -= 2) {
      let spaces = n - stars;
      console.log(generateSpaces(spaces / 2) + generateStars(stars) + generateSpaces(spaces));
    }
  }

  function generateTopHalf() {
    for (let stars = 1; stars <= n; stars += 2) {
      let spaces = n - stars;
      console.log(generateSpaces(spaces / 2) + generateStars(stars) + generateSpaces(spaces));
    }
  }

  function generateSpaces(size) {
    let outcome = '';
    for (let i = 0; i < size; i++) {
      outcome += ' ';
    }

    return outcome;
  }

  function generateStars(size) {
    let outcome = '';
    for (let i = 0; i < size; i++) {
      outcome += '*';
    }

    return outcome;
  }
}

diamond(1);
diamond(3);
diamond(9);
