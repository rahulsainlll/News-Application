import "./App.css";
import Layout from "./components/Layout.jsx";
import Post from "./components/Post.jsx";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import { UserContextProvider } from "../context/userContext";
import PostPage from "./pages/PostPage.jsx";
import axios from "axios";
import EditPost from "./pages/EditPost.jsx";
import Appbar from "./components/Appbar.jsx";

// Axios
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      {/* <Appbar/> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/news/:id" element={<PostPage />}></Route>
          <Route path="/edit/:id" element={<EditPost />}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
