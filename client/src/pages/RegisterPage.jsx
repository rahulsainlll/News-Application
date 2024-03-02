import React, { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function register(ev) {
    ev.preventDefault();


  }

  return (
    <form action="/" className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="adminname"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
}
