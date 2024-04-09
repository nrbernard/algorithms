export function quickSort(array: number[]): number[] {
  function swap(array: number[], left: number, right: number) {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }

  function partition(
    array: number[],
    left: number,
    right: number,
    pivot: number
  ) {
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }

      while (array[right] > pivot) {
        right--;
      }

      if (left <= right) {
        swap(array, left, right);
        left++;
        right--;
      }
    }

    return left;
  }

  function sort(array: number[], left: number, right: number) {
    if (left >= right) {
      return array;
    }

    const pivot = array[Math.floor((left + right) / 2)];
    const index = partition(array, left, right, pivot);

    sort(array, left, index - 1);
    sort(array, index, right);

    return array;
  }

  return sort(array, 0, array.length - 1);
}

export function quickSortLoop(array: number[]): number[] {
  const n = array.length;

  if (n <= 1) {
    return array;
  }

  const pivot = 0;
  const pivotValue = array[pivot];
  const left = [];
  const right = [];

  for (let i = pivot + 1; i < n; i++) {
    if (array[i] < pivotValue) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  const sortedArray = [...quickSort(left), pivotValue, ...quickSort(right)];

  return sortedArray;
}

export function quickSortReduce(array: number[]): number[] {
  const n = array.length;

  if (n <= 1) {
    return array;
  }

  const pivotIndex = Math.floor(n / 2);
  const pivotValue = array[pivotIndex];

  const { left, right } = array.reduce<{ left: number[]; right: number[] }>(
    (acc, curr, i) => {
      if (i === pivotIndex) {
        return acc;
      }

      return curr <= pivotValue
        ? { ...acc, left: [...acc.left, curr] }
        : { ...acc, right: [...acc.right, curr] };
    },
    { left: [], right: [] }
  );

  const sortedArray = [...quickSort(left), pivotValue, ...quickSort(right)];

  return sortedArray;
}
