import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./features.scss";

const Feartures = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="item">
          <h1>Sell your skills for money to the right Buyer</h1>
          <div className="titel">
          <AiOutlineCheckCircle className="icon" />
          Best for budget friendly
        </div>
        <p>
          Find the right service for every price point. Hourly or project based
          pricing.
        </p>
        <div className="titel">
          <AiOutlineCheckCircle className="icon" />
          Protcted Payments, every time
        </div>
        <p>
          Upfront quotes mean no surprises. Payments only get released when you
          approve.
        </p>
        <div className="titel">
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
  );
};

export default Feartures;
