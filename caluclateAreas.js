let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(rectangleArr) {
  let areas = rectangleArr.map(rect => {
                let height = rect[0];
                let width = rect[1];
                return width * height;
              });

  return areas.reduce(adder);
  function adder(acc, value) {
    return acc + value
  }
}

totalArea(rectangles);    // 141

// What is the abstraction: Reduction
// Within totalArea: 
//  Calculate the area: Store as area
//  Pass sum function into reduction function
  // Reduction function: sum 
  //  Input: Accumulator, area:
  //  Output: acc + area
/*
Breaking Down the Problem: 
  Transformation: Transform each sub-array into an area. (map).
  Reduction: Add all of the areas from the  transformed array (reduce).
*/
