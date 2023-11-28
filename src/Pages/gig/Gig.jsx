import { Slider } from "infinite-react-carousel";
import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Reviews from "../../components/reviews/Reviews";
import newRequest from "../../utils/newRequest";
import "./Gig.scss";

function Gig() {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["gig", id],
    queryFn: async () => {
      try {
        const response = await newRequest.get(`/gigs/single/${id}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching gig data:", error);
        throw error;
      }
    },
  });


  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => newRequest.get(`/users/${userId}`).then((res) => res.data),
    enabled: !!userId,
  });

  return (
    <div className="gig">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">
              Pay2Micro-servicec &gt; car-repair &gt;
            </span>
            <h1>{data.title}</h1>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong"
            ) : (
              <div className="user">
                <img
                  className="pp"
                  src={
                    data?.img ||
                    "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700945627/png-clipart-computer-icons-avatar-user-profile-blog-personal-heroes-recruiter_ioy4sg.png"
                  }
                  alt=""
                />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="star">
                    {Array.from(
                      { length: Math.round(data.totalStars / data.starNumber) },
                      (_, i) => (
                        <img
                          src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700063146/start_53876-25533_yhvo8x.avif"
                          alt=""
                          key={i}
                        />
                      )
                    )}

                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}
            <Slider slideToShow={1} arrowsScroll={1} className="slider">
              {
                data.images.map((img) => <img key={img} src={img} alt="" />)}
            </Slider>

            {/* <Slider slideToShow={1} arrowsScroll={1} className="slider">
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
            </Slider> */}
            <h2>About this</h2>
            <p>{data?.desc}</p>

            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "something went wrong!"
            ) : (
              <div className="seller">
                <h2>About The Services</h2>
                <div className="user">
                  <img
                    src={
                      data?.img ||
                      "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700945627/png-clipart-computer-icons-avatar-user-profile-blog-personal-heroes-recruiter_ioy4sg.png"
                    }
                    alt=""
                  />
                  <div className="info">
                    <span>{dataUser?.username}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="star">
                        {Array.from(
                          {
                            length: Math.round(
                              data.totalStars / data.starNumber
                            ),
                          },
                          (_, i) => (
                            <img
                              src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700063146/start_53876-25533_yhvo8x.avif"
                              alt=""
                              key={i}
                            />
                          )
                        )}

                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}

                    <button>Contact Me</button>
                  </div>
                </div>
                {isLoadingUser ? (
                  "loading"
                ) : errorUser ? (
                  `Error loading user data: ${errorUser.message}`
                ) : (
                  <div className="box">
                    <div className="items">
                      <div className="item">
                        <span className="title">From</span>
                        <span className="desc">{dataUser.country}</span>
                      </div>
                      <div className="item">
                        <span className="title">Member since</span>
                        <span className="desc">aug 22</span>
                      </div>
                      <div className="item">
                        <span className="title">Avg. Response Time</span>
                        <span className="desc">2 hours</span>
                      </div>
                      <div className="item">
                        <span className="title">Done work</span>
                        <span className="desc">1 day</span>
                      </div>
                      <div className="item">
                        <span className="title">Languages</span>
                        <span className="desc">English</span>
                      </div>
                    </div>
                    <hr />
                    <p>{data.desc}</p>
                  </div>
                )}
              </div>
            )}

            <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
              {data && (
                <>
                  <h3>{data.shortTitle}</h3>
                  <h2>${data.price}</h2>
                </>
              )}
            </div>

            <p>{data?.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img
                  src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700259343/992700_xltvsx.png"
                  alt=""
                />
                <span>{data?.shortTitle}2 days service</span>
              </div>
              <div className="item">
                <img
                  src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700263922/2089548_rqvoma.png"
                  alt=""
                />
                <span>{data?.revisionNumber}Done And check</span>
              </div>
            </div>
            <div className="features">
              {data?.features.map((features) => (
                <div className="item" key={features}>
                  <img
                    src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700260795/190411_nayu3s.png"
                    alt=""
                  />
                  <span>{features}</span>
                </div>
              ))}
            </div>
            <Link to={`/pay/${id}`}>
              <button>Continue</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;
