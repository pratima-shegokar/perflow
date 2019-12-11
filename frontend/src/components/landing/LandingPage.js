import React, { Component } from 'react';
import Slider from '../slider/Slider'

export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
      document.body.style = 'background: #986AD9; color: white;';
  }

  render() {
    return (
      <div className="mt-3">
        <Slider />
      </div>
    );
  }
}