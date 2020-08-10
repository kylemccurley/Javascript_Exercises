function buyFruit(groceries) {
  let groceryItems = [];
  for (let argIdx = 0; argIdx < groceries.length; argIdx++) {
    let transaction = groceries[argIdx];
    let fruit = transaction[0];
    let quantity = transaction[1];
    for (let i = 0; i < quantity; i++) {
      groceryItems.push(fruit);
    }
  }

  return groceryItems;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
