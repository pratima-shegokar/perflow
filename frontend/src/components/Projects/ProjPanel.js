import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class ProjPanel extends Component {

  constructor(props) {
    super(props)
    this.state = { proj: [] }
  }

  componentDidMount() {
    this.refreshlist();
  }

  refreshlist() {
    this.setState({
      proj: [{ 'Name': "ProjectName", 'Value': "Silver Tower" },
      { 'Name': "Budget", 'Value': 10000 },
      { 'Name': "Duration", 'Value': 24 },
      { 'Name': "Expected First Payment", 'Value': 593472873 },
      { 'Name': "Expected last Payment", 'Value': 13435488 },
      { 'Name': "Peak Interval", 'Value': 12 },
      ]
    })
  }
  render() {
    const { proj } = this.state;
    return (
      <div className="App">
        <p className="Table-header">Project Specific  Details</p>
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
                    {proj.map(dep =>
                      <tr key={dep.Name}>
                        <td>{dep.Name}</td>
                        <td>{dep.Value}</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <a href="/EditProject" className="btn btn-outline-primary btn-sm ml-4" role="button">Edit</a>
          <br /> <br />
        </div>
        <div className="graph-button">
          <button type="button-gr" className="btn btn-outline-primary" >Periodical S-Curve Graph</button> &nbsp;&nbsp;&nbsp;
           <button type="button-gr" className="btn btn-outline-primary" >Periodical Cash Flow Graph</button> &nbsp;&nbsp;&nbsp;
           <button type="button-gr" className="btn btn-outline-primary" >Cumulative S-Curve Graph</button> &nbsp;&nbsp;&nbsp;
           <button type="button-gr" className="btn btn-outline-primary">Cumulative Cash Flow Graph</button> &nbsp;&nbsp;&nbsp;
           <button type="button-gr" className="btn btn-outline-primary" >EVM Board</button> &nbsp;&nbsp;&nbsp;
           <button type="button-gr" className="btn btn-outline-primary">CFM Board</button>
        </div>
      </div>
    )
  }
}

export default ProjPanel;