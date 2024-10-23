var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var GraphNode = /** @class */ (function () {
    function GraphNode(value) {
        this.value = value;
        this.neighbors = [];
    }
    GraphNode.prototype.addNeighbor = function (node) {
        this.neighbors.push(node);
    };
    Object.defineProperty(GraphNode.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphNode.prototype, "Neighbors", {
        get: function () {
            return this.neighbors;
        },
        enumerable: false,
        configurable: true
    });
    return GraphNode;
}());
var Graph = /** @class */ (function () {
    function Graph() {
        this.nodeList = new Map();
    }
    Graph.prototype.addNode = function (value) {
        var node = new GraphNode(value);
        this.nodeList.set(value, node);
    };
    Graph.prototype.addEdge = function (value1, value2) {
        var node1 = this.nodeList.get(value1);
        var node2 = this.nodeList.get(value2);
        if (node1 && node2) {
            node1.addNeighbor(node2);
            node2.addNeighbor(node1);
        }
    };
    Graph.prototype.getNodeByValue = function (value) {
        return this.nodeList.get(value);
    };
    Object.defineProperty(Graph.prototype, "NodeList", {
        get: function () {
            return this.nodeList;
        },
        enumerable: false,
        configurable: true
    });
    return Graph;
}());
function bfs(graph, source) {
    var e_1, _a;
    var visited = new Map();
    var queue = [];
    try {
        for (var _b = __values(graph.NodeList.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), value = _d[0], node = _d[1];
            visited.set(value, false);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    visited.set(source, true);
    var startNode = graph.getNodeByValue(source);
    if (!startNode) {
        return;
    }
    queue.push(startNode);
    while (queue.length) {
        var current = queue.shift();
        if (current) {
            console.log(current.Value);
            current.Neighbors.forEach(function (neighbor) {
                if (visited.get(neighbor.Value) === false) {
                    visited.set(neighbor.Value, true);
                    queue.push(neighbor);
                }
            });
        }
    }
}
var graph = new Graph();
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
