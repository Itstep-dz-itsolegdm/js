// frontend/src/MessageForm.js
import React, { useState } from 'react';

function MessageForm({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      onSendMessage(message);
      setMessage(''); // Clear input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default MessageForm;
