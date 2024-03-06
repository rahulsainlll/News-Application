import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LatestPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/news/type/Latest/20")
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
        <Link to={`/news/${post._id}`} key={post._id}>
          <div className="image">
            <img src={"http://localhost:8000/" + post.cover} alt={post.title} />
          </div>
          <h1>{post.title}</h1>
        </Link>
      ))}
    </div>
  );
}
