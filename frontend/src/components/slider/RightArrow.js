import React from 'react';
import './Slider.css';

const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      &gt;
    </div>
  );
}

export default RightArrow;