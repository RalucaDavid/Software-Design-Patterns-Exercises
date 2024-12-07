export interface ServerMessage{
    event: 'join' | 'message' | 'leave';
    name: string;
    content?: string;
}