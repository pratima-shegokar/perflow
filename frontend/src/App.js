import React from 'react';
import './App.css';
import ProjPanel from './components/ProjPanel';
import Navbar from './components/Navbar';
import MyProjects from './components/MyProject';
import EditProject from './components/EditProject';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Route path="/" component={App}>
        <Route path="/MyProjects" component={MyProjects} />
          <Route path="/ProjPanel" component={ProjPanel} />
          <Route path="/EditProject" component={EditProject} />
        </Route>
      </Router>
    </React.Fragment>
  );
}
export default App;
