import { useState, useContext,useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-hot-toast";
import axios from "axios";
import Editor from "../components/Editor";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  //  const history = useHistory();

   useEffect(() => {
      if (!user) {
        navigate("/");
      }
   }, []);


  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");

  async function createPost(e) {
    e.preventDefault();

    if (!title || !summary || !content) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!files || files.length === 0) {
      toast.error("Please select a file.");
      return;
    }

    const data = new FormData();
    data.append("type", type);
    data.append("title", title);
    data.append("summary", summary);
    data.append("content", content);
    data.append("file", files[0]);

    try {
      const { data: responseData } = await axios.post("/news", data);

      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setTitle("");
        setSummary("");
        setContent("");
        setFiles("");
        toast.success("Post created successfully.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={createPost}>
      <div className="dashboardNav">
        <Link className="links" to="/AdDashboard">
          Add Advertisment
        </Link>
      </div>

      <h1>Dashboard </h1>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{
          marginBottom: "10px",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          boxSizing: "border-box",
          fontSize: "1.1rem",
          background: "black",
          color: "white",
        }}
        required
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="Latest">Latest</option>
        <option value="Trending">Trending</option>
        <option value="Taylor">Taylor</option>
        <option value="India">India</option>
        <option value="Tech">Tech</option>
        <option value="Carousel">Carousel</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter summary..."
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input type="file" onChange={(e) => setFiles(e.target.files)} />

      <Editor value={content} onChange={setContent} />

      <button
        style={{
          marginTop: "10px",
          fontSize: "1.1rem",
        }}
      >
        Create News
      </button>
    </form>
  );
}
