function bfs(matrix, source) {
    var visited = Array(size).fill(false);
    var queue = [];
    visited[source] = true;
    queue.push(source);
    while (queue.length) {
        var current = queue.shift();
        console.log(current);
        matrix.forEach(function (row) {
            row.forEach(function (element) {
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
}
;
var size = 5;
var matrix = Array.from({ length: size }, function () { return []; });
addEdge(matrix, 0, 1);
addEdge(matrix, 1, 2);
addEdge(matrix, 0, 2);
addEdge(matrix, 2, 4);
addEdge(matrix, 1, 3);
addEdge(matrix, 3, 4);
bfs(matrix, 0);
