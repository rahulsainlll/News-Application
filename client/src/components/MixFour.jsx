import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MixFour() {
  const [india, setIndia] = useState([]);
  const [tech, setTech] = useState([]);
  const [enter, setEnter] = useState([]);
  //   const [tech, setTech] = useState([]);

  useEffect(() => {
    axios
      .get("/news/type/Latest/4")
      .then((response) => {
        setIndia(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h3 className="four-news-heading">Latest News</h3>
      <div className="mix-four-container">
        {india.map((post) => (
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
