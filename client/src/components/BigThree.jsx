import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BigThree() {
  const [india, setIndia] = useState([]);
  const [tech, setTech] = useState([]);
  const [ad, setAd] = useState([]);

  useEffect(() => {
    axios
      .get("/news/type/India/1")
      .then((response) => {
        setIndia(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    axios
      .get("/news/type/Tech/1")
      .then((response) => {
        setTech(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    axios
      .get("/news/ad/RightSide/1")
      .then((response) => {
        setAd(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="big-three-container">
      {ad.map((ad) => (
        <Link to={`${ad.link}`} target="_blank" key={ad._id}>
          <div className="ad-container">
            <img
              src={"http://localhost:8000/" + ad.cover}
              alt="Advertisement"
            />
          </div>
          <hr />
        </Link>
      ))}

      <div className="news-container">
        <h3>India News</h3>
        {india.map((post) => (
          <Link to={`/news/${post._id}`} key={post._id}>
            <div className="news-item">
              <div className="big-3-image-container">
                <img
                  src={"http://localhost:8000/" + post.cover}
                  alt={post.title}
                />
                <p>{post.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="news-container">
        <h3>Tech News</h3>
        {tech.map((post) => (
          <Link to={`/news/${post._id}`} key={post._id}>
            <div className="news-item">
              <div className="big-3-image-container">
                <img
                  src={"http://localhost:8000/" + post.cover}
                  alt={post.title}
                />
                <p>{post.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
