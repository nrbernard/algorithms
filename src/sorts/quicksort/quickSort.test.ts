import { beforeAll, describe, expect, test } from 'vitest';

const names = ['nick', 'tj'];
const functionName = 'quickSort';

names.forEach((name) => {
  let sortFunction: (arr: number[]) => number[];
  const fileName = `./${name}-${functionName}.ts`;

  beforeAll(async () => {
    const module = await import(fileName);

    sortFunction = module[functionName];
  });

  describe(`${functionName} by ${name}`, () => {
    test('it sorts the array when the input array is already sorted', () => {
      expect(sortFunction([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('it sorts the array when the input array is sorted in descending order', () => {
      expect(sortFunction([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test('it sorts the array when the input array has duplicate values', () => {
      expect(sortFunction([5, 3, 4, 5, 3])).toEqual([3, 3, 4, 5, 5]);
    });

    test('it sorts the array when the input array has one element', () => {
      expect(sortFunction([5])).toEqual([5]);
    });

    test('it sorts the array when the input array is empty', () => {
      expect(sortFunction([])).toEqual([]);
    });

    test('it sorts the array when there are negative numbers', () => {
      expect(sortFunction([5, 3, 4, 5, -3])).toEqual([-3, 3, 4, 5, 5]);
    });
  });
});
