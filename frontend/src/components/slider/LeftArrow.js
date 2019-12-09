import React from 'react';
import './Slider.css';

const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      &lt;
    </div>
  );
}

export default LeftArrow;