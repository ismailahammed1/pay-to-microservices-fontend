// Slide.jsx
import Slider from 'infinite-react-carousel';
import React from 'react';
import { card } from '../../../data';
import Catcard from '../Catcard/Catcard';
import './Slide.scss';

const Slide = () => {
  return (
    <div className="slide">
      <div className="container">
        <Slider>
          {card.map((cardItem) => (
            <Catcard item={cardItem} key={cardItem.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
