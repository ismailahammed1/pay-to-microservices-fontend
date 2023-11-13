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
          <video src="../../../public/img/Looking forward to more moments like these.mp4" controls></video>
        </div>
      </div>

      <div className="explore">
        <div className="container">
          <div className="item">
            <h1>Professional skilled person for Advanced solutions</h1>
            <div className="title">
              <AiOutlineCheckCircle className="icon" />
              pay2services
            </div>
            <p>
              Able to access top staff and professional equipment for any
              project.
            </p>
            <div className="title">
              <AiOutlineCheckCircle className="icon" />
              pay2services certified
            </div>
            <p>Create your own branded marketplace of certified experts.</p>
            <div className="title">
              <AiOutlineCheckCircle className="icon" />
              Enterprise
            </div>
            <p>Manage your skill and find real buyers or enterprises.</p>
          </div>

          <div className="image-container">
            <img className="first-image" src="../../../public/slideimg/as_is.jpg" alt="First Image" />
            <img className="second-image" src="../../../public/slideimg/as_is.jpg" alt="Second Image" />
            <img className="third-image" src="../../../public/slideimg/as_is.jpg" alt="Third Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
