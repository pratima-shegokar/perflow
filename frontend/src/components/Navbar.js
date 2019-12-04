import React from 'react';

//This whole file (or component) should only be touched if the team decides to change it.
//This component is set up to appear in every page

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                    <a class="navbar-brand" href="/Homepage">Home</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/MyProjects">MyProjects <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/WhyPerflow">Why Perflow</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/AboutUS">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/Login">Login</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;