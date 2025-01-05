import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Sending login data to the backend API
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      if (response.data.success) {
        alert('Login successful!');
        // Redirect to another page if necessary, like a dashboard
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.log(error);
      alert('Error: Login failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
