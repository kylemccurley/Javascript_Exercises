function transpose(matrix) {
  let transformedMatrix = [];
  for (let columnIndex = 0; columnIndex < matrix[0].length; columnIndex++) {
    let newRow = [];
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
      let newElement = matrix[rowIndex][columnIndex];
      newRow.push(newElement);
    }
    
    transformedMatrix.push(newRow);
   }

  return transformedMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
