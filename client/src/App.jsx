import "./App.css";
import Layout from "./components/Layout.jsx";
import Post from "./components/Post.jsx";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import { UserContextProvider } from "../context/userContext";
import PostPage from "./pages/PostPage.jsx";
import axios from "axios";
import EditPost from "./pages/EditPost.jsx";
import Appbar from "./components/Appbar.jsx";
import AdDashboard from "./pages/AdDashboard.jsx";
import LatestPage from "./pages/LatestPage.jsx";
import TrendingPage from "./pages/TrendingPage.jsx";
import TaylorPage from "./pages/TaylorPage.jsx";
import MorePage from "./pages/MorePage.jsx";


// Axios
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      {/* <Appbar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/AdDashboard" element={<AdDashboard />}></Route>
          <Route path="/latest" element={<LatestPage />}></Route>
          <Route path="/trending" element={<TrendingPage />}></Route>
          <Route path="/more" element={<MorePage />}></Route>
          <Route path="/taylor" element={<TaylorPage />}></Route>
          <Route path="/news/:id" element={<PostPage />}></Route>
          <Route path="/edit/:id" element={<EditPost />}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
