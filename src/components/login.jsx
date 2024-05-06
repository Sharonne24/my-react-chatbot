import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    if (username === 'user123' && password === 'pass123') {
        // Navigate to the chatbot screen
        // You can use history.push('/chatbot') if using React Router
        console.log('Login successful');
      } else {
        setError('Invalid username or password');
      }
    };
    return (
        <div>
          <h2>Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleLogin}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />