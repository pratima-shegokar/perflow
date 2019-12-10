import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home'
import MyProjects from './components/Projects/MyProject';
import WhyPerflow from './components/WhyPerflow/WhyPerflow';
import ProjPanel from './components/ProjPanel';
import Navbar from './components/Navbar';
import AboutUs from './components/about/AboutUs';
import ProjectsPage from './components/Projects/ProjectsPage';
import LoginPage from "./components/Login/LoginPage";
import RegistrationPage from "./components/Login/RegistrationPage";
import Auth from "./services/Auth"
import LoggedInNavbar from "./components/layout/LoggedInNavbar";
import Footer from './components/footer/Footer';

function App() {
    const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
    Auth.bindLoggedInStateSetter(setLoggedIn);

    const loggedInRouter = (
        <React.Fragment>
            <Router>
                <LoggedInNavbar onLogout={() => Auth.logout()} />
                <div className="container mt-5">
                    <Switch>
                        <Route path="/" component={App}>
                            <Route path="/MyProjects" component={MyProjects} />
                            <Route path="/ProjectsPage" component={ProjectsPage} />
                            <Route path="/ProjPanel" component={ProjPanel} />
                        </Route>
                    </Switch>
                </div>
            </Router>
            <Footer></Footer>
        </React.Fragment>
    );

    const defaultRouter = (
        <React.Fragment>
            <Router>
                <Navbar />
                <div className="container mt-5">
                    <Route path="/" component={App}>
                        <Route path="/Homepage" component={Home} />
                        <Route path="/WhyPerflow" component={WhyPerflow} />
                        <Route path="/LoginPage" component={LoginPage} />
                        <Route path="/RegistrationPage" component={RegistrationPage} />
                        <Route path="/AboutUs" component={AboutUs} />
                    </Route>
                </div>
            </Router>
            <Footer></Footer>
        </React.Fragment>
    );
    return (loggedIn ? loggedInRouter : defaultRouter);
}

export default App;