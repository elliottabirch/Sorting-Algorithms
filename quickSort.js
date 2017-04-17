function quickSort(input) {
  if (end - start > 1) {
    const val = input[start];
    let swapIndex = start + 1;
    for (var i = start + 1; i <= end; i++) {
      if (input[i] < val) {
        const swapValue = input[swapIndex];
        input[swapIndex] = input[i];
        input[i] = swapValue;
        swapIndex++;
      }
    }
    input[start] = input[swapIndex - 1];
    input[swapIndex - 1] = val;
    quicksort(input, start, swapIndex - 1);
    quicksort(input, swapIndex, end);
  }
  return input;
}
