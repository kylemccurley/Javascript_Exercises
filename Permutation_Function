/* Given Two Strings, Write a Function That Returns True or false if they are both permutations of each other: */

function perm(str1, str2) {
  let str2Length = str2.length;
  if(str1.length != str2Length) return false;

  let index1 = 0;
  let index2 = str2Length - 1;

  while(index2 >= 0) {
    let char1 = str1[index1++];
    let char2 = str2[index2--];

    if (char1 != char2) return false;
  }
  
  return true
}

console.log(perm('he', 'esd'));

/* Edge Cases */
