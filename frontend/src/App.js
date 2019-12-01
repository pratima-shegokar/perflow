import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import MyProjects from './components/MyProject';

function App() {
  return (
      <Router>
      <Route path = "/" component = {App}>
         <Route path = "/MyProjects" component = {MyProjects} />
      </Route>
   </Router>
  );
}

export default App;
