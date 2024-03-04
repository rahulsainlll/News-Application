import React, { useEffect, useState } from "react";
import LatestOne from "../components/LatestOne";
import TrendingThree from "../components/TrendingThree";
import BigThree from "../components/BigThree";
import MixFour from "../components/MixFour";
import SportsFour from "../components/SportsFour";

export default function IndexPage() {
  return (
    <div className="gridContainer">
      <div className="index-page">
        <LatestOne />
        <TrendingThree />
        <BigThree />
      </div>

      <div>
        <MixFour />
        <SportsFour />
      </div>
    </div>
  );
}
