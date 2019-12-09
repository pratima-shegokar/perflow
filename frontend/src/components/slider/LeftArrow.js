import React from 'react';
import './Slider.css';

const LeftArrow = () => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrow;