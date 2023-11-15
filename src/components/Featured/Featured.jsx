import React, { useEffect, useState } from "react";
import "./Featured.scss";

const Featured = () => {
  const images = [
    "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1699739353/pay2saleServices/worker/pngwing.com_1_ignkvk.png",
   "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1699739351/pay2saleServices/worker/pngwing.com_4_j2uxyf.png",
   "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1699739351/pay2saleServices/worker/pngwing.com_8_siui4g.png"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, [images.length]);
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
        <img className="image-transition"
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
