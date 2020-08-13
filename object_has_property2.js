let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

function objectHasProperty(obj, name) {
  for(key of Object.keys(obj)) {
    if (key === name) {
      return true;
    }
  }

  return false;
}

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true
