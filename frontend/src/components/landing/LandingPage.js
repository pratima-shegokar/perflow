import React, { Component } from 'react';
import Slider from '../slider/Slider'

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