import React from "react";

export default function LoginPage() {
  return (
    <form action="/" className="login">
      <h1>Login</h1>
      <input type="text" placeholder="adminname" />
      <input type="password" placeholder="password" />
      <button>Login</button>
    </form>
  );
}
