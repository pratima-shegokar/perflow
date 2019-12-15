import React from "react";
import { Bar } from "react-chartjs-2";
import RecordsApi from "../../api/RecordsApi";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pCifList: [],
      cifList: [],
      cofList: [],
      netList: [],
      chartState: {}
    };

    //save the fetched pCifList
    this.fetchPcifList();

    //save the fetched cifList
    this.fetchCifList();

    //save the fetched cofList
    this.fetchCofList();

    this.calcNet();
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

      //calculate the monthly pv list from fetched pv list
      const pCifListSize = fetchedPcifList.length;
      const monthlyPcifList = [];
      for (let i = 0; i < pCifListSize; i++) {
        if (i == 0) {
          monthlyPcifList.push(fetchedPcifList[i]);
        } else if (fetchedPcifList[i] == null) {
          break;
        } else {
          monthlyPcifList.push(fetchedPcifList[i] - fetchedPcifList[i - 1]);
        }
      }

      this.setState({ pCifList: monthlyPcifList });

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

      //calculate the monthly ev list from fetched ev list
      const cifListSize = fetchedCifList.length;
      const monthlyCifList = [];
      for (let i = 0; i < cifListSize; i++) {
        if (i == 0) {
          monthlyCifList.push(fetchedCifList[i]);
        } else if (fetchedCifList[i] == null) {
          break;
        } else {
          monthlyCifList.push(fetchedCifList[i] - fetchedCifList[i - 1]);
        }
      }

      this.setState({ cifList: monthlyCifList });

      this.setChart();
      return monthlyCifList;
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

      //calculate the monthly ac list from fetched ac list
      const cofListSize = fetchedCofList.length;
      const monthlyCofList = [];
      for (let i = 0; i < cofListSize; i++) {
        if (i == 0) {
          monthlyCofList.push(fetchedCofList[i]);
        } else if (fetchedCofList[i] == null) {
          break;
        } else {
          monthlyCofList.push(-(fetchedCofList[i] - fetchedCofList[i - 1]));
        }
      }

      this.setState({ cofList: monthlyCofList });

      this.setChart();
      return monthlyCofList;
    } catch (e) {
      console.error(e);
    }
  }

  async calcNet() {
    try {
      //calculate the net cash list from cif and cof lists
      const fetchedCifList = await this.fetchCifList();
      const fetchedCofList = await this.fetchCofList();

      const netListSize = fetchedCifList.length;
      const netList = [];
      for (let i = 0; i < netListSize; i++) {
        if (i == 0) {
          netList.push(fetchedCifList[i]);
        } else if (fetchedCifList[i] == null) {
          break;
        } else {
          netList.push(fetchedCifList[i] + fetchedCofList[i]);
        }
      }

      this.setState({ netList: netList });

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
        /*{
          label: "Planned Cash Inflow",
          borderColor: "rgba(0,0,255)",
          backgroundColor: "rgba(0,0,255)",
          data: this.state.pCifList
        },*/
        {
          label: "Net Cash Flow",
          type: "line",
          fill: false,
          borderColor: "rgba(0,0,255)",
          backgroundColor: "rgba(0,0,255)",
          data: this.state.netList
        },
        {
          label: "Cash Inflow",
          stack: "stack1",
          borderColor: "rgba(0,255,0)",
          backgroundColor: "rgba(0,255,0)",
          data: this.state.cifList
        },
        {
          label: "Cash Outflow",
          stack: "stack1",
          borderColor: "rgba(255,0,0)",
          backgroundColor: "rgba(255,0,0)",
          data: this.state.cofList
        }
      ]
    };

    this.setState({ chartState: chartState });
  }
  render() {
    return (
      <div>
        <Bar
          data={this.state.chartState}
          options={{
            title: {
              display: true,
              text: "Cash Flow Monthly",
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
