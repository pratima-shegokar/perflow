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

    componentDidMount() {
        document.body.style = 'background-image: linear-gradient(to bottom right, #1A54A6, #8db9f7, #1A54A6); color: white;';
    }

    render() {
        return (
            <React.Fragment>
                <div className="wrapper">
                    <div className="container">
                        <div className="row justify-content-center" id="loginLogoDiv" style={{float: "left"}}>
                            <img alt="Logo" src={('./kth-logo.jpg')} style={{width: "450px", height: "450px", marginLeft:"5px", marginTop: "11px", paddingTop: "30px"}} id="loginLogo" />
                        </div>
                        <div className="row mt-0" style={{paddingLeft: "200px", paddingTop: "35px"}}>
                            <div className="col strong-shadow">
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