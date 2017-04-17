const bubbleSort = function (array) {
  var testSorted = function (array) {
    const wasSorted = array.reduce((isSorted, value, index) => {
      if (array[index + 1] !== undefined) {
        if (array[index] > array[index + 1]) {
          const old = array[index];
          array[index] = array[index + 1];
          array[index + 1] = old;
          return false;
        }
      }
      return isSorted;
    }, true);
    if (wasSorted) {
      return array;
    }
    return testSorted(array);
  };
  return testSorted(array);
};
