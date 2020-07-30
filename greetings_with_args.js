function greetings(...args) {
  console.log(`Hello, ${args[0].join(' ')}! Nice to have a ${args[1]['title']} ${args[1]['occupation']} around.`)
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
//Hello, John Q Doe! Nice to have a Master Plumber around.
