import React from "react";
import { Line } from "react-chartjs-2";
import RecordsApi from "./../../api/RecordsApi";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pvList: [],
      evList: [],
      acList: [],
      chartState: {}
    };

    //save the fetched PvList
    this.fetchPvList();

    //save the fetched EvList
    this.fetchEvList();

    //save the fetched AcList
    this.fetchAcList();
  }

  async fetchPvList() {
    try {
      /*console.log(
        "Project ID is: " + this.props.location.state.project.projectId
      );*/
      const response = await RecordsApi.getPvList(
        this.props.location.state.project.projectId
      );
      const fetchedPvList = response.data;

      this.setState({ pvList: fetchedPvList });

      this.setChart();
    } catch (e) {
      console.error(e);
    }
  }

  async fetchEvList() {
    try {
      const response = await RecordsApi.getEvList(
        this.props.location.state.project.projectId
      );
      const fetchedEvList = response.data;

      this.setState({ evList: fetchedEvList });

      this.setChart();
    } catch (e) {
      console.error(e);
    }
  }

  async fetchAcList() {
    try {
      const response = await RecordsApi.getAcList(
        this.props.location.state.project.projectId
      );
      const fetchedAcList = response.data;

      this.setState({ acList: fetchedAcList });

      this.setChart();
    } catch (e) {
      console.error(e);
    }
  }

  setChart() {
    let n = this.state.pvList.length;
    let periods = [];

    for (let i = 0; i < n; i++) {
      periods.push("Month-" + (i + 1));
    }

    //The state variable contains all the data and styling properties of the graph.
    const chartState = {
      labels: periods,
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
          data: this.state.evList
        },
        {
          label: "Actual Cost",
          borderColor: "rgba(255,0,0)",
          data: this.state.acList
        }
      ]
    };

    this.setState({ chartState: chartState });
  }
  render() {
    console.log("The PV List in render= " + this.state.pvList);
    return (
      <div>
        <Line
          data={this.state.chartState}
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
