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
       
      
      <div className="App">
        <p className="Table-header">Project Specific  Details</p>
        <Table1 data={data}/>
        
        
        </div> 
      </div>
    );
  }
}
 
export default App;
