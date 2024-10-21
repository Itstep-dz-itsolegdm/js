// frontend/src/ChatChangeNameForm.js
import React, { useState } from 'react';

function ChatChangeNameForm({ onChangeName }) {
  const [newName, setNewName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName) {
      onChangeName(newName);
      setNewName(''); // Clear input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Change Name</button>
    </form>
  );
}

export default ChatChangeNameForm;
