import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyProjects from './components/MyProject';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Route path="/" component={App}>
          <Route path="/MyProjects" component={MyProjects} />
        </Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
