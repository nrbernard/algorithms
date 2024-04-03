export function bubbleSort(array: number[]): number[] {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return array;
}

export function bubbleSortRecursive(
  array: number[],
  n = array.length
): number[] {
  if (n <= 1) {
    return array;
  }

  for (let i = 0; i < n - 1; i++) {
    if (array[i] > array[i + 1]) {
      const temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }

  return bubbleSortRecursive(array, n - 1);
}
