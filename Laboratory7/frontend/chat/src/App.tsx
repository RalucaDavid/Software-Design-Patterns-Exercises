import { useState, useEffect } from 'react';
import { Message } from './types/message';
import { ServerMessage } from './types/server-message';
import classes from './App.module.css';

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:9000');
    setSocket(ws);

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  
    ws.onmessage = (event: MessageEvent) => {
      const message: ServerMessage = JSON.parse(event.data);
      if (message.event === 'message' || message.event === 'join') {
        setMessages((prev) => [...prev, { name: message.name, content: message.content || 'Joined the chat' }]);
      } 
      else if (message.event === 'leave') {
        setMessages((prev) => [...prev, { name: message.name, content: 'Left the chat' }]);
      }
    };
  
    return () => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (socket && input.trim()) {
      socket.send(
        JSON.stringify({ event: 'message', content: input })
      );
      setInput('');
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.chat}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.name}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message"
          className={classes.input}
        />
        <button onClick={sendMessage} className={classes.button}>Send</button>
      </div>
    </div>
  );
}

export default App;
