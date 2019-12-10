import React from "react";

function ProjectForm({onSubmit}) {
    console.log(onSubmit)
    const [projectUniqueNumber,setProjectUniqueNumber] = React.useState("");
    const [projectName,setProjectName] = React.useState("");
    const [duration,setDuration] = React.useState("");
    const [budget,setBudget] = React.useState("");
    const [peakInterval,setPeakInterval] = React.useState("");
    const [firstPV,setFirstPV] = React.useState("");
    const [lastPV,setLastPV] = React.useState("");
    const [advPayment,setAdvPayment] = React.useState("");
    const [perfBond,setPerfBond] = React.useState("");
    const [creditTime,setCreditTime] = React.useState("");
    const [discountRate,setDiscountRate] = React.useState("");

    const handleSubmit = () => {
        // Invoke the passed in event callback
        onSubmit({
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
          handleClearForm();
    }
    // Clear the input field
    const handleClearForm = () => {
        setProjectUniqueNumber("");
        setProjectName("");
        setDuration("");
        setBudget("");
        setPeakInterval("");
        setFirstPV("");
        setLastPV("");
        setAdvPayment("");
        setPerfBond("");
        setCreditTime("");
        setDiscountRate("");
    }

    return (
         <div className = "card">
              <div className = "card-body">
                   <h1 style={{color:"black"}}>New Project Form</h1>
                    <br></br>
                    <div>
                        <div class="container-fluid">
                            <h4>General</h4>
                            <div class="form-row">
                                <div className ="form-group col-md-4">
                                    <label>Project Unique Number</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Project Unique Number"
                                        className = "form-control"
                                        value = {projectUniqueNumber}
                                        onChange={e => setProjectUniqueNumber(e.target.value)} />
                                </div>

                                <div className="form-group col-md-8">
                                    <label>Project Name</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Project Name"
                                        className = "form-control"
                                        value = {projectName}
                                        onChange={e => setProjectName(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div class="container-fluid">
                            <br></br>
                            <h4>Schedule</h4>
                            <div class="form-row">
                                <div className="form-group col-md-4">
                                    <label>Duration</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the duration of the project"
                                        className = "form-control"
                                        value = {duration}
                                        onChange={e => setDuration(e.target.value)} />
                                </div>

                                <div className="form-group col-md-4">
                                    <label>Budget</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the budget of the project"
                                        className = "form-control"
                                        value= {budget}
                                        onChange={e => setBudget(e.target.value)} />
                                </div>

                                <div className="form-group col-md-4">
                                    <label>Peak Interval</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the peak interval of the project"
                                        className = "form-control"
                                        value= {peakInterval}
                                        onChange={e => setPeakInterval(e.target.value)} />
                                </div>
                            </div>

                            <div class="form-row">
                                <div className="form-group col-md-6">
                                    <label>First planned value</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter the first planned value"
                                        className = "form-control"
                                        value = {firstPV}
                                        onChange={e => setFirstPV(e.target.value)} />
                                </div>

                                <div class="form-group col-md-6">
                                    <label>Last planned value</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the last planned value"
                                        className = "form-control"
                                        value = {lastPV}
                                        onChange={e => setLastPV(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div class="container-fluid">
                            <br></br>
                            <h4>Financial</h4>
                            <div class="form-row">
                                <div className="form-group col-md-6">
                                    <label>Advanced Payment</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the advanced payment"
                                        className = "form-control"
                                        value = {advPayment}
                                        onChange={e => setAdvPayment(e.target.value)} />
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Performed Bond</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the performed bond"
                                        className = "form-control"
                                        value = {perfBond}
                                        onChange={e => setPerfBond(e.target.value)} />
                                </div>
                            </div>

                            <div class="form-row">
                                <div className ="form-group col-md-6">
                                    <label>Credit Time</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Credit time"
                                        className = "form-control"
                                        value = {creditTime}
                                        onChange={e => setCreditTime(e.target.value)} />
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Discount Rate</label>
                                    <input
                                        type="text"
                                        placeholder="Enter discount rate"
                                        className = "form-control"
                                        value = {discountRate}
                                        onChange={e => setDiscountRate(e.target.value)} />
                                </div>
                             </div>
                        </div>
                        <div class="container-fluid">
                          <div className="form-group">
                                <button
                                      className="btn btn-outline-primary btn-lg "
                                      onClick = {handleSubmit}>
                                      Save
                                </button>

                                <a href="/MyProjects" className="btn btn-outline-primary btn-lg ml-4" role="button">Cancel</a>
                          </div>
                        </div>
                    </div>
               </div>
          </div>
    );
 }
export default ProjectForm;