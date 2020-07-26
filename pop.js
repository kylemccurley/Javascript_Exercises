function pop(arr) {
  let finalIndex = arr.length - 1;
  arr.splice(finalIndex, finalIndex);
  return arr;
}

let arr = [1, 2, 3, 4];
pop(arr);
console.log(arr);
