import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the right service right <span>plamber</span> & right away
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="../../../public/img/pngwing.com.png" alt="" />
              <input type="text" placeholder='Try"TO building mobile app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <button>popular</button>
            <button>plamber</button>
            <button>plamber</button>
            <button>plamber</button>
            <button>plamber</button>
          </div>
        </div>

        <div className="right">
        <img src="../../../public/img/elec.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
