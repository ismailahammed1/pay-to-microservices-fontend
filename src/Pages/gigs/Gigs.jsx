import React, { useRef } from "react";
import { useQuery } from "react-query";
import { gigs } from "../../../data";
import GigCard from "../../components/GigCard/GigCard";
import newRequest from "../../utils/newRequest";
import "./Gigs";
const Gigs = () => {
  
  const [sort, setSort]=useState('seles');
  const [open, setOpen]=useState(false);
  const minRef=useRef();
  const maxRef=useRef();
  const { data, error, isLoading } = useQuery({
      queryKey:['repoData'],
      queryFn:()=>newRequest("/gigs")
  });
console.log(data);
  const reSort=(type)=>{
    setSort(type);
    setOpen(false);
  };
  const apply=()=>{
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  }
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
            <button onCanPlay={apply}>Apply</button>
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
               {sort ==="sales"?(<span onClick={()=>reSort('CreateAt')}>Newest</span>): 
                (<span onClick={()=>reSort('sales')}>Best Selling</span>)}
                <span onClick={()=>reSort('sales')}>Popular</span>
              </div>
            )}
          </div>
          <div className="cards">
            {gigs.map((gig)=>(
              <GigCard key={gig.id} item={gig}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gigs;
