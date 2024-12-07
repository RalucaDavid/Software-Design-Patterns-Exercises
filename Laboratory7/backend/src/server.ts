import WebSocket, { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 9000 });

let userCounter = 0;

interface Message {
    event: string;
    content?: string;
}

class Client {
    socket: WebSocket;
    name: string;

    constructor(socket: WebSocket) {
        this.socket = socket;
        this.name = `User ${++userCounter}`;
    }

    sendMessage(data: object): void {
        this.socket.send(JSON.stringify(data));
    }
}

const clients: Set<Client> = new Set();

server.on('connection', (socket: WebSocket) => {
    const client = new Client(socket);
    clients.add(client);
    broadcast({ event: 'join', name: client.name }, client);

    socket.on('message', (message: string) => {
        try {
            const { event, content }: Message = JSON.parse(message);
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
        broadcast({ event: 'leave', name: client.name }, client);
    });
});

function broadcast(data: object, exclude?: Client): void {
    clients.forEach((client) => {
        if (client !== exclude) {
            client.sendMessage(data);
        }
    });
}

