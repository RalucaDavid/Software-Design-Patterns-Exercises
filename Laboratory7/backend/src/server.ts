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

    socket.addEventListener('message', (event: WebSocket.MessageEvent) => {
        try {
            const { event: messageEvent, content }: Message = JSON.parse(event.data.toString());
            if (messageEvent === 'message') {
                broadcast({ event: 'message', name: client.name, content });
            }
        } 
        catch (error) {
            console.error('Invalid message format:', event.data);
        }
    });

    socket.addEventListener('close', () => {
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

