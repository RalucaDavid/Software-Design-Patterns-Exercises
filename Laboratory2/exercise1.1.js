
class Node{
    #value;
    #neighbors;

    constructor(value){
        this.#value = value;
        this.#neighbors = [];
    }

    addNeighbor(node){
        this.#neighbors.push(node);
    }

    get value(){
        return this.#value;
    }

    get neighbors(){
        return this.#neighbors;
    }
}

class Graph{
    #nodeList;

    constructor(){
        this.#nodeList = new Map();
    }

    addNode(value){
        const node = new Node(value);
        this.#nodeList.set(value, node);
    }

    addEdge(value1, value2){
        const node1 = this.#nodeList.get(value1);
        const node2 = this.#nodeList.get(value2);

        if(node1 && node2){
            node1.addNeighbor(node2);
            node2.addNeighbor(node1);
        }
    }

    getNodeByValue(value){
        return this.#nodeList.get(value);
    }

    get nodeList(){
        return this.#nodeList;
    }
}

function bfs(graph, source){
    const visited = new Map();
    const queue = [];

    for (let [value, node] of graph.nodeList.entries()) {
        visited.set(value, false);
    }

    visited.set(source, true);
    queue.push(graph.getNodeByValue(source));

    while(queue.length){
        const current = queue.shift();
        console.log(current.value);
        
        current.neighbors.forEach(neighbor => {
            if(visited.get(neighbor.value)===false){
                visited.set(neighbor.value, true);
                queue.push(neighbor);
            }
        });
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