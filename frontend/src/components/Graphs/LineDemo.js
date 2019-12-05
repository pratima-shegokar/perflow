import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const budget = 100
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
  datasets: [
    {
      label: 'EV - January',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1, 2, 3, 4, 5, 6, 7, budget]
    }, {
    label: 'EV - February',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(25,192,192,0.4)',
          borderColor: '#C1C8E4',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#C1C8E4',
          pointBackgroundColor: '#C1C8E4',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(25,192,192,1)',
          pointHoverBorderColor: 'rgba(0,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [8, 2, 6, 4, 3, 6, 1, 15]
    }
  ],

};

export default class LineDemo extends Component {
  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}