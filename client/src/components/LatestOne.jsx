import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LatestOne() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/news/type/Latest/1")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="latestOne-container">
      {posts.map((post) => (
        <Link to={`/news/${post._id}`} key={post._id} className="post-link">
          <div className="post-container">
            <img
              src={"http://localhost:8000/" + post.cover}
              alt={post.title}
              className="post-image"
            />
            <h1 className="post-title">{post.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}
