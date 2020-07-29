function copyProperties(hal, sal) {
  let counter = 0;
  for (let property in hal) {
    let value = hal[property];
    sal[property] = value;
    counter++
  }

  return counter;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
copyProperties(hal, sal);  // 2
sal;                       // { model: 9000, enabled: true }
