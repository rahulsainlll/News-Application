import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TaylorFour() {
  const [taylor, setTaylor] = useState([]);

  useEffect(() => {
    axios
      .get("/news/type/Taylor/4")
      .then((response) => {
        setTaylor(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h3 className="four-news-heading">Taylor Swift</h3>
      <div className="taylor-four-container">
        {taylor.map((post) => (
          <Link to={`/news/${post._id}`} key={post._id}>
            <div className="card">
              <div className="taylor-image">
                <img
                  src={"http://localhost:8000/" + post.cover}
                  alt={post.title}
                />
              </div>
              <div className="taylor-title">
                <p>{post.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
