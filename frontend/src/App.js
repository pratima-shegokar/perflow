import React, {useState} from 'react';

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import MyProjects from "./components/Projects/MyProject";
import WhyPerflow from "./components/WhyPerflow/WhyPerflow";

import ProjPanel from "./components/Projects/ProjPanel";
import PanelPage from "./components/Projects/PanelPage";
import EditProject from "./components/Projects/EditProject";

import Navbar from "./components/Navbar";

import ProjectForm from "./components/Projects/ProjectForm";
import ProjectsPage from "./components/Projects/ProjectsPage";

import LoginPage from "./components/Login/LoginPage";
import RegistrationPage from "./components/Login/RegistrationPage";
import Auth from "./services/Auth";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: Auth.isLoggedIn()
    };

    Auth.bindLoggedInStateSetter(this.setLoggedIn);
  }

  setLoggedIn = isLoggedIn => {
    this.setState({ loggedIn: isLoggedIn });
  };

  render() {
    const loggedInRouter = (
      <Router>
        <div >
          <Switch>
            <Route path="/" component={App}>
              <Route path="/Homepage" component={Home} />
              <Route path="/WhyPerflow" component={WhyPerflow} />
              <Route path="/MyProjects" component={MyProjects} />
              <Route path="/ProjectForm" component={ProjectsPage} />
              <Route path="/ProjPanel" component={ProjPanel} />
              <Route path="/PanelPage" component={PanelPage} />
              <Route path="/EditProject" component={EditProject} />

            </Route>
          </Switch>
        </div>
      </Router>
    );

    const defaultRouter = (
      <Router>
        <div>
          <Route path="/" component={App}>
            <Route path="/Homepage" component={Home} />
            <Route path="/WhyPerflow" component={WhyPerflow} />
            <Route path="/LoginPage" component={LoginPage} />
            <Route path="/RegistrationPage" component={RegistrationPage} />
          </Route>
        </div>
      </Router>
    );

    return (
      <div>
        <Navbar
          isLoggedIn={this.state.loggedIn}
          onLogout={() => Auth.logout()}
        />
        {this.state.loggedIn ? loggedInRouter : defaultRouter}
      </div>
    );
  }
}
export default App;