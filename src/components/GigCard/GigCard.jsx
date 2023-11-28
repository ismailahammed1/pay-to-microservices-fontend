import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./GigCard.scss";



const GigCard = ({ item }) => {

  const { data, error, isLoading } = useQuery({
    queryKey: ["gig"],
    queryFn: async () => {
      try {
        const response = await newRequest.get(`/users/${item.userId}`);
        // Handle successful response
     
        return response.data;
      } catch (error) {
        // Handle error
        console.error("Error during request:", error);
        throw error; // Propagate the error for react-query to handle
      }
    },
  });
  
  return (
    <Link to={ `gig/${item._id}`} className="link">
      
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {
              isLoading?("loading"):error?("something went wrong!"):(  <div className="user">
              <img src={data.pp || "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700945627/png-clipart-computer-icons-avatar-user-profile-blog-personal-heroes-recruiter_ioy4sg.png"} alt="" />
              <span>{data.username}</span>
            </div>
            )}
        
          <p>{item.desc}</p>
          <div className="star">
            <img
              src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700063146/start_53876-25533_yhvo8x.avif"
              alt=""
            />
            <span>{!isNaN(item.totalStars/item.starNumber)&& Math.round(item.totalStars/item.starNumber)}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img
            src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700062984/hearts-free-images-download-19_it8ve7.png"
            alt=""
          />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              ${item.price}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
