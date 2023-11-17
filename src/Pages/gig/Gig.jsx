import { Slider } from "infinite-react-carousel";
import React from "react";
import "./Gig";
const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">P2S &gt; car-repair &gt;</span>
          <h1>I will solve Car problem</h1>
          <div className="user">
            <img
              src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1699966536/pexels-photo-3762813_n7mfik.webp"
              alt=""
              className="pp"
            />
            <span>Anan</span>
            <div className="star">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700063146/start_53876-25533_yhvo8x.avif"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700063146/start_53876-25533_yhvo8x.avif"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700063146/start_53876-25533_yhvo8x.avif"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700063146/start_53876-25533_yhvo8x.avif"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700063146/start_53876-25533_yhvo8x.avif"
                alt=""
              />
              <span>5</span>
            </div>
          </div>
          <Slider slideToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700213445/pexels-photo-1074535_j2mcne.jpg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700213430/pexels-photo-1054777_e09evt.webp"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700213438/pexels-photo-1462935_p4hr0i.jpg"
              alt=""
            />
          </Slider>
          <h2>About this</h2>
          <p>
            Car repair involves diagnosing and fixing issues with automobiles.
            It includes routine maintenance like oil changes and brake
            inspections, major repairs such as engine or transmission work, and
            addressing electrical or collision-related issues. The process
            includes diagnosis, estimation, authorization, repair work, quality
            checks, and customer communication. Regular maintenance is crucial
            for vehicle longevity and optimal performance. Choosing a reputable
            repair shop with certified technicians is essential for quality
            service.
          </p>
          <div className="seller">
            <h2>About The Service Man</h2>
            <div className="user">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1699966536/pexels-photo-3762813_n7mfik.webp"
                alt=""
              />
              <div className="info">
                <span>Anna Bell</span>
                <div className="star">
                  <img
                    src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700063146/start_53876-25533_yhvo8x.avif"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700063146/start_53876-25533_yhvo8x.avif"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700063146/start_53876-25533_yhvo8x.avif"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700063146/start_53876-25533_yhvo8x.avif"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700063146/start_53876-25533_yhvo8x.avif"
                    alt=""
                  />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">DSA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">aug 22</span>
                </div>
                <div className="item">
                  <span className="title">Avg. Respose Time</span>
                  <span className="desc">4 hour</span>
                </div>
                <div className="item">
                  <span className="title">done work</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">Bangal</span>
                </div>
              </div>
              <hr />
              <p>I'm Jhone, an experienced car repair specialist. I diagnose and fix various car issues, from routine maintenance like oil changes and brake inspections to major repairs involving engines and transmissions. I excel in diagnosing problems, providing accurate estimates, and delivering quality repairs. I prioritize regular maintenance for optimal vehicle performance and longevity. Trust me for expert car care and reliable service at every step.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gig;
