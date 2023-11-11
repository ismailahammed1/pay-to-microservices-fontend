import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the right service right <span>Worker</span> & right away
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="../../../public/img/pngwing.com.png" alt="" />
              <input type="text" placeholder='Try"TO building mobile app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <button>Popular</button>
            <button>Carpenter</button>
            <button>Housekeeper</button>
            <button>Pet Sitter</button>
            <button>Electricians</button>
          </div>
        </div>

        <div className="right">
        <img src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1699739353/pay2saleServices/worker/pngwing.com_1_ignkvk.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
