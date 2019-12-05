import React from "react";
import LoginForm from "./LoginForm";
import Auth from "../../services/Auth";

class LoginPage extends React.Component {
    async login(loginData) {
        const loginSuccess = await Auth.login(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials");
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="wrapper">
                    <div className="container">
                        <div className="row justify-content-center " id="loginLogoDiv">
                            <img alt="Logo" src={('./PerflowLogo.png')} width={200} height={200} id="loginLogo" />
                        </div>
                        <div className="row justify-content-center mt-0">
                            <div className="col-md-6 strong-shadow">
                                <LoginForm onSubmit={this.login} />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginPage;