function incrementProperty(obj, name) {
  if (Object.keys(obj).indexOf(name) !== -1) {
    obj[name] += 1;
  } else {
    obj[name] = 1;
  }

  return obj[name];
}

let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
wins;                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
wins;                               // { steve: 3, susie: 5, lucy: 1 }
