export function bubbleSort(array: number[]): number[] {
  const outputArray = [...array];

  for(let i = 0; i < outputArray.length; i++) {
    for(let j = 0; j < outputArray.length - i - 1; j++) {
      if(outputArray[j] > outputArray[j + 1]) {
        const temp = outputArray[j];
        outputArray[j] = outputArray[j + 1];
        outputArray[j + 1] = temp;
      }
    }
  }

  return outputArray;
}
