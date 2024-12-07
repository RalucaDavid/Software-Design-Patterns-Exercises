"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const server = new ws_1.WebSocketServer({ port: 9000 });
let userCounter = 0;
class Client {
    constructor(socket) {
        this.socket = socket;
        this.name = `User ${++userCounter}`;
        this.sendMessage({ event: "join", name: this.name });
    }
    sendMessage(data) {
        this.socket.send(JSON.stringify(data));
    }
}
const clients = new Set();
server.on('connection', (socket) => {
    const client = new Client(socket);
    clients.add(client);
    broadcast({ event: 'join', name: client.name });
    socket.on('message', (message) => {
        try {
            const { event, content } = JSON.parse(message);
            if (event === 'message') {
                broadcast({ event: 'message', name: client.name, content });
            }
        }
        catch (error) {
            console.error('Invalid message format:', message);
        }
    });
    socket.on('close', () => {
        clients.delete(client);
        broadcast({ event: 'leave', name: client.name });
    });
});
function broadcast(data) {
    clients.forEach((client) => client.sendMessage(data));
}
