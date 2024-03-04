import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SportsFour() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    axios
      .get("/news/type/Sports/4")
      .then((response) => {
        setSports(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  }, []);

  return (
    <div>
      <h3 style={{ fontFamily: "serif" }}>Sports News</h3>
      <div className="mix-four-container">
        {sports.map((post) => (
          <Link to={`/news/${post._id}`} key={post._id}>
            <div className="image">
              <img
                src={"http://localhost:8000/" + post.cover}
                alt={post.title}
              />
            </div>
            <p>{post.title}</p>
            <hr />
          </Link>
        ))}
      </div>
    </div>
  );
}
