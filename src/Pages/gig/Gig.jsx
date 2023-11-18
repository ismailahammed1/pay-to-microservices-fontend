import { Slider } from "infinite-react-carousel";
import React from "react";
import "./Gig.scss";
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
               <span>5.0</span>
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
                <div className="stars">
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
                   <span>5.0</span>
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
                  <span className="desc">2 hour</span>
                </div>
                <div className="item">
                  <span className="title">done work</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                {" "}
                It seems like your request is incomplete. If you meant to ask
                about something specific or would like assistance with sorting
                information, please provide more details or clarify your
                question. I'm here to help!r issues, from routine maintenance
                like oil changes and brake inspections to major repairs
                involving engines and transmissions. I excel in diagnosing
                problems, providing accurate estimates, and delivering quality
                repairs. I prioritize regular maintenance for optimal vehicle
                performance and longevity. Trust me for expert car care and
                reliable service at every step.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className="pp"
                  src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700062034/images_xhicbw.jpg"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country">
                    <img
                      src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700257157/pngtree-flowy-flag-of-palestine-with-splash-effect-png-image_6599848_pwd2yy.png"
                      alt=""
                    />
                    <span>palestine</span>
                  </div>
                </div>
              </div>
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
                 <span>5.0</span>
              </div>
              <p>
                It seems like your request is incomplete. If you meant to ask
                about something specific or would like assistance with sorting
                information, please provide more details or clarify your
                question. I'm here to help!
              </p>
              <div className="helpful">
                <span>Helpful</span>
                <img
                  src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700257510/126473_xm0q4f.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700257511/126504_hsvr1h.png"
                  alt=""
                />
                <span>NO</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700061436/download_gknafp.jpg"
                  alt=""
                  className="pp"
                />
                <div className="info">
                  <span>lyle giles</span>
                  <div className="country">
                    <img
                      src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700257157/pngtree-flowy-flag-of-palestine-with-splash-effect-png-image_6599848_pwd2yy.png"
                      alt=""
                    />
                    <span>Palastine</span>
                  </div>
                </div>
              </div>
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
                 <span>5.0</span>
              </div>
              <p>
                Thrilled with the amazing car repair! The service was efficient,
                and the technicians demonstrated impressive expertise. Highly
                recommend their outstanding work!
              </p>
              <div className="helpful">
                <span>Helpful</span>
                <img
                  src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700257510/126473_xm0q4f.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700257511/126504_hsvr1h.png"
                  alt=""
                />
                <span>NO</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700061436/download_gknafp.jpg"
                  alt=""
                  className="pp"
                />
                <div className="info">
                  <span>lyle giles</span>
                  <div className="country">
                    <img
                      src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700257157/pngtree-flowy-flag-of-palestine-with-splash-effect-png-image_6599848_pwd2yy.png"
                      alt=""
                    />
                    <span>Palastine</span>
                  </div>
                </div>
              </div>
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
                 <span>5.0</span>
              </div>
              <p>
                Thrilled with the amazing car repair! The service was efficient,
                and the technicians demonstrated impressive expertise. Highly
                recommend their outstanding work!
              </p>
              <div className="helpful">
                <span>Helpful</span>
                <img
                  src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700257510/126473_xm0q4f.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700257511/126504_hsvr1h.png"
                  alt=""
                />
                <span>NO</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>Car repair services</h3>
            <h2>$45.54</h2>
          </div>

          <p>i will service car any issues</p>
          <div className="details">
            <div className="item">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700259343/992700_xltvsx.png"
                alt=""
              />
              <span>2 days service</span>
            </div>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700263922/2089548_rqvoma.png"
                alt=""
              />
              <span>Done And check</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700260719/190411_caccy2.png"
                alt=""
              />
              <span>promt</span>
            </div>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700260719/190411_caccy2.png"
                alt=""
              />
              <span>Atwork Delivery</span>
            </div>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700260719/190411_caccy2.png"
                alt=""
              />
              <span>Atwork Delivery</span>
            </div>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700260719/190411_caccy2.png"
                alt=""
              />
              <span>Atwork Delivery</span>
            </div>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700260719/190411_caccy2.png"
                alt=""
              />
              <span>Atwork Delivery</span>
            </div>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700260719/190411_caccy2.png"
                alt=""
              />
              <span>Addotional Service</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
