import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home/Home'
import MyProjects from './components/Projects/MyProject';
import WhyPerflow from './components/WhyPerflow/WhyPerflow';

import ProjPanel from './components/ProjPanel';

import Navbar from './components/Navbar';

import ProjectForm from './components/Projects/ProjectForm';
import ProjectsPage from './components/Projects/ProjectsPage';

import LoginPage from "./components/Login/LoginPage";
import RegistrationPage from "./components/Login/RegistrationPage";
import Auth from "./services/Auth"
import LoggedInNavbar from "./components/layout/LoggedInNavbar";

import SCurve from  "./components/charts/SCurve";

function App() {
    const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
    Auth.bindLoggedInStateSetter(setLoggedIn);

    const loggedInRouter = (
        <Router>
            <LoggedInNavbar onLogout={() => Auth.logout()} />
            <div className="container mt-5">
                <Switch>
                    <Route path="/" component={App}>
                        <Route path="/MyProjects" component={MyProjects} />
                        <Route path="/ProjectForm" component={ProjectsPage} />
                        <Route path="/ProjPanel" component={ProjPanel} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );

    const defaultRouter = (
        <Router>
            <Navbar/>
            <div className="container mt-5">
                    <Route path="/" component={App}>
                        <Route path="/Homepage" component={Home} />
                        <Route path="/WhyPerflow" component={WhyPerflow} />
                        <Route path="/LoginPage" component={LoginPage} />
                        <Route path="/RegistrationPage" component={RegistrationPage}/>
                        <Route path="/scurve" component={SCurve}/>
                    </Route>
            </div>
        </Router>
    );
    return (loggedIn ? loggedInRouter : defaultRouter);
}
export default App;
