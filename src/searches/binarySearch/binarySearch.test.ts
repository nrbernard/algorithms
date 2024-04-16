import { beforeAll, describe, expect, test } from 'vitest';

const names = ['nick'];
const functionName = 'binarySearch';

names.forEach((name) => {
  let searchFunction: (arr: number[], element: number) => number;
  const fileName = `./${name}-${functionName}.ts`;

  beforeAll(async () => {
    const module = await import(fileName);

    searchFunction = module[functionName];
  });

  describe(`${functionName} by ${name}`, () => {
    test('returns index of target element in array', () => {
      expect(searchFunction([1], 1)).toBe(0);
      expect(searchFunction([1, 2], 1)).toBe(0);
      expect(searchFunction([1, 2], 2)).toBe(1);
      expect(searchFunction([1, 5, 10, 12], 1)).toBe(0);
      expect(searchFunction([1, 5, 10, 12, 14, 17, 22, 100], 17)).toBe(5);
      expect(searchFunction([1, 5, 10, 12, 14, 17, 22, 100], 1)).toBe(0);
      expect(searchFunction([1, 5, 10, 12, 14, 17, 22, 100], 100)).toBe(7);
    });

    test('returns -1 if target element is not in array', () => {
      expect(searchFunction([], 1)).toBe(-1);
      expect(searchFunction([1, 5, 10, 12, 14, 17, 22, 100], 0)).toBe(-1);
    });
  });
});
