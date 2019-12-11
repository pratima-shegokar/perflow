import React, { useState } from 'react';

function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title" >Login</h4>
                <div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
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
                    <div className="container">
                        <div className="row mt-12">
                            <div className="form-group col-md-6 offset-md-3">
                                <button
                                    className="btn btn-info"
                                    onClick={() => onSubmit({ email, password })}>
                                    Login
                                </button>
                            </div>
                            <div class="col-md-6 offset-md-3">
                                <a href="/RegistrationPage" class="btn btn-link">
                                    Need an Account? Register
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;