import React from "react";
import { Line } from "react-chartjs-2";
import RecordsApi from "../../api/RecordsApi";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pCifList: [],
      cifList: [],
      cofList: [],
      chartState: {}
    };

    //save the fetched PvList
    this.fetchPcifList();

    //save the fetched EvList
    this.fetchCifList();

    //save the fetched AcList
    this.fetchCofList();
  }

  async fetchPcifList() {
    try {
      /*console.log(
        "Project ID is: " + this.props.location.state.project.projectId
      );*/
      const response = await RecordsApi.getPcifList(
        this.props.location.state.project.projectId
      );
      const fetchedPcifList = response.data;
      console.log(fetchedPcifList);
      this.setState({ pCifList: fetchedPcifList });

      this.setChart();
    } catch (e) {
      console.error(e);
    }
  }

  async fetchCifList() {
    try {
      const response = await RecordsApi.getCifList(
        this.props.location.state.project.projectId
      );
      const fetchedCifList = response.data;

      this.setState({ cifList: fetchedCifList });

      this.setChart();
    } catch (e) {
      console.error(e);
    }
  }

  async fetchCofList() {
    try {
      const response = await RecordsApi.getCofList(
        this.props.location.state.project.projectId
      );
      const fetchedCofList = response.data;

      this.setState({ cofList: fetchedCofList });

      this.setChart();
    } catch (e) {
      console.error(e);
    }
  }

  setChart() {
    let n = this.state.pCifList.length;
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
          label: "Planned Cash Inflow",
          borderColor: "rgba(0,0,255)",
          data: this.state.pCifList
        },
        {
          label: "Cash Inflow",
          borderColor: "rgba(0,255,0)",
          data: this.state.cifList
        },
        {
          label: "Cash Outflow",
          borderColor: "rgba(255,0,0)",
          data: this.state.cofList
        }
      ]
    };

    this.setState({ chartState: chartState });
  }
  render() {
    return (
      <div>
        <Line
          data={this.state.chartState}
          options={{
            title: {
              display: true,
              text: "Cash Flow Curve",
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
