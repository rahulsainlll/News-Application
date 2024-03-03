import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import axios from "axios";
import AllPost from "../components/AllPost";
import HeroSection from "../components/HeroSection";

export default function IndexPage() {
  return (
    <div>
      <div className="index-page">
        <HeroSection />
        <AllPost />
        <AllPost />
      </div>
    </div>
  );
}
