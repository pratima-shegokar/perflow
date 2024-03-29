import React from "react";
import { Link } from "react-router-dom";

function LoggedInNavbar({ onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/MyProjects" className="nav-link">
              MyProjects
            </Link>
          </li>
        </ul>
        <button
          className="btn btn-outline-dark my-2 my-sm-0"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default LoggedInNavbar;
