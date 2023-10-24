import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
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
    </div>
  )
}

export default Navbar