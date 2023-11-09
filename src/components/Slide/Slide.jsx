import React from 'react';

const Slide = ({children, slidesToShow,arrowsScroll}) => {
  return (
    <div className='slide'>
        <div className='container'>
<Slide slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}></Slide>
        </div>
    </div>
  )
}

export default Slide