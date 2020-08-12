function merge(arr1, arr2) {
  let idx1 = 0;
  let idx2 = 0;
  let el1 = arr1[idx1];
  let el2 = arr2[idx2];
  let sortedArr = [];
  while (el1 || el2) {
    if (!el1) {
      sortedArr.push(el2);
      idx2++
    } else if (!el2) {
      sortedArr.push(el1);
      idx1++;
    } else if (el1 < el2) {
      sortedArr.push(el1);
      idx1++;
    } else if (el2 < el1) {
      sortedArr.push(el2);
      idx2++;
    }

    el1 = arr1[idx1];
    el2 = arr2[idx2];
  }

  console.log(sortedArr);
  return sortedArr;
}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]
