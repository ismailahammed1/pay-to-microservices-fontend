import React from "react";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700063146/start_53876-25533_yhvo8x.avif" alt=""></img>
            <span></span>
          </div>
          <hr/>
          <div className="detail">
            <img src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700062984/hearts-free-images-download-19_it8ve7.png" alt="">
              <div className="price">
                <span>STARTING AT</span>
                <h2>${item.price}
                  <sup>99</sup>
                </h2>
              </div>
            </img>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
