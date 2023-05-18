import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wyślij żądanie rejestracji na serwer
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nazwa użytkownika"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Adres e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Zarejestruj się</button>
    </form>
  );
};

export default RegistrationForm;