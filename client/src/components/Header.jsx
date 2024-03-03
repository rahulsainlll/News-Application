import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Appbar from "./Appbar";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function logout() {
    axios.post("/logout").then(() => {
      setUser(null);
    });
    navigate("/");
    toast.success("Logout!");
  }

  return (
    <div>
      <Appbar />
      <header>
        <Link to="/" className="logo">
          The Times Insight
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

      <div className="header-line"></div>
    </div>
  );
}
