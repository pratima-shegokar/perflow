import React from "react";
import { Link } from "react-router-dom";
import ProjectsApi from "./../../api/ProjectsApi";
import "./MyProjects.css";

class MyProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };

    this.fetchProjects();
  }

  async fetchProjects() {
    try {
      const response = await ProjectsApi.getAllProjects();
      const fetchedProjects = response.data;
      this.setState({
        projects: fetchedProjects
      });
      console.log(this.state.projects);
    } catch (e) {
      console.error(e);
    }
  }

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

          <ul>
            {this.state.projects.map(p => {
              return (
                <li align="left">
                  <Link
                    key={p.projectId}
                    to={{
                      pathname: "/ProjPanel",
                      state: {
                        project: p
                      }
                    }}
                  >
                    {/*<Link
                    key={p.projectId}
                    to={{
                      pathname: "/ProjPanel",
                      state: {
                        project: p
                      }
                    }}
                  >*/}
                    {p.projectUniqueNumber} &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    {p.projectName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default MyProjects;
