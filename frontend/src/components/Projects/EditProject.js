import React, { Component } from 'react';

class EditProject extends React.Component {

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
            firstPV: firstPV,
            lastPV: lastPV,
            perfBond: perfBond,
            creditTime: creditTime,
            discountRate: discountRate
        });
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

            <div className="card">
                <div className="card-body">
                    <h3 style={{ color: "black" }}>Project details</h3>
                    <br></br>

                    <div>
                        <div class="container-fluid">
                            <div className="form-group col-md-8">



                                <div>
                                    <label>ProjectId</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.projectUniqueNumber}
                                        onChange={e => this.setState({ projectUniqueNumber: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-8">



                                <div>
                                    <label>ProjectName</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.projectName}
                                        onChange={e => this.setState({ projectName: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-group col-md-8">
                                <label>Duration</label>


                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.duration}
                                    onChange={e => this.setState({ duration: e.target.value })}
                                />


                            </div>
                            <div className="form-group col-md-8">
                                <label>Budget</label>


                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.budget}
                                    onChange={e => this.setState({ budget: e.target.value })}
                                />

                            </div>
                            <div className="form-group col-md-4">
                                <label>Peak Interval</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.peakInterval}
                                    onChange={e =>
                                        this.setState({ peakInterval: e.target.value })
                                    }
                                />

                            </div>
                            <div className="form-group col-md-4">
                                <label>FirstPV</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.firstPV}
                                    onChange={e => this.setState({ firstPV: e.target.value })}
                                />

                            </div>
                            <div className="form-group col-md-4">
                                <label>Last PV</label>


                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.lastPV}
                                    onChange={e => this.setState({ lastPV: e.target.value })}
                                />

                            </div>

                            <div className="form-group col-md-6">
                                <label>Advanced Payment</label>


                                <input
                                    type="text"

                                    className="form-control"
                                    value={this.state.advPayment}
                                    onChange={e =>
                                        this.setState({ advPayment: e.target.value })
                                    }
                                />

                                <div className="form-group col-md-6">
                                    <label>Performed Bond</label>

                                    <input
                                        type="text"

                                        className="form-control"
                                        value={this.state.perfBond}
                                        onChange={e => this.setState({ perfBond: e.target.value })}
                                    />

                                </div>
                                <div className="form-group col-md-6">
                                    <label>Credit Time</label>


                                    <input
                                        type="text"

                                        className="form-control"
                                        value={this.state.creditTime}
                                        onChange={e => this.setState({ creditTime: e.target.value })}
                                    />

                                </div>
                                <div className="form-group col-md-6">
                                    <label>Discount Rate</label>
                                    <input
                                        type="text"

                                        className="form-control"
                                        value={this.state.discountRate}
                                        onChange={e => this.setState({ discountRate: e.target.value })}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid">
                        <div className="form-group">
                            <button
                                className="btn btn-outline-primary btn-sm "
                                onClick={this.handleSubmit}>
                                Save
                         </button>

                            <a href="/ProjPanel" className="btn btn-outline-primary btn-sm ml-4" role="button">Cancel</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default EditProject;

