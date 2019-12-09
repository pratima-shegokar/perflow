import React, { Component } from 'react';
import Slider from './src/components/slider/Slider.js'

export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div>
        <Slider />
      </div>
    );
  }
}