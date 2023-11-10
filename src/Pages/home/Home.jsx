import React from "react";

import Featured from "../../components/Featured/Featured";
import Slide from "../../components/Slide/Slide";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import "./Home";
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide >
      
      </Slide>
    </div>
  );
};

export default Home;
