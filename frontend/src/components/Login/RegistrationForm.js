import React, { useState } from "react";

function RegisterForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [companyName, setCompanyName] = useState("");

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Sign up</h4>
                <div>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label>Company Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={companyName}
                            onChange={e => setCompanyName(e.target.value)}
                            placeholder="Company Name" />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className="form-group row justify-content-center">
                        <a href="/LoginPage">
                            <button
                                className="btn btn-info"
                                onClick={() => onSubmit({ name, email, companyName, password })}>
                                Create account
                            </button>
                        </a>
                    </div>

                    <div className="col-md-6 offset-md-3">
                        <a href="/LoginPage" className="btn btn-link">
                            Already a member? Login here.
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;