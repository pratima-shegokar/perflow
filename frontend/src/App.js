import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MyProjects from './components/ProjectsList/MyProject';
import WhyPerflow from './components/WhyPerflow/WhyPerflow';
import Navbar from './components/Navbar';
import LoginPage from "./components/Login/LoginPage";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
          <Route path="/" component={App}>
          <Route path="/MyProjects" component={MyProjects} />
          <Route path="/WhyPerflow" component={WhyPerflow} />
          <Route path="/Login" component={LoginPage} />
        </Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
