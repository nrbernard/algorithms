export class UnweightedUndirectedGraph {
  private connections: Record<number, Set<number>> = {};

  addNode(node: number) {
    this.connections[node] = new Set();
  }

  addEdge(sourceNode: number, destinationNode: number) {
    if (!(sourceNode in this.connections)) {
      this.addNode(sourceNode);
    }

    if (!(destinationNode in this.connections)) {
      this.addNode(destinationNode);
    }

    this.connections[sourceNode].add(destinationNode);
    this.connections[destinationNode].add(sourceNode);
  }

  getAdjacentNodes(node: number): Set<number> {
    return this.connections[node];
  }

  printGraph() {
    console.log(this.connections);
  }
}

export function depthFirstSearch(
  graph: UnweightedUndirectedGraph,
  startNode: number,
  destinationNode: number,
  visited = new Set<number>()
): boolean {
  if (visited.has(startNode)) {
    return false;
  }

  visited.add(startNode);

  if (startNode === destinationNode) {
    return true;
  }

  for (const neighbor of graph.getAdjacentNodes(startNode)) {
    if (depthFirstSearch(graph, neighbor, destinationNode, visited)) {
      return true;
    }
  }

  return false;
}
