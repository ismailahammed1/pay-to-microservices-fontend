import React from 'react';
import { useQuery } from 'react-query';
import newRequest from '../../utils/newRequest';
import "./Review.scss";

const Review = ({ review }) => {

  const { data, error, isLoading } = useQuery({
    queryKey: [review.userId],
    queryFn: async () => {
      try {
        const res = await newRequest.get(`/users/${review.userId}`);
        return res.data;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },    
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user data: {error.message}</div>;
  }

  return (
    <div className="review">
      <div className="user">
        <img
          className="pp"
          src={data.img || "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700062034/images_xhicbw.jpg"}
          alt=""
        />
        <div className="info">
          <span>{data.userName}</span>
          <div className="country">
            <img
              src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700257157/pngtree-flowy-flag-of-palestine-with-splash-effect-png-image_6599848_pwd2yy.png"
              alt=""
            />
            <span>{data.country}</span>
          </div>
        </div>
      </div>
      <div className="star">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img
              src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700063146/start_53876-25533_yhvo8x.avif"
              alt="" key={i}
            />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img
          src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700257510/126473_xm0q4f.png"
          alt=""
        />
        <span>Yes</span>
        <img
          src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700257511/126504_hsvr1h.png"
          alt=""
        />
        <span>NO</span>
      </div>
    </div>
  );
}

export default Review;
