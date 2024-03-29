import { expect, test } from 'vitest';
import { bubbleSort } from './bubble';

test('it sorts the array when the input array is already sorted', () => {
  expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('it sorts the array when the input array is sorted in descending order', () => {
  expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test('it sorts the array when the input array has duplicate values', () => {
  expect(bubbleSort([5, 3, 4, 5, 3])).toEqual([3, 3, 4, 5, 5]);
});

test('it sorts the array when the input array has one element', () => {
  expect(bubbleSort([5])).toEqual([5]);
});

test('it sorts the array when the input array is empty', () => {
  expect(bubbleSort([])).toEqual([]);
});
