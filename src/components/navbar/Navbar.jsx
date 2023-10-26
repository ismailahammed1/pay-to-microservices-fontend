import React, { useEffect, useState } from 'react';
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
                <span>Pay2Micro-servicec</span>
            </div>
            <div className='links'>
            <span>Business</span>
            <span>explore</span>
            <span>English</span>  
            <button>Sign in</button>
           {!currentUser ?.isSeller && <span>Become a Seller</span>} 
            {!currentUser &&<button>Join</button> }
            {currentUser && (
             <div className='user' onClick={()=>setOpen(!open)}>
               <img src=''alt=''/>
              <span>{currentUser?.username}</span>
              {open &&  <div className='options'>
           {currentUser?.isSeller&&(
                  <>
                  <span>Gigs</span>
                  <span>Add New Gig</span>
                  </>
                )}
                <span>Order</span>
                <span>Messages</span>
                <span>Logout</span>
              </div>}
             </div>
            )}
             </div>
            
        </div>
        {active && (<>
        <hr />
             <div className='menu'>
              <span>test 1</span>
              <span>test 2</span>
              <span>test 3</span>
             </div>
             </>
)}
    </div>
  )
}

export default Navbar