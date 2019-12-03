import React, { Component } from 'react';
import './App.css';
import Table1 from './components/Table1'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route } from "react-router-dom";
 
var data = [
  { name: 'Project Name', value: 'Swiss Tower'},
  { name: 'Duration', value: '24 months'},
  { name: 'Budget', value: '40000'}
];
 
 
class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
      <Navigation />
      <Router>
        <Route path="/" component={App}>
          <Route path="/Table1" component={Table1} />         
        </Route>
      </Router>
    </React.Fragment>
      
      <div className="App">
        <p className="Table-header">Project Specific  Details</p>
        <Table1 data={data}/>

        <div class="wrapper">
          <button type="button" class="btn btn-outline-primary">Edit</button> &nbsp;&nbsp;&nbsp;
          
          <br/> <br/>
         </div>
         
        </div> 
      </div>
    );
  }
}
 
export default App;
