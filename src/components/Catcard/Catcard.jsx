import React from 'react'
import { Link } from 'react-router-dom'
import "../Catcard/Catcard.scss"

const Catcard = ({card}) => {
  return (
  <Link to="/gig?cat=design">
    <div className='catcard'>
        <img src={card.img} alt="" />
        <span className='name'>{card.name}</span>   
        <span className='category'>{card.category}</span>   
        </div>
  </Link>
  )
}

export default Catcard