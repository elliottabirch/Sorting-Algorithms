function mergeSort(arr) {
  const splitArray = arr.map(val => [val]);
  const mergeArrays = function (arr1, arr2) {
    const storage = [];
    arr1.forEach((val, index, array1) => {
      for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] <= array1[index]) {
          storage.push(arr2.splice(0, 1)[0]);
          i--;
        } else break;
      }
      storage.push(val);
    });
    return storage.concat(arr2);
  };

  const buildResults = function (array) {
    if (array[0].length === arr.length) {
      return array[0];
    }
    const results = [];
    array.forEach((val, index, givenArray) => {
      if (index % 2 === 0) {
        if (givenArray[index + 1] === undefined) {
          results[results.length - 1] = mergeArrays(results[results.length - 1], val);
        } else {
          results.push(mergeArrays(val, givenArray[index + 1]));
        }
      }
    });
    return buildResults(results);
  };
  return buildResults(splitArray);
}
