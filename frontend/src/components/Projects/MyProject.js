import React from "react";
import ProjectsApi from "./../../api/ProjectsApi";

class MyProjects extends React.Component {
  render() {
    return (
      // /ProjectForm should be the page where you can create a new project.
      <React.Fragment>
        <div className="text-center mt-5">
          <p className="text-muted">
            You don't have any projects yet. Would you like to{" "}
            <a href="/ProjectForm" className="text-reset">
              create a new one?
            </a>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default MyProjects;
