import React, { useState } from 'react';
import "./registration.css";

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wyślij żądanie rejestracji na serwer
  };

  return (
    <body className="body" >
    <form className="registrationForm" onSubmit={handleSubmit}>
      <input className="inputName"
        type="text"
        placeholder="Nazwa użytkownika"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input className="inputEmail"
        type="email"
        placeholder="Adres e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className="inputPassword"
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button" type="submit">Zarejestruj się</button>
    </form>
    </body>
  );
};

export default RegistrationForm;