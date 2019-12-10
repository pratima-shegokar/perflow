
import { Table } from 'react-bootstrap';

import React from "react";

function ProjPanel({ onSubmit }) {
  console.log(onSubmit)
  const [projectUniqueNumber, getProjectUniqueNumber] = React.useState("");
  const [projectName, getProjectName] = React.useState("");
  const [duration, getDuration] = React.useState("");
  const [budget, getBudget] = React.useState("");
  const [peakInterval, getPeakInterval] = React.useState("");
  const [firstPV, getFirstPV] = React.useState("");
  const [lastPV, getLastPV] = React.useState("");
  const [discountRate, getDiscountRate] = React.useState("");

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({
      projectUniqueNumber: projectUniqueNumber,
      projectName: projectName,
      duration: duration,
      budget: budget,
      peakInterval: peakInterval,
      firstPV: firstPV,
      lastPV: lastPV,
      discountRate: discountRate
    });
  }

  return (
    <div className="App">

      <p className="Table-header">Project Specific  Details</p>
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
                    <tr key={projectUniqueNumber}>
                      <td>ProjectName</td>
                      <td>{getProjectName}</td>
                    </tr>
                    <tr >
                      <td>Duration</td>
                      <td>{getDuration}</td>
                    </tr>
                    <tr >
                      <td>Budget</td>
                      <td>{getBudget}</td>
                    </tr>
                    <tr >
                      <td>PeakInterval</td>
                      <td>{getPeakInterval}</td>
                    </tr>
                    <tr >
                      <td>FirstPV</td>
                      <td>{getFirstPV}</td>
                    </tr>
                    <tr >
                      <td>LastPV</td>
                      <td>{getLastPV}</td>
                    </tr>
                    <tr >
                      <td>Discount</td>
                      <td>{getDiscountRate}</td>
                    </tr>
                    
                      

                </tbody>

              </Table>
            </div>
          </div>
        </div>
      </div>

      <div class="wrapper">
        <a href="/EditProject" className="btn btn-outline-primary btn-sm ml-4" role="button">Edit</a>

        <br /> <br />
      </div>
      <div class="graph-button">

        <button type="button-gr" class="btn btn-outline-primary" >Periodical S-Curve Graph</button> &nbsp;&nbsp;&nbsp;
             <button type="button-gr" class="btn btn-outline-primary" >Periodical Cash Flow Graph</button> &nbsp;&nbsp;&nbsp;
             <button type="button-gr" class="btn btn-outline-primary" >Cumulative S-Curve Graph</button> &nbsp;&nbsp;&nbsp;
             <button type="button-gr" class="btn btn-outline-primary">Cumulative Cash Flow Graph</button> &nbsp;&nbsp;&nbsp;
             <button type="button-gr" class="btn btn-outline-primary" >EVM Board</button> &nbsp;&nbsp;&nbsp;
             <button type="button-gr" class="btn btn-outline-primary">CFM Board</button>



      </div>
    </div>
  )

}
export default ProjPanel;