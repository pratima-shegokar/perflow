import React, { Component } from "react";
/**
These import statements might be useful if we decide to put the login form on the homepage (like in the web app)
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";
**/

class HomePage extends Component {
    /**
    These methods might be useful if we put the login form on this page (like in the web app)
    async login(loginData) {
        const loginSuccess = await Auth.login(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials");
        }
    }

    async register(registrationData) {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            alert("Couldn't register.  Please check credentials and try again");
        }
    }
    **/

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-6 ">
                            // TODO: add logo to line below
                            // <img class="logo" alt="PerFlowLogo" src="logo_name.png" />
                            <h1>PerFlow</h1>
                            <h2>A Cash Flow Projection Tool for Project Managers</h2>
                            <p>
                                Welcome to PerFlow, a cash flow tool developed by a team of students at Software Development
                                Academy 6.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;