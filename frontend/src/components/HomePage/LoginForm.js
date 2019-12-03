import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

function redirect() {
    return  <Redirect  to="/register" />
}

function LoginForm({onSubmit}) {
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
                        <div className="row mt-4">
                            <div className="form-group col-md-3">
                                <button
                                    className="btn btn-info"
                                    onClick={() => onSubmit({email, password})}>
                                    Login
                                </button>
                            </div>
                            <div className="form-group col-md-1">
                                <button
                                    className="btn btn-info"
                                    onClick={redirect()}>
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;