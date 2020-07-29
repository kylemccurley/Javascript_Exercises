function objectHasProperty(pets, name) {
  for (let pet in pets) {
    if (pet == name) {
      return true;
    }
  }

  return false;
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true
