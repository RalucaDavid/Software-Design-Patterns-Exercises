
function bfs(matrix, source) {
    let visited = Array(size).fill(false);;
    let queue = [];

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

function addEdge(matrix, node1, node2) {
    matrix[node1].push(node2);
    matrix[node2].push(node1);
};


const size = 5;
const matrix = Array.from({ length: size }, () => []);

addEdge(matrix, 0, 1);
addEdge(matrix, 1, 2);
addEdge(matrix, 0, 2);
addEdge(matrix, 2, 4);
addEdge(matrix, 1, 3);
addEdge(matrix, 3, 4);

bfs(matrix, 0);
