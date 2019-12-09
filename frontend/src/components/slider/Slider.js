import React, { Component } from 'react';
import './Slider.css';
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div className="slider" id="main-slider">
        <Slide />
        <LeftArrow />
        <RightArrow />
      </div>
    );
  }
}