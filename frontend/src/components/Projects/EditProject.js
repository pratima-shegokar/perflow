import React, { Component } from 'react';

function EditProject({ onSubmit }) {
    console.log(onSubmit)

    const [projectName, setProjectName] = React.useState("");
    const [duration, setDuration] = React.useState("");
    const [budget, setBudget] = React.useState("");
    const [expectedFP, setFP] = React.useState("");
    const [expectedLP, setLP] = React.useState("");
    const [PeakInterval, setPeakInterval] = React.useState("");

    const handleSubmit = () => {
        // Invoke the passed in event callback
        onSubmit({
            projectName: projectName,
            duration: duration,
            budget: budget,
            expectedFP: expectedFP,
            expectedLP: expectedLP,
            PeakInterval: PeakInterval
        });
    }

    return (
        <div className="card">
            <div className="card-body">
                <h3 style={{ color: "black" }}>Project details</h3>
                <br></br>
                <div>
                    <div class="container-fluid">

                        <div className="form-group col-md-8">
                            <label>Project Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={projectName}
                                onChange={e => setProjectName(e.target.value)} />
                            </div>
                            <div className="form-group col-md-4">
                                <label>Duration</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={duration}
                                    onChange={e => setDuration(e.target.value)} />
                            </div>
                            <div className="form-group col-md-4">
                                <label>Budget</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={budget}
                                    onChange={e => setBudget(e.target.value)} />
                            </div>
                            <div className="form-group col-md-4">
                                <label>Expected First Payment</label>
                                <input
                                    type="text"

                                    className="form-control"
                                    value={expectedFP}
                                    onChange={e => setFP(e.target.value)} />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Expected Last payment</label>
                                <input
                                    type="text"

                                    className="form-control"
                                    value={expectedLP}
                                    onChange={e => setLP(e.target.value)} />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Peak Interval</label>
                                <input
                                    type="text"

                                    className="form-control"
                                    value={PeakInterval}
                                    onChange={e => setPeakInterval(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">
                    <div className="form-group">
                        <button
                            className="btn btn-outline-primary btn-sm "
                            onClick={handleSubmit}>
                            Save
                                </button>

                        <a href="/ProjPanel" className="btn btn-outline-primary btn-sm ml-4" role="button">Cancel</a>
                    </div>
                </div>
            </div>
    )
}

export default EditProject;

