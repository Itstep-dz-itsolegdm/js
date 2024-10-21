import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3030', { autoConnect: false });

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [nickname, setNickname] = useState('');
  const [isNicknameSet, setIsNicknameSet] = useState(false);

  useEffect(() => {
    socket.on('new_message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    socket.on('new_user_connection', (newUser) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { msg: `User ${newUser.name} connected`, createdAt: newUser.connectedAt }
      ]);
    });
    socket.on('new_name_user', (msg) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { msg: `${msg.oldNameUser} changed their name to ${msg.newNameUser}`, createdAt: msg.createdAt }
      ]);
    });

    return () => {
      socket.off('new_message');
      socket.off('new_user_connection');
      socket.off('new_name_user');
    };
  }, []);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleNicknameSubmit = (e) => {
    e.preventDefault();
    if (nickname.trim()) {
      socket.connect();
      socket.emit('new_name_user', nickname);
      setIsNicknameSet(true);
    }
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('new_message', message);
      setMessage('');
    }
  };

  return (
    <div>
      {!isNicknameSet ? (
        <form onSubmit={handleNicknameSubmit}>
          <h2>Set your nickname</h2>
          <input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="Enter your nickname"
          />
          <button type="submit">Join Chat</button>
        </form>
      ) : (
        <>
          <div>
            <h2>Chat</h2>
            <div>
              {messages.map((msg, index) => (
                <div key={index}>
                  <strong>{msg.name || 'System'}:</strong> {msg.msg} <em>({new Date(msg.createdAt).toLocaleTimeString()})</em>
                </div>
              ))}
            </div>
            <form onSubmit={handleMessageSubmit}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
