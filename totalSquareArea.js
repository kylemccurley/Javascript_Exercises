let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
totalSquareArea(rectangles);    // 121

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(findSquares);
  let areas = squares.map(calculateAreas);
  return areas.reduce(adder);

  function adder(acc, value) {
    return acc + value;
  }
  
  function calculateAreas(rect) {
    let height = rect[0];
    let width = rect[1];

    return width * height;
  }

  function findSquares(rect) {
     let height = rect[0];
     let width = rect[1];
     return height === width;
  }
}
