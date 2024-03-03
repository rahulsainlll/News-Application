import { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Editor from "../components/Editor";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");

  useEffect(() => {
    const fetchPostInfo = async () => {
      try {
        const response = await axios.get(`/news/${id}`);
        setTitle(response.data.title);
        setSummary(response.data.summary);
        setContent(response.data.content);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPostInfo();
  }, []);

  async function updatePost(e) {
    e.preventDefault();

    const data = new FormData();
    data.append("title", title);
    data.append("summary", summary);
    data.append("content", content);
    data.append("id", id);
    if (files?.[0]) {
      data.append("file", files[0]);
    }

    try {
      const { data: responseData } = await axios.put("/news", data);

      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setTitle("");
        setSummary("");
        setContent("");
        setFiles("");
        navigate("/news/" + id);
        toast.success("Updated successfully.");
      }
    } catch (error) {
      console.log(error);
    }
  }


async function deletePost(e) {
   e.preventDefault();

  try {
    const response = await axios.delete("/news/" + id);

    if (response.error) {
      toast.error(response.error);
      console.log('toast err')
    } else {
      toast.success("Deleted successfully.");
      navigate("/");
      console.log("Navigate err");
    }
  } catch (error) {
    console.log(error);
  }
}


  return (
    <div>
      <form onSubmit={updatePost}>
        <h1>Edit ✍️</h1>
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
          Update Post
        </button>
      </form>

      <form onSubmit={deletePost}>
        <button
          style={{
            marginTop: "10px",
            fontSize: "1.1rem",
            background: "#930000",
          }}
        >
          Delete Post
        </button>
      </form>
    </div>
  );
}
