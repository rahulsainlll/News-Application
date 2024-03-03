import React from "react";
import { Link } from "react-router-dom";

export default function Appbar() {
  return (
    <div className="topHeader">
      <div className="header-links">
        <Link
          style={{
            marginRight: "5%",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/dashboard"
        >
          HOME
        </Link>
        <Link
          style={{
            marginRight: "5%",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/dashboard"
        >
          LATEST
        </Link>
        <Link
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
        </Link>

        <Link
          style={{
            marginRight: "5%",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/dashboard"
        >
          TECH
        </Link>

        <Link
          style={{
            marginRight: "5%",
            textDecoration: "none",
            color: "#ffffff",
          }}
          to="/dashboard"
        >
          SPORTS
        </Link>
      </div>
    </div>
  );
}
