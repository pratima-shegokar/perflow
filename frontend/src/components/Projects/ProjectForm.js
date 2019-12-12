import React from "react";

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectUniqueNumber: "",
      projectName: "",
      duration: "",
      budget: "",
      peakInterval: "",
      firstPV: "",
      lastPV: "",
      advPayment: "",
      perfBond: "",
      creditTime: "",
      discountRate: ""
    };
  }

  handleSubmit = () => {
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
    } = this.state;

    // Invoke the passed in event callback
    this.props.onSubmit({
      projectUniqueNumber: projectUniqueNumber,
      projectName: projectName,
      duration: duration,
      budget: budget,
      peakInterval: peakInterval,
      firstPV: firstPV,
      lastPV: lastPV,
      advPayment: advPayment,
      perfBond: perfBond,
      creditTime: creditTime,
      discountRate: discountRate
    });

    //clear the form
    this.handleClearForm();
  };

  // Clear the input field
  handleClearForm = () => {
    this.setState({
      projectUniqueNumber: "",
      projectName: "",
      duration: "",
      budget: "",
      peakInterval: "",
      firstPV: "",
      lastPV: "",
      advPayment: "",
      perfBond: "",
      creditTime: "",
      discountRate: ""
    });
  };

  render() {
    //object destructuring
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
    } = this.state;

    return (
      <div className="card">
        <div className="card-body">
          <h1 style={{ color: "black" }}>New Project Form</h1>
          <br></br>
          <div>
            <div className="container-fluid">
              <h4 style={{ color: "black" }}>General</h4>
              <div className="form-row">
                {/**insert the Project Unique Number */}
                <div className="form-group col-md-4">
                  <label>Project Unique Number</label>
                  <input
                    type="text"
                    placeholder="Enter Project Unique Number"
                    className="form-control"
                    value={projectUniqueNumber}
                    onChange={e =>
                      this.setState({ projectUniqueNumber: e.target.value })
                    }
                  />
                </div>
                {/**insert the Project Name */}
                <div className="form-group col-md-8">
                  <label>Project Name</label>
                  <input
                    type="text"
                    placeholder="Enter Project Name"
                    className="form-control"
                    value={projectName}
                    onChange={e =>
                      this.setState({ projectName: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <br></br>
              <h4 style={{ color: "black" }}>Schedule</h4>
              <div className="form-row">
                {/**insert the Project Duration in months */}
                <div className="form-group col-md-4">
                  <label>Duration</label>
                  <input
                    type="text"
                    placeholder="Enter the duration of the project"
                    className="form-control"
                    value={duration}
                    onChange={e => this.setState({ duration: e.target.value })}
                  />
                </div>
                {/**insert the Project Budget */}
                <div className="form-group col-md-4">
                  <label>Budget</label>
                  <input
                    type="text"
                    placeholder="Enter the budget of the project"
                    className="form-control"
                    value={budget}
                    onChange={e => this.setState({ budget: e.target.value })}
                  />
                </div>
                {/**insert the Project Peak Interval */}
                <div className="form-group col-md-4">
                  <label>Peak Interval</label>
                  <input
                    type="text"
                    placeholder="Enter the peak interval of the project"
                    className="form-control"
                    value={peakInterval}
                    onChange={e =>
                      this.setState({ peakInterval: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-row">
                {/**insert the First planned value */}
                <div className="form-group col-md-6">
                  <label>First planned value</label>
                  <input
                    type="text"
                    placeholder="Enter the first planned value"
                    className="form-control"
                    value={firstPV}
                    onChange={e => this.setState({ firstPV: e.target.value })}
                  />
                </div>
                {/**insert the Last planned value */}
                <div class="form-group col-md-6">
                  <label>Last planned value</label>
                  <input
                    type="text"
                    placeholder="Enter the last planned value"
                    className="form-control"
                    value={lastPV}
                    onChange={e => this.setState({ lastPV: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <br></br>
              <h4 style={{ color: "black" }}>Financial</h4>
              <div className="form-row">
                {/**insert the Advanced Payment */}
                <div className="form-group col-md-6">
                  <label>Advanced Payment</label>
                  <input
                    type="text"
                    placeholder="Enter the advanced payment"
                    className="form-control"
                    value={advPayment}
                    onChange={e =>
                      this.setState({ advPayment: e.target.value })
                    }
                  />
                </div>
                {/**insert the Performance Bond */}
                <div className="form-group col-md-6">
                  <label>Performance Bond</label>
                  <input
                    type="text"
                    placeholder="Enter the performed bond"
                    className="form-control"
                    value={perfBond}
                    onChange={e => this.setState({ perfBond: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-row">
                {/**insert the Credit Time */}
                <div className="form-group col-md-6">
                  <label>Credit Time</label>
                  <input
                    type="text"
                    placeholder="Enter Credit time"
                    className="form-control"
                    value={creditTime}
                    onChange={e =>
                      this.setState({ creditTime: e.target.value })
                    }
                  />
                </div>
                {/**insert the Discount Rate */}
                <div className="form-group col-md-6">
                  <label>Discount Rate</label>
                  <input
                    type="text"
                    placeholder="Enter discount rate"
                    className="form-control"
                    value={discountRate}
                    onChange={e =>
                      this.setState({ discountRate: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="container-fluid">
              {/**click either save or cancel */}
              <div className="form-group">
                <button
                  className="btn btn-outline-primary btn-lg "
                  onClick={this.handleSubmit}
                >
                  Save
                </button>
                <a
                  href="/MyProjects"
                  className="btn btn-outline-primary btn-lg ml-4"
                  role="button"
                >
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectForm;