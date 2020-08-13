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

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
