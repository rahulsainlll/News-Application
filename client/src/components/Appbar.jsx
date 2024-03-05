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
          to="/AdDashboard"
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
          to="/AdDashboard"
        >
          HOME
        </Link>
        <Link
          style={{
            marginRight: "10%",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/dashboard"
        >
          LATEST
        </Link>
        {/* <Link
          style={{
            marginRight: "5%",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/dashboard"
        >
          INDIA
        </Link>
        <Link
          style={{
            marginRight: "5%",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/dashboard"
        >
          ENTERTAINMENT
        </Link>
        <Link
          style={{
            marginRight: "5%",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/dashboard"
        >
          TRENDING
        </Link> */}

        <Link
          style={{
            marginRight: "10%",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/dashboard"
        >
          TRENDING
        </Link>

        <Link
          style={{
            marginRight: "10%",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/dashboard"
        >
          TAYLOR
        </Link>

        <Link
          style={{
            marginRight: "10%",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/dashboard"
        >
          MORE 
        </Link>
      </div>

      {/* -------------------------------------------------------------------------------------------------------- */}
      <div>
        <Link
          style={{
            marginRight: "10%",
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
