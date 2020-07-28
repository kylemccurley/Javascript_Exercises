function pop(arr) {
  let finalIdx = arr.length-1;
  let removed = arr.splice(finalIdx, 1);

  arr = arr.splice(finalIdx, 1);
  return removed[0];
}

function push(array, ...args) {
  for(let i = 0; i < args.length; i++) {
    let arg = args[i];
    array[array.length] = arg;
  }

  return array.length;
}

// pop
const array1 = [1, 2, 3];
pop(array1);                        // 3
console.log(array1);                // [1, 2]
pop([]);                           // undefined
pop([1, 2, ['a', 'b', 'c']]);      // ["a", "b", "c"]

const array2 = [1, 2, 3];
push(array2, 4, 5, 6);              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
push([1, 2], ['a', 'b']);          // 3
push([], 1);                       // 1
push([]);                          // 0
