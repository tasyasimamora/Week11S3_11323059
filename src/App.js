/*
NIM : 11323059
Nama : Tasya Simamora
Kelas : D3TI-02
*/

import React, { useState } from 'react';
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
      alert('Login berhasil!');
    } else {
      alert('Mohon masukkan username dan password.');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <p>Selamat datang, {username}!</p>
      ) : (
        <form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;