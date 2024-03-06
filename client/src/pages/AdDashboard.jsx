import React, { useState, useEffect,useContext } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export default function AdDashboard() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

   useEffect(() => {
     if (!user) {
       navigate("/");
     }
   }, []);

  const [type, setType] = useState("");
  const [link, setLink] = useState("");
  const [files, setFiles] = useState("");

  async function createPost(e) {
    e.preventDefault();

    if (!link) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!files || files.length === 0) {
      toast.error("Please select a file.");
      return;
    }

    const data = new FormData();
    data.append("type", type);
    data.append("link", link);
    data.append("file", files[0]);

    try {
      const { data: responseData } = await axios.post("/news/ad", data);

      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setType("");
        setLink("");
        setFiles("");
        navigate("/");
        toast.success("Ad created successfully.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={createPost}>
      <div className="dashboardNav">
        <Link className="links" to="/Dashboard">
          Add News
        </Link>
      </div>
      <h1>Advertisement </h1>

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
        <option value="Header">Header</option>
        <option value="RightSide">RightSide</option>
      </select>

      <input
        type="text"
        placeholder="link..."
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <input type="file" onChange={(e) => setFiles(e.target.files)} />

      <button
        style={{
          marginTop: "10px",
          fontSize: "1.1rem",
        }}
      >
        Create AD
      </button>
    </form>
  );
}
