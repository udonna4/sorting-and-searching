function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      // pick element arr[i]
      let current = arr[i];
  
      // find the correct position for arr[i] in the sorted sequence
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // insert arr[i] into the correct position
      arr[j + 1] = current;
    }
  }
  