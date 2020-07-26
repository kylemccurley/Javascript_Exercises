function unshift(arr, value) {
  for(let i = arr.length; i > 0; i--) {
    arr[i] = arr[i-1];
  }

  arr[0] = value;
  return arr;
}

let count = [1, 2, 3];
unshift(count, 0);
count; 
