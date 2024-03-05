import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function headerAd() {
  const [headerAd, setHeaderAd] = useState([]);

  useEffect(() => {
    axios
      .get("/news/ad/Header/1")
      .then((response) => {
         setHeaderAd(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="header-ad-container">
      {headerAd.map((ad) => (
        <Link to={`${ad.link}`} target="_blank" key={ad._id}>
          <div className="image">
            <img src={"http://localhost:8000/" + ad.cover} alt="Advertisment" />
          </div>
          <hr />
        </Link>
      ))}
    </div>
  );
}
