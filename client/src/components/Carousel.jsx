import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function Carousel() {
  const [posts, setPosts] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    axios
      .get("/news/type/Latest/3")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    const interval = setInterval(() => {
      setSlide((prevSlide) =>
        prevSlide === posts.length - 1 ? 0 : prevSlide + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [posts.length]);

  const nextSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === posts.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? posts.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {posts.map((post, index) => (
          <div
            key={post._id}
            className={`slide ${slide === index ? "" : "slide-hidden"}`}
          >
            <Link to={`/news/${post._id}`}>
              <div className="image">
                <img
                  src={`http://localhost:8000/${post.cover}`}
                  alt={post.title}
                />
              </div>
              <h2 style={{textDecoration:"none"}}>{post.title}</h2>
            </Link>
          </div>
        ))}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
      </div>
    </div>
  );
}
