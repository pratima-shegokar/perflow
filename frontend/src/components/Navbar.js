import React from "react";

//This whole file (or component) should only be touched if the team decides to change it.
//This component is set up to appear in every page

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { isLoggedIn: props.isLoggedIn };
  }

  render() {
    const loggedInNavBar = (
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/Homepage">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/WhyPerflow">
              Why Perflow
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AboutUS">
              About Us
            </a>
          </li>
        </ul>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/MyProjects">
                MyProjects
              </a>
            </li>
          </ul>
          <button
            className="btn btn-outline-dark my-2 my-sm-0"
            onClick={this.props.onLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    );

    const loggedOutNavBar = (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/Homepage">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/WhyPerflow">
                  Why Perflow
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/AboutUS">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/LoginPage">
                  Login
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
    return (
      <div>{this.state.isLoggedIn ? loggedInNavBar : loggedOutNavBar}</div>
    );
  }
}

export default Navbar;