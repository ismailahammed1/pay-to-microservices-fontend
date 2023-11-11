import React from "react";

import { card } from "../../../data";
import Catcard from "../../components/Catcard/Catcard";
import Featured from "../../components/Featured/Featured";
import Slide from "../../components/Slide/Slide";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import "./Home";
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
  {card.map((item) => (
    <Catcard key={item.id} item={item} />
  ))}
</Slide>


    </div>
  );
};

export default Home;
