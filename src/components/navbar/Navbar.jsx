import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation(); // Corrected variable name to "pathname"
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Ismail Ahammed",
    isSeller: true,
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
          <button>Sign in</button>
          {!currentUser?.isSeller && <Link to="/">Become a Seller</Link>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src="" alt="" />
              <Link to="">{currentUser?.username}</Link>
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
                  <Link to="/">Logout</Link>
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
