import "./App.css";
import Layout from "./components/Layout.jsx";
import Post from "./components/Post.jsx";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

// Axios
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
