import React from "react";
import { card, project } from "../../../data";
import Catcard from "../../components/Catcard/Catcard";
import Featured from "../../components/Featured/Featured";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Slide from "../../components/Slide/Slide";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import Feartures from "../Feartures/Feartures";
import "./Home.scss";
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
      <Feartures />
      <div className="slide2nd">
        <Slide slidesToShow={4} arrowsScroll={4}>
          {project.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Home;
