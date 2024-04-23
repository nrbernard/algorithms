export function binarySearch(array: number[]): number {
  let low = 0;
  let high = array.length - 1;
  let mid = 0;
  let guess = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = array[mid];

    if (guess === mid) {
      return mid;
    }

    if (guess > mid) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}
