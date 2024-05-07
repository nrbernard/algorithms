import { beforeAll, describe, expect, test } from 'vitest';
import { UnweightedUndirectedGraph } from './nick-depthFirstSearch';

const names = ['nick'];
const functionName = 'depthFirstSearch';

names.forEach((name) => {
  let searchFunction: (
    graph: UnweightedUndirectedGraph,
    startNode: number,
    destinationNode: number,
    visited?: Set<number>
  ) => boolean;
  const fileName = `./${name}-${functionName}.ts`;

  beforeAll(async () => {
    const module = await import(fileName);

    searchFunction = module[functionName];
  });

  describe(`${functionName} by ${name}`, () => {
    const graph = new UnweightedUndirectedGraph();
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(2, 4);
    graph.addEdge(3, 5);

    graph.printGraph();

    /*
      1 --> 2
            |  \
            v   v
            3   4
            |
            v
            5
    */

    test('returns boolean for whether source node has path to destination node', () => {
      expect(searchFunction(graph, 1, 5)).toBe(true);
      expect(searchFunction(graph, 1, 6)).toBe(false);
      expect(searchFunction(graph, 4, 5)).toBe(false);
    });
  });
});
