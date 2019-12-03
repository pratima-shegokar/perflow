import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyProjects from './components/ProjectsList/MyProject';
import WhyPerflow from './components/WhyPerflow/WhyPerflow';
import Navbar from './components/Navbar';
import LoginPage from "./components/HomePage/LoginPage";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <LoginPage />
      <Router>
          <Route path="/" component={App}>
          <Route path="/MyProjects" component={MyProjects} />
          <Route path="/WhyPerflow" component={WhyPerflow} />
        </Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
