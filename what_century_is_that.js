function century(year) {
  let century = String(Math.ceil(year / 100));
  let finalDigit = century[century.length - 1];
  if ((century % 100) >= 10 && (century % 100) <=  20) {
    century += 'th'
  } else if(finalDigit == '1') {
    century += "st"
  } else if (finalDigit == '2') {
    century += 'nd';
  } else if (finalDigit == '3') {
    century += 'rd';
  } else {
    century += 'th';
  }

  return century
}

console.log(century(2000) == "20th");
console.log(century(2001) == "21st");
console.log(century(1965) == "20th");
console.log(century(256) == "3rd");
console.log(century(5) == "1st");
console.log(century(10103) == "102nd");
console.log(century(1052) == "11th");
console.log(century(1127) == "12th");
console.log(century(11201) == "113th");

for (let i = 1; i < 5000; i += 100) {
  console.log(century(i));
}
