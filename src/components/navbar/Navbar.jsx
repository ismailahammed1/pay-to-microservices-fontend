import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  
  const navigate=useNavigate();
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null); // Corrected localStorage item name
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/">Pay2Micro-servicec</Link>
        </div>
        <div className="links">
          <Link to="/">Business</Link>
          <Link to="/">explore</Link>
          <Link to="/">English</Link>
         
          {!currentUser?.isSeller && <Link to="/">Become a Seller</Link>}  
          {!currentUser &&  <button onClick={() => navigate("/login")}>Sign up</button>}
          {!currentUser &&  <button onClick={() => navigate("/register")}>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img||"/public/slideimg/as_is.jpg"} alt="" />
              <a >{currentUser?.username}</a>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
  <>
    <Link to="/mygigs">Gigs</Link>
    <Link to="/add">Add New Gig</Link>
  </>
)}

                  <Link to="/orders">Order</Link>
                  <Link to="/messages">Messages</Link>
                  <Link onClick={handleLogout}>Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link to="/">Atoumobile Services</Link>
            <Link to="/">Agricultural</Link>
            <Link to="/">Carpenters</Link>
            <Link to="/">Electricians</Link>
            <Link to="/">Heavy Equipment Operators</Link>
            <Link to="/">Transportation </Link>
            <Link to="/">Construction  </Link>
            <Link to="/">Plumber</Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
