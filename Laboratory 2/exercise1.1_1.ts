
class GraphNode {
    private value: number;
    private neighbors: GraphNode[];

    constructor(value: number) {
        this.value = value;
        this.neighbors = [];
    }

    addNeighbor(node: GraphNode): void {
        this.neighbors.push(node);
    }

    get Value(): number {
        return this.value;
    }

    get Neighbors(): GraphNode[] {
        return this.neighbors;
    }
}

class Graph {
    private nodeList: Map<number, GraphNode>;

    constructor() {
        this.nodeList = new Map();
    }

    addNode(value: number) {
        const node = new GraphNode(value);
        this.nodeList.set(value, node);
    }

    addEdge(value1: number, value2: number): void {
        const node1 = this.nodeList.get(value1);
        const node2 = this.nodeList.get(value2);

        if (node1 && node2) {
            node1.addNeighbor(node2);
            node2.addNeighbor(node1);
        }
    }

    getNodeByValue(value: number): GraphNode | undefined {
        return this.nodeList.get(value);
    }

    get NodeList(): Map<number, GraphNode> {
        return this.nodeList;
    }
}

function bfs(graph: Graph, source: number): void {
    const visited: Map<number, boolean> = new Map();
    const queue: GraphNode[] = [];

    for (let [value, node] of graph.NodeList.entries()) {
        visited.set(value, false);
    }

    visited.set(source, true);
    const startNode = graph.getNodeByValue(source);
    if (!startNode) {
        return; 
    }
    queue.push(startNode);

    while (queue.length) {
        const current = queue.shift();
        if (current) {
            console.log(current.Value);

            current.Neighbors.forEach(neighbor => {
                if (visited.get(neighbor.Value) === false) {
                    visited.set(neighbor.Value, true);
                    queue.push(neighbor);
                }
            });
        }
    }
}

const graph = new Graph();

graph.addNode(0);
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);

graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(0, 2);
graph.addEdge(2, 4);
graph.addEdge(1, 3);
graph.addEdge(3, 4);

bfs(graph, 0);