import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import MyProjects from "./components/Projects/MyProject";
import WhyPerflow from "./components/WhyPerflow/WhyPerflow";
import ProjPanel from "./components/Projects/ProjPanel";
import EditProject from "./components/Projects/EditProject";
import Navbar from "./components/Navbar";
import ProjectsPage from "./components/Projects/ProjectsPage";
import AboutUs from "./components/about/AboutUs";
import LandingPage from "./components/landing/LandingPage";
import LoginPage from "./components/Login/LoginPage";
import RegistrationPage from "./components/Login/RegistrationPage";
import Auth from "./services/Auth";
import SCurve from "./components/charts/SCurve";
import MonthlySCurve from "./components/charts/MonthlySCurve";
import CashFlow from "./components/charts/CashFlow";
import MonthlyCashFlow from "./components/charts/MonthlyCashFlow";
import PeriodicUpdate from "./components/Projects/PeriodicUpdate";
import EvmBoard from "./components/Projects/EvmBoard";
import Footer from "./components/footer/Footer";
import "./App.css";

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
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/Homepage" component={Home} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/WhyPerflow" component={WhyPerflow} />
          <Route path="/MyProjects" component={MyProjects} />
          <Route path="/ProjectForm" component={ProjectsPage} />
          <Route path="/ProjPanel" component={ProjPanel} />
          <Route path="/EditProject" component={EditProject} />
          <Route path="/scurve" component={SCurve} />
          <Route path="/MonthlySCurve" component={MonthlySCurve} />
          <Route path="/CashFlow" component={CashFlow} />
          <Route path="/MonthlyCashFlow" component={MonthlyCashFlow} />
          <Route path="/PeriodicUpdate" component={PeriodicUpdate} />
          <Route path="/EvmBoard" component={EvmBoard} />
        </Switch>
        <Footer></Footer>
      </Router>
    );

    const defaultRouter = (
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/Homepage" component={Home} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/WhyPerflow" component={WhyPerflow} />
          <Route path="/LoginPage" component={LoginPage} />
          <Route path="/RegistrationPage" component={RegistrationPage} />
        </Switch>
        <Footer></Footer>
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
