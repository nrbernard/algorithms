export function binarySearch(array: number[], target: number): number {
  function search(
    array: number[],
    target: number,
    left: number,
    right: number
  ): number {
    if (left > right) {
      return -1;
    }

    const middle = Math.floor((left + right) / 2);

    if (array[middle] === target) {
      return middle;
    } else if (target < array[middle]) {
      return search(array, target, left, middle - 1);
    } else {
      return search(array, target, middle + 1, right);
    }
  }

  return search(array, target, 0, array.length - 1);
}

export function binarySearchIterative(array: number[], target: number): number {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (array[middle] === target) {
      return middle;
    }

    if (target < array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}
