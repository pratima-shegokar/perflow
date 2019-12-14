import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import RecordsApi from "../../api/RecordsApi";

class EvmBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: {},
      pv: "",
      ev: "",
      ac: "",
      bac: ""
    };
  }

  componentDidMount() {
    this.fetchLastRecord(this.props.location.state.project);
    this.setState({ bac: this.props.location.state.project.budget });
  }

  async fetchLastRecord(projectData) {
    try {
      const response = await RecordsApi.getLastByProjectId(
        projectData.projectId
      );
      const lastRecord = response.data;

      this.setState({
        record: lastRecord,
        pv: lastRecord.pv,
        ev: lastRecord.ev,
        ac: lastRecord.ac
      });

      console.log("The state is :", this.state);
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { pv, ev, ac, bac } = this.state;
    let currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
    let decimalFormatter = new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 2
    });

    return (
      <div>
        <div className="card-body">
          <h1 className="card-title text-center" style={{ color: "black" }}>
            EVM Board
          </h1>
          <br></br>
          <h2 className="card-title text-center" style={{ color: "black" }}>
            Project: {this.props.location.state.project.projectName}
          </h2>

          <div className="container">
            <div className="row">
              {/**Baseline */}
              <div className="col-md-6">
                <div className="card">
                  <h3
                    className="card-title text-center"
                    style={{ color: "black" }}
                  >
                    Baseline
                  </h3>

                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td colspan="2">Budget at Completion (BAC)</td>
                        <td>{currencyFormatter.format(bac)}</td>
                      </tr>
                      <tr>
                        <td colspan="2">Schedule at Completion (BAC)</td>
                        <td>
                          {this.props.location.state.project.duration} Months
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">Planned Value (PV)</td>
                        <td>{currencyFormatter.format(pv)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/**Update */}

              <div className="col-md-6">
                <div className="card">
                  <h3
                    className="card-title text-center"
                    style={{ color: "black" }}
                  >
                    Update
                  </h3>

                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td colspan="2">Data Month</td>
                        <td>{this.state.record.interval}</td>
                      </tr>
                      <tr>
                        <td colspan="2">Earned Value (EV)</td>
                        <td>{currencyFormatter.format(ev)}</td>
                      </tr>
                      <tr>
                        <td colspan="2">Actual Cost (AC)</td>
                        <td>{currencyFormatter.format(ac)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <br />

            {/**Variances */}
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <h3
                    className="card-title text-center"
                    style={{ color: "black" }}
                  >
                    Variances
                  </h3>

                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td colspan="2">Schedule variance (SV)</td>
                        <td>{currencyFormatter.format(ev - pv)}</td>
                      </tr>
                      <tr>
                        <td colspan="2">Cost variance (CV)</td>
                        <td>{currencyFormatter.format(ev - ac)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/**Indecies */}

              <div className="col-md-6">
                <div className="card">
                  <h3
                    className="card-title text-center"
                    style={{ color: "black" }}
                  >
                    Indecies
                  </h3>

                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td colspan="2">Schedule performance index (SPI)</td>
                        <td>{decimalFormatter.format(ev / pv)}</td>
                      </tr>
                      <tr>
                        <td colspan="2">Cost performance index (CPI)</td>
                        <td>{decimalFormatter.format(ev / ac)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <br />

            {/**Anticipations */}
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card">
                  <h3
                    className="card-title text-center"
                    style={{ color: "black" }}
                  >
                    Anticipations
                  </h3>

                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td colspan="2">Estimate at completion (EAC)</td>
                        <td>{currencyFormatter.format(bac / (ev / ac))}</td>
                      </tr>
                      <tr>
                        <td colspan="2">Estimate to completion (ETC)</td>
                        <td>
                          {currencyFormatter.format(bac / (ev / ac) - ac)}
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">Variance at completion (VAC)</td>
                        <td>
                          {currencyFormatter.format(bac - bac / (ev / ac))}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <br />

            <div className="row justify-content-center">
              <div className="col-md-2">
                <Link
                  to={{
                    pathname: "/ProjPanel",
                    state: { project: this.props.location.state.project }
                  }}
                  className="btn btn-outline-primary btn-lg ml-4"
                  role="button"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EvmBoard;
