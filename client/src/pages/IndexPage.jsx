import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import axios from "axios";
import AllPost from "../components/AllPost";
import LatestOne from "../components/LatestOne";
import TrendingFour from "../components/TrendingFour";
import BigThree from "../components/BigThree";




export default function IndexPage() {
  return (
    <div>
      <div className="index-page">
        <LatestOne />
        <TrendingFour />
        <BigThree />
      </div>
    </div>
  );
}

