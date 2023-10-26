import React, { useEffect, useState } from 'react';
import "./Navbar.scss";

const Navbar = () => {
  const [active,setActive]=useState(false);

  const isActive=()=>{
    window.scrollY>0 ? setActive(true):setActive(false)
  };

  useEffect(()=>{
    window.addEventListener("scroll", isActive);
    return ()=>{
      window.removeEventListener("scroll", isActive)
    };
  },[])
  return (
    <div className={active?"navbar active":"navbar"}>
        <div className='container'>
            <div className='logo'>
                <span>Pay2Micro-servicec</span>
            </div>
            <div className='links'>
            <span>Business</span>
            <span>explore</span>
            <span>English</span> 
            <span>Become a Seller</span> 
            <button>Sign in</button> 
            <button>Join</button> 
             </div>
            
        </div>
        <>
        <hr />
             <div className='menu'>
              <span>test 1</span>
              <span>test 2</span>
              <span>test 3</span>
             </div>
             </>
    </div>
  )
}

export default Navbar