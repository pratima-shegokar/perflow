import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

class ProjPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { project: {} };
  }

  componentDidMount() {
    const {
      projectUniqueNumber,
      projectName,
      duration,
      budget,
      peakInterval,
      firstPV,
      lastPV,
      advPayment,
      perfBond,
      creditTime,
      discountRate
    } = this.props.location.state.project;

    this.setState({
      projectUniqueNumber,
      projectName,
      duration,
      budget,
      peakInterval,
      firstPV,
      lastPV,
      advPayment,
      perfBond,
      creditTime,
      discountRate
    });
  }

  render() {
    const { project } = this.props.location.state;
    return (
      <div className="App">
        <p
          className="Table-header"
          style={{ color: "black", fontSize: 20, fontWeight: 4 }}
        >Project Specific Details
        </p>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card-body">
                <Table className="mt-2" striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >
                      <td>Project Id</td>
                      <td>{this.state.projectUniqueNumber}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr >
                      <td>Project Name</td>
                      <td>{this.state.projectName}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr >
                      <td>Project Duration</td>
                      <td>{this.state.duration}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr >
                      <td>Budget</td>
                      <td>{this.state.budget}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr >
                      <td>Peak Interval</td>
                      <td>{this.state.peakInterval}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr >
                      <td>First PV</td>
                      <td>{this.state.firstPV}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr >
                      <td>Last PV</td>
                      <td>{this.state.lastPV}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr >
                      <td>Advanced Payment</td>
                      <td>{this.state.advPayment}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr >
                      <td>PerfBond</td>
                      <td>{this.state.perfBond}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr >
                      <td>Credit Time</td>
                      <td>{this.state.creditTime}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr >
                      <td>Discount Rate</td>
                      <td>{this.state.discountRate}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <a
            href="/EditProject"
            className="btn btn-outline-primary btn-sm ml-4"
            role="button"
          >
            Edit
          </a>
          <br /> <br />
        </div>
        <div className="graph-button">
          <Link
            to={{ pathname: "/SCurve", state: { project: project } }}
            type="button-gr"
            class="btn btn-outline-primary"
          >
            Periodical S-Curve Graph
          </Link>{" "}
          &nbsp;&nbsp;&nbsp;
          <button type="button-gr" className="btn btn-outline-primary">
            Periodical Cash Flow Graph
          </button>
          &nbsp;&nbsp;&nbsp;
          <button type="button-gr" className="btn btn-outline-primary">
            Cumulative S-Curve Graph
          </button>
          &nbsp;&nbsp;&nbsp;
          <button type="button-gr" className="btn btn-outline-primary">
            Cumulative Cash Flow Graph
          </button>
          &nbsp;&nbsp;&nbsp;
          <button type="button-gr" className="btn btn-outline-primary">
            EVM Board
          </button>
          &nbsp;&nbsp;&nbsp;
          <button type="button-gr" className="btn btn-outline-primary">
            CFM Board
          </button>
        </div>
      </div>
    );
  }
}

export default ProjPanel;