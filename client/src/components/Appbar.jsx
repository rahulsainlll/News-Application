import React from "react";
import { Link } from "react-router-dom";

export default function Appbar() {
  return (
    <div className="topHeader">
      <div>
        <Link
          style={{
            marginLeft: "10%",
            fontSize: "0.9rem",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/"
        >
          SHAILY
        </Link>
      </div>

      {/* -------------------------------------------------------------------------------------------------------- */}

      <div className="header-links">
        <Link
          style={{
            marginRight: "10%",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/"
        >
          HOME
        </Link>
        <Link
          style={{
            marginRight: "10%",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/latest"
        >
          LATEST
        </Link>

        <Link
          style={{
            marginRight: "10%",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/trending"
        >
          TRENDING
        </Link>

        <Link
          style={{
            marginRight: "10%",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/taylor"
        >
          TAYLOR
        </Link>

        <Link
          style={{
            marginRight: "10%",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/more"
        >
          MORE
        </Link>
      </div>

      {/* -------------------------------------------------------------------------------------------------------- */}
      <div>
        <Link
          style={{
            marginRight: "20%",
            fontSize: "0.9rem",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/AdDashboard"
        >
          Twitter
        </Link>
      </div>
    </div>
  );
}
