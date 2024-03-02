import React from "react";

export default function RegisterPage() {
  return (
    <form action="/" className="register">
      <h1>Register</h1>
      <input type="text" placeholder="adminname" />
      <input type="password" placeholder="password" />
      <button type="submit">Register</button>
    </form>
  );
}
