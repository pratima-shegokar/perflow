import React from "react";
import { Line } from "react-chartjs-2";
import RecordsApi from "./../../api/RecordsApi";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pvList: [],
      chartState: {}
    };
  }

  componentDidMount() {
    //const { project } = this.props.location.state;

    this.fetchPvList().then(() => console.log(this.state.pvList));

    //The state variable contains all the data and styling properties of the graph.
    const chartState = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
      ],
      fill: false,
      lineTension: 0.5, // lineTension is a property used to controls the curvature of the line joining the points.
      backgroundColor: "rgba(5,192,192,0.4)",
      borderWidth: 2,
      //the dataset sub-set contains information such as bar color, border width, ​and height of the bar.
      datasets: [
        {
          label: "Planned value",
          borderColor: "rgba(0,0,255)",
          data: this.state.pvList
        },
        {
          label: "Earned value",
          borderColor: "rgba(0,255,0)",
          data: [65, 59, 89, 81, 56]
        },
        {
          label: "Actual Cost",
          borderColor: "rgba(255,0,0)",
          data: [65, 59, 89, 81, 56]
        }
      ]
    };

    this.setState({ chartState: chartState });
  }

  async fetchPvList() {
    try {
      const response = await RecordsApi.getPvList(
        this.props.location.state.project.projectId
      );
      const fetchedPvList = response.data;

      this.setState({ pvList: fetchedPvList });
      return fetchedPvList;
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        <Line
          data={this.chartState}
          options={{
            title: {
              display: true,
              text: "S-Curve",
              fontSize: 20
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </div>
    );
  }
}
