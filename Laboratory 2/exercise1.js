
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

function addEdge(node1, node2) {
    matrix[node1].push(node2);
    matrix[node2].push(node1);
};


const size = 5;
const matrix = Array.from({ length: size }, () => []);

addEdge(0, 1);
addEdge(1, 2);
addEdge(0, 2);
addEdge(2, 4);
addEdge(1, 3);
addEdge(3, 4);

bfs(matrix, 0);
