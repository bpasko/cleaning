import React, { useState } from 'react';
import "./login.css"

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wyślij żądanie logowania na serwer
  };

  return (
    <body className="body">
    <form className="loginForm"onSubmit={handleSubmit}>
      <input className="inputName"
        type="text"
        placeholder="Nazwa użytkownika lub e-mail"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input className="inputPassword"
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button" type="submit">Zaloguj się</button>
    </form>
    </body>
  );
};

export default LoginForm;