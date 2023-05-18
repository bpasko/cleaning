import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wyślij żądanie logowania na serwer
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nazwa użytkownika lub e-mail"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Zaloguj się</button>
    </form>
  );
};

export default LoginForm;