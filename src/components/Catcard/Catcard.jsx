import React from 'react';
import { Link } from 'react-router-dom';
import '../Catcard/Catcard.scss';

const Catcard = ({ item }) => {
  const linkTo = `/gig?cat=${item.category}`;

  return (
    <Link to={linkTo}>
      <div className='catcard'>
        <img src={item.img} alt="" />

        <div className='overlay'>
          <span className='category'>{item.category}</span>
          <span className='name'>{item.name}</span>
        </div>
      </div>
    </Link>
  );
}

export default Catcard;
