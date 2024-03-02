import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export default function Dashboard() {
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
    data.append("title", title);
    data.append("summary", summary);
    data.append("content", content);
    data.append("file", files[0]);

    console.log(data.get("title"));

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
      <h1>Dashboard 👋</h1>
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
      <ReactQuill
        value={content}
        onChange={(newValue) => setContent(newValue)}
        formats={formats}
        modules={modules}
      />
      <button
        style={{
          marginTop: "10px",
          fontSize: "1.1rem",
        }}
      >
        Post
      </button>
    </form>
  );
}
