import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./features.scss";

const Features = () => {
  return (
    <div>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Sell your skills for money to the right Buyer</h1>
            <div className="title">
              <AiOutlineCheckCircle className="icon" />
              Best for budget-friendly
            </div>
            <p>
              Find the right service for every price point. Hourly or project
              based pricing.
            </p>
            <div className="title">
              <AiOutlineCheckCircle className="icon" />
              Protected Payments, every time
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
            <div className="title">
              <AiOutlineCheckCircle className="icon" />
              24/7 support
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
          <video
            src="../../../public/img/Looking forward to more moments like these.mp4"
            controls
          ></video>
        </div>
      </div>
      {/* -------features drak end--------- */}
      <div className="explorer">
        <div className="container">
        <h1>Explore the Pay2Micro-servicec Marketplace</h1>
          <div className="items">
        
            <div className="item">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1699963421/3627886_i9da05.png"
                alt=""
              />
              <div className="line"></div>
              <span>car-repair</span>
            </div>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1699962365/teacher_tsz358.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Teacher</span>
            </div>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1699914240/pay2saleServices/explore%20marketplace/gardener-hand-with-a-growing-plant-on-it-svgrepo-com_afouic.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Gardener</span>
            </div>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1699963274/1995491_nvz8de.png"
                alt=""
              />
              <div className="line"></div>
              <span>Painter</span>
            </div>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1699914242/pay2saleServices/explore%20marketplace/hospital-svgrepo-com_pincwg.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Hospital Services</span>
            </div>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1699963486/4457516_ezqcfj.png"
                alt=""
              />
              <div className="line"></div>
              <span>Plumber</span>
            </div>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1699963895/3774902_nmfnx6.png"
                alt=""
              />
              <div className="line"></div>
              <span>Lobar</span>
            </div>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1699963115/electrician_y7thqi.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Electrician</span>
            </div>
          </div>
        </div>
      </div>
      {/* -------features drak start--------- */}
      <div className="features drak">
        <div className="container">
          <div className="item">
            <h1>Professional skilled person for Advanced solutions</h1>
            <div className="title">
              <AiOutlineCheckCircle className="icon" />
              Pay2Micro-servicec
            </div>
            <p>
              Able to access top staff and professional equipment for any
              project.
            </p>
            <div className="title">
              <AiOutlineCheckCircle className="icon" />
              Pay2Micro-servicec
            </div>
            <p>Create your own branded marketplace of certified experts.</p>
            <div className="title">
              <AiOutlineCheckCircle className="icon" />
              Enterprise
            </div>
            <p>Manage your skill and find real buyers or enterprises.</p>
            <button>Learn more </button>
          </div>

          <img
            className="img-container"
            src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1699904097/pay2saleServices/business-desktop-870-x2_k6zogt.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
