import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

class ProjPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { project: {} };
  }

  getFullName(name) {
    let fullName = "";
    switch (name) {
      case "projectId":
        fullName = "Project ID";
        break;
      case "projectUniqueNumber":
        fullName = "Project Unique Number";
        break;
      case "projectName":
        fullName = "Project Name";
        break;
      case "duration":
        fullName = "Duration";
        break;
      case "budget":
        fullName = "Budget";
        break;
      case "peakInterval":
        fullName = "Peak Interval";
        break;
      case "firstPV":
        fullName = "First Planned Value ($)";
        break;
      case "lastPV":
        fullName = "Last Planned Value ($)";
        break;
      case "advPayment":
        fullName = "Advance Payment";
        break;
      case "perfBond":
        fullName = "Performance Bond";
        break;
      case "creditTime":
        fullName = "Credit Time";
        break;
      case "discountRate":
        fullName = "Discount Rate";
    }
    return fullName;
  }

  render() {
    const { project } = this.props.location.state;
    return (
      <div className="App">
        <p
          className="Table-header"
          style={{ color: "black", fontSize: 20, fontWeight: 4 }}
        >
          Project Specific Details
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
                    {Object.entries(project).map(([name, value]) => {
                      return (
                        <tr key={name}>
                          <td>{this.getFullName(name)}</td>
                          <td>{value}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>

        <div class="wrapper">
          <Link
            to={{ pathname: "/EditProject", state: { project: project } }}
            className="btn btn-outline-primary btn-sm ml-4"
            role="button"
          >
            Edit
          </Link>
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
