function penultimate(str) {
  let words = str.split(' ');
  let index = words.length - 2;

  return words[index];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
