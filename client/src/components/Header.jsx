import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import toast from "react-hot-toast";
import axios from "axios";

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  function logout() {
    axios.post("/logout").then(() => {
      setUser(null);
    });
    toast.success("Logout!");
  }

  return (
    <header>
      <Link to="/" className="logo">
        News+
      </Link>

      <nav>
        {user && (
          <>
            <Link to="/dashboard">Create New Post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}

        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
