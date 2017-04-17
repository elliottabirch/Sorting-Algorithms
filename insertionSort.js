function insertionSort(array) {
  // iterate through array, starting at 1
  for (var i = 1; i < array.length; i++) {
    // iterate through array backwards, starting at current index i
    for (var j = i; j >= 0; j--) {
      // if index is 0, insert add i to front of array
      if (j === 0) {
        array.unshift(array.splice(i, 1)[0]);
      // if order is greater than, insert here.
      } else if (array[i].value > array[j - 1].value) {
        array.splice(j, 0, array.splice(i, 1)[0]);
        break;
      // if current is equal to, compare order.
      } else if (array[i].value === array[j - 1].value && array[i].order > array[j - 1].order) {
        array.splice(j, 0, array.splice(i, 1)[0]);
        break;
      }
    }
  }
  return array;
}
