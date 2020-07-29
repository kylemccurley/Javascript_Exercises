let min = 20;
let max = 10;

function randomNum(min, max) {
  let diff = Math.abs(min - max);
  return (Math.floor(diff * Math.random()) + diff);
}

console.log(randomNum(min, max));
