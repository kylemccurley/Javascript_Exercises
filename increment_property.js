function incrementProperty(obj, key) {
  for (let name in obj) {
    if (name === key) {
      obj[name]++
      return obj[name];
    }
  }

  obj[key] = 1;
  return obj[key];
}

let wins = {
  steve: 3,
  susie: 4,
};


incrementProperty(wins, 'susie');   // 5
wins;                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
wins;                               // { steve: 3, susie: 5, lucy: 1 }
