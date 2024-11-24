
function bfs(matrix: number[][], source: number) {
    let visited: boolean[] = Array(size).fill(false);
    let queue: number[] = [];

    visited[source] = true;
    queue.push(source);

    while (queue.length) {
        const current = queue.shift();
        console.log(current);
        matrix.forEach((row) => {
            row.forEach((element) => {
                if (!visited[element]) {
                    visited[element] = true;
                    queue.push(element);
                }
            });
        });
    }
}

function addEdge(matrix: number[][], node1: number, node2: number) {
    matrix[node1].push(node2);
    matrix[node2].push(node1);
};


const size: number = 5;
const matrix: number[][] = Array.from({ length: size }, () => []);

addEdge(matrix, 0, 1);
addEdge(matrix, 1, 2);
addEdge(matrix, 0, 2);
addEdge(matrix, 2, 4);
addEdge(matrix, 1, 3);
addEdge(matrix, 3, 4);

bfs(matrix, 0);
