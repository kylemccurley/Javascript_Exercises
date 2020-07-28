function reverse(inputForReversal) {
  if (typeof inputForReversal == 'string') {
    var output = '';
  } else {
    var output = [];
  }

  for (let i = (inputForReversal.length - 1); i > -1; i--) {
    let char = inputForReversal[i];
    if (typeof inputForReversal == 'string') {
      output += char;
    } else {
      output.push(char);
    }
  }

  return output;
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]
