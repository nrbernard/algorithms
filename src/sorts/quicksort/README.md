# Quicksort

Quicksort is a sorting algorithm that uses the divide and conquer strategy. It selects a "pivot" element from the array and partitions the other elements of the array into two sub-arrays depending on if they are less than ("left") or greater than ("right") of the pivot element. The sub-arrays are then sorted recursively. It's sometimes called a partition-exchange sort.

Generally, implementations are not stable, i.e. the order of elements isn't preserved during the sorting when the elements are equal.

The average complexity is O(n log n). The worst-case complexity is O(n2), e.g. the pivot value is always the smallest value in the array.

## See Also

- https://xlinux.nist.gov/dads/HTML/quicksort.html
- https://www.toptal.com/developers/sorting-algorithms/quick-sort
- https://www.youtube.com/watch?v=SLauY6PpjW4
- https://en.wikipedia.org/wiki/Quicksort
- https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/quick-sort
- https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
