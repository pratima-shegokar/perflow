import React from 'react';

//This whole file (or component) should only be touched if the team decides to change it.
//This component is set up to appear in every page

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <a className="navbar-brand" href="/Homepage">Home</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/MyProjects">MyProjects <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/WhyPerflow">Why Perflow</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/AboutUS">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Login">Login</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;