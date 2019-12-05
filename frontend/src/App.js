import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/Home'
import MyProjects from './components/ProjectsList/MyProject';
import WhyPerflow from './components/WhyPerflow/WhyPerflow';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Route path="/" component={App}>
          <Route path="/Homepage" component={Home} />
          <Route path="/MyProjects" component={MyProjects} />
          <Route path="/WhyPerflow" component={WhyPerflow} />
        </Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
