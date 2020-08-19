let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(obj => {
    return {name: formatName(obj['name']), country:'Canada', active: obj['active']};
  });

  function formatName(name) {
    let words = name.split(' ');
    let formattedWords = [];
    for (let word of words) {
      let formattedWord = word.match(/[a-z]/gi).join('');
      formattedWords.push(formattedWord[0].toUpperCase() + formattedWord.slice(1, formattedWord.length));
    }

    return formattedWords.join(' '); 
  }
}

processBands(bands);
console.log(bands);

// should return:
/*
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
*/
/*
The band countries are wrong:

all the bands should have 'Canada' as the country.
The band name should have all words capitalized.
Remove all dots from the band name
*/
