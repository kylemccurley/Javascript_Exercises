const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

function isItemAvailable(id, transactions) {
  let idTransactions = transactionsFor(id, transactions);
  let sum = 0;
  for (let i = 0; i < idTransactions.length; i++) {
    let transaction = idTransactions[i];
    if (transaction.movement === 'in') {
      sum += transaction.quantity;
    } else if (transaction.movement === 'out') {
      sum -= transaction.quantity;
    }
  }

  return sum > 0;

  function transactionsFor(inventoryItem, transactions) {
    return transactions.filter(({id}) => id === inventoryItem);
  }
}

isItemAvailable(101, transactions);     // false
isItemAvailable(105, transactions);     // true
