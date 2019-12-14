import React from "react";
import { Bar } from "react-chartjs-2";
import RecordsApi from "../../api/RecordsApi";

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

      //calculate the monthly pv list from fetched pv list
      const pvListSize = fetchedPvList.length;
      const monthlyPvList = [];
      for (let i = 0; i < pvListSize; i++) {
        if (i == 0) {
          monthlyPvList.push(fetchedPvList[i]);
        } else if (fetchedPvList[i] == null) {
          break;
        } else {
          monthlyPvList.push(fetchedPvList[i] - fetchedPvList[i - 1]);
        }
      }

      this.setState({ pvList: monthlyPvList });

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

      //calculate the monthly ev list from fetched ev list
      const evListSize = fetchedEvList.length;
      const monthlyEvList = [];
      for (let i = 0; i < evListSize; i++) {
        if (i == 0) {
          monthlyEvList.push(fetchedEvList[i]);
        } else if (fetchedEvList[i] == null) {
          break;
        } else {
          monthlyEvList.push(fetchedEvList[i] - fetchedEvList[i - 1]);
        }
      }

      this.setState({ evList: monthlyEvList });

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

      //calculate the monthly ac list from fetched ac list
      const acListSize = fetchedAcList.length;
      const monthlyAcList = [];
      for (let i = 0; i < acListSize; i++) {
        if (i == 0) {
          monthlyAcList.push(fetchedAcList[i]);
        } else if (fetchedAcList[i] == null) {
          break;
        } else {
          monthlyAcList.push(fetchedAcList[i] - fetchedAcList[i - 1]);
        }
      }

      this.setState({ acList: monthlyAcList });

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
          backgroundColor: "rgba(0,0,255)",
          data: this.state.pvList
        },
        {
          label: "Earned value",
          borderColor: "rgba(0,255,0)",
          backgroundColor: "rgba(0,255,0)",
          data: this.state.evList
        },
        {
          label: "Actual Cost",
          borderColor: "rgba(255,0,0)",
          backgroundColor: "rgba(255,0,0)",
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
        <Bar
          data={this.state.chartState}
          options={{
            title: {
              display: true,
              text: "S-Curve Monthly",
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
