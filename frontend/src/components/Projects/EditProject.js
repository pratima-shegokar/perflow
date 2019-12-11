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
                               
                                <label>Project Id</label>
                                {Object.entries(project).map(([projectUniqueNumber]) => {
                                return(
                                <input                                
                                    type="text"
                                    className="form-control"
                                    value={projectUniqueNumber}
                                     />    
                                )                           
                                })}
                            </div>
                    
                            <div className="form-group col-md-8">
                                <label>Project Name</label>
                                {Object.entries(project).map(([projectName]) => {
                                return(
                                <input
                                    type="text"
                                    className="form-control"
                                    value={projectName}
                                     />
                                    )                           
                                })}
                            </div>
                            <div className="form-group col-md-8">
                                <label>Duration</label>
                                {Object.entries(project).map(([duration]) => {
                                return(
                                <input
                                    type="text"
                                    className="form-control"
                                    value={duration}
                                     />
                                    )                           
                                })}
                            </div>
                            <div className="form-group col-md-8">
                                <label>Budget</label>
                                {Object.entries(project).map(([budget]) => {
                                return(
                                <input
                                    type="text"
                                    className="form-control"
                                    value={budget}
                                     />
                                    )                           
                                })}
                            </div>
                            <div className="form-group col-md-4">
                                <label>Peak Interval</label>
                                {Object.entries(project).map(([peakInterval]) => {
                                return(
                                <input
                                    type="text"

                                    className="form-control"
                                    value={peakInterval}
                                    
                                />
                                )                           
                                })}
                            </div>
                            <div className="form-group col-md-4">
                                <label>FirstPV</label>
                                {Object.entries(project).map(([firstPV]) => {
                                return(
                                <input
                                    type="text"
                                    className="form-control"
                                    value={firstPV}
                                     />
                                    )                           
                                })}
                            </div>
                            <div className="form-group col-md-4">
                                <label>Last PV</label>
                                {Object.entries(project).map(([lastPV]) => {
                                return(
                                <input
                                    type="text"
                                    className="form-control"
                                    value={lastPV}
                                     />
                                    )                           
                                })}
                            </div>
                            <div className="form-group col-md-6">
                                <label>Advanced Payment</label>
                                {Object.entries(project).map(([advPayment]) => {
                                return(
                                <input
                                    type="text"

                                    className="form-control"
                                    value={advPayment}
                                    
                                    
                                    
                                />
                                )                           
                            })}
                                <div className="form-group col-md-4">
                                    <label>Performed Bond</label>
                                    {Object.entries(project).map(([perfBond]) => {
                                return(
                                    <input
                                        type="text"

                                        className="form-control"
                                        value={perfBond}
                                         />
                                        )                           
                            })}
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Credit Time</label>
                                    {Object.entries(project).map(([creditTime]) => {
                                return(
                                    <input
                                        type="text"

                                        className="form-control"
                                        value={creditTime}
                                         />
                                        )                           
                            })}
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Discount Rate</label>
                                    {Object.entries(project).map(([discountRate]) => {
                                return(
                                    <input
                                        type="text"

                                        className="form-control"
                                        value={discountRate}
                                         />
                                        )                           
                            })}
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

