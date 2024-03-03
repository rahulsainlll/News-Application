import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import axios from "axios";

export default function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/news/")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {posts.length > 0 &&
        posts.map((post) => <Post key={post._id} {...post} />)}
    </div>
  );
}
