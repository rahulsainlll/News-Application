import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TrendingThree() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/news/type/Trending/4")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="trending-container">
      {posts.map((post) => (
        <Link to={`/news/${post._id}`} key={post._id}>
          <div className="image">
            <img src={"http://localhost:8000/" + post.cover} alt={post.title} />
          </div>
          <p>{post.title}</p>
          <hr />
        </Link>
      ))}
    </div>
  );
}
