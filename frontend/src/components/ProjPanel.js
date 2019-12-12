import React, { Component } from "react";
import { Table } from "react-bootstrap";

export class ProjPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { proj: {} };
  }

  componentDidMount() {
    this.refreshlist();
  }

  refreshlist() {
    this.setState({
      proj: {
        projectName: "Silver Tower",
        budget: 10000,
        duration: 24,
        firstPv: 593472873,
        lastPv: 13435488,
        peak: 12
      }
    });

    console.log(Object.entries(this.state.proj));
  }
  render() {
    const { proj } = this.state;

    return (
      <div className="App">
        <p className="Table-header">Project Specific Details</p>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="card-body">
                <Table className="mt-2" striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(proj).map(([name, value]) => {
                      return (
                        <tr key={name}>
                          <td>{name}</td>
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
          <a
            href="/EditProject"
            className="btn btn-outline-primary btn-sm ml-4"
            role="button"
          >
            Edit
          </a>
          <br /> <br />
        </div>
        <div class="graph-button">
          <button type="button-gr" class="btn btn-outline-primary">
            Periodical S-Curve Graph
          </button>{" "}
          &nbsp;&nbsp;&nbsp;
          <button type="button-gr" class="btn btn-outline-primary">
            Periodical Cash Flow Graph
          </button>{" "}
          &nbsp;&nbsp;&nbsp;
          <button type="button-gr" class="btn btn-outline-primary">
            Cumulative S-Curve Graph
          </button>{" "}
          &nbsp;&nbsp;&nbsp;
          <button type="button-gr" class="btn btn-outline-primary">
            Cumulative Cash Flow Graph
          </button>{" "}
          &nbsp;&nbsp;&nbsp;
          <button type="button-gr" class="btn btn-outline-primary">
            EVM Board
          </button>{" "}
          &nbsp;&nbsp;&nbsp;
          <button type="button-gr" class="btn btn-outline-primary">
            CFM Board
          </button>
        </div>
      </div>
    );
  }
}

export default ProjPanel;
