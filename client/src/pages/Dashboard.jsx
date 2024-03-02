import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    console.log(files);

    try {
      const { data } = await axios.post("/news", {
        data,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Register Succesful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={createPost}>
      <h1>Dashboard 👋</h1>
      <input
        type="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="summary"
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
