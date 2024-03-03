import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import axios from "axios";

export default function HeroSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/news/type/Latest")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="grid-container">
      <img src="https://images.news9live.com/wp-content/uploads/2024/03/Piped-water-connections.jpg?w=600" />
      <h1>{posts.title}</h1>
    </div>
  );
}
