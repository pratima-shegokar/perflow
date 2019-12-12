import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const xAxis = {labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']};

const pvDatasetLabel = {label: 'Planned Value'};
const pvDatasetStyle = {
                         fill: false,
                         lineTension: 0.1,
                         backgroundColor: 'rgba(75,192,192,0.4)',
                         borderColor: 'rgba(0,0,0,1)',
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
                         pointHitRadius: 10};
const pvDatasetData = {data: [65, 59, 80, 81, 56, 55, 40]};


 const evDatasetLabel = {label: 'Earned Value'};
 const evDatasetStyle = {
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
                          pointHitRadius: 10};
 const evDatasetData = {data: [20, 40, 70, 70, 45, 50, 15]};


const acDatasetLabel = {label: 'Actual Cost'};
 const acDatasetStyle = {
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
                          pointHitRadius: 10};
 const acDatasetData = {data: [,30, 50, 50, 40, , ]};

const datasets = Object.assign(xAxis,
                                {datasets:[
                                Object.assign(pvDatasetLabel, pvDatasetStyle, pvDatasetData),
                                Object.assign(evDatasetLabel, evDatasetStyle, evDatasetData),
                                Object.assign(acDatasetLabel, acDatasetStyle, acDatasetData),
                                ]});



export default class LineDemo extends Component {
  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Line ref="chart" data={datasets} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}