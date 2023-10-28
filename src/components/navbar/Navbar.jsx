import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
  const [active,setActive]=useState(false);
  const [open, setOpen]=useState(false)
  const isActive=()=>{
    window.scrollY>0 ? setActive(true):setActive(false)
  };

  useEffect(()=>{
    window.addEventListener("scroll", isActive);
    return ()=>{
      window.removeEventListener("scroll", isActive)
    };
  },[])

  const currentUser={
    id:1,
    username:"Ismail Ahammed",
    isSeller:true
  }
  return (
    <div className={active?"navbar active":"navbar"}>
        <div className='container'>
            <div className='logo'>
                <Link to="/">Pay2Micro-servicec</Link>
            </div>
            <div className='links'>
            <Link to="/">Business</Link>
            <Link to="/">explore</Link>
            <Link to="/">English</Link>  
            <button>Sign in</button>
           {!currentUser ?.isSeller && <Link to="/">Become a Seller</Link>} 
            {!currentUser &&<button>Join</button> }
            {currentUser && (
             <div className='user' onClick={()=>setOpen(!open)}>
               <img src=''alt=''/>
              <Link to="">{currentUser?.username}</Link>
              {open &&  <div className='options'>
           {currentUser?.isSeller&&(
                  <>
                  <Link to="/mygigs">Gigs</Link>
                  <Link to="/add">Add New Gig</Link>
                  </>
                )}
                <Link to="/orders">Order</Link>
                <Link to="/messages">Messages</Link>
                <Link to="/">Logout</Link>
              </div>}
             </div>
            )}
             </div>
            
        </div>
        {active && (<>
        <hr />
             <div className='menu'>
              <Link to="">test 1</Link>
              <Link to="">test 2</Link>
              <Link to="">test 3</Link>
             </div>
             </>
)}
    </div>
  )
}

export default Navbar