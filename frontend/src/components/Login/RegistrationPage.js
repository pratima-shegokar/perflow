import React from "react";
import Auth from "../../services/Auth";
import RegistrationForm from "./RegistrationForm";
import "./Login.css";

class RegistrationPage extends React.Component {
    async register(registrationData) {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            alert("Couldn't register check credentials and try again");
        }
        else {
            alert("User created successfully. Please login with new user.");
        }
    }

    componentDidMount() {
        document.body.style = 'background-image: linear-gradient(to bottom right, #177b91, #63D8F2, #177b91); color: white;';
    }
  
    render() {
        return (
            <React.Fragment>
                <div className="wrapper">
                    <div className="container ">
                        <div className="row justify-content-center" id="loginLogoDiv">
                            <img alt="Logo" src={('./PerflowLogo.png')} width={150} height={150} id="registerationLogo" />
                        </div>
                        <div className="row justify-content-center mt-0">
                            <div className="col-md-6 strong-shadow">
                                <RegistrationForm onSubmit={this.register} />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RegistrationPage;