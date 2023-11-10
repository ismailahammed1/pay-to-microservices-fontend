import React from 'react';
import { Link } from 'react-router-dom';
import '../Catcard/Catcard.scss';

const Catcard = ({ item }) => {
  const linkTo = `/gig?cat=${item.category}`;
  console.log('Generated Link:', linkTo);

  return (
    <Link to={linkTo}>
      <div className='catcard'>
        <img src={item.img} alt="" />
      </div>
    </Link>
  );
}

export default Catcard;
