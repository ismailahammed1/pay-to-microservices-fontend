import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";

import { useLocation } from "react-router-dom";
import GigCard from "../../components/GigCard/GigCard";
import newRequest from "../../utils/newRequest";
import "./Gigs.scss";

const Gigs = () => {
  const [sort, setSort] = useState("seles");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: async () => {
      try {
        const response = await newRequest.get(
          `/gigs${search ? search : ""}?min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        );
        
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
      }
    },
  });


  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  
  useEffect(() => {
   
    refetch();
  }, [sort]);
  

  const apply = () => {
    refetch()
   
  };
  


  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">P2S &gt; car-repair &gt;</span>
        <h1>Car-Repair</h1>
        <p>
          Explore the boundaries of services with Pay2Micro-Service's Car-Repair
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">sortBy</span>
            <span className="sortType">
              {sort === "sales" ? "best selling" : "Newest"}
            </span>
            <img
              src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700203235/png-transparent-down-arrow-logo-arrow-down-android-down-arrow-hand-triangle-internet-thumbnail_xiwjlp.png"
              alt=""
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("CreateAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "Loading..."
            : error
            ? "Something went wrong!"
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
