import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BigThree from "../components/BigThree";

export default function TaylorPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/news/type/Taylor/20")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="page-container">
      <div>
        {posts.map((post) => (
          <Link to={`/news/${post._id}`} key={post._id} className="post-link">
            <div className="taylor-post">
              <div className="tyalor-image">
                <img
                  src={"http://localhost:8000/" + post.cover}
                  alt={post.title}
                />
              </div>
              <div>
                <h2 style={{ margin: "40px" }}>{post.title}</h2>
                {/* <p>{post.summary}</p> */}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div>
        <BigThree />
      </div>
    </div>
  );
}
