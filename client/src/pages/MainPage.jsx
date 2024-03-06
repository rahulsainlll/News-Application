import React, { useEffect, useState } from "react";
import LatestOne from "../components/LatestOne";
import TrendingThree from "../components/TrendingThree";
import BigThree from "../components/BigThree";
import MixFour from "../components/MixFour";
import TaylorFour from "../components/TaylorFour";
import Carousel from "../components/Carousel";

export default function IndexPage() {
  return (
    <div className="gridContainer">
      <div className="index-page">
        <div>
          {/* <LatestOne /> */}
          <LatestOne />
          <Carousel/>
        </div>
        <TrendingThree />
        <BigThree />
      </div>

      <div className="Top-four">
        <MixFour />
        <TaylorFour />
      </div>
    </div>
  );
}

