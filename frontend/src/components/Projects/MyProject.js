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
          <a className="btn btn-outline-info" href="/ProjectForm">
            Create a new project
          </a>
          <br /> <br />
          <div class="mx-auto" style={{ width: 200 }}>
            <ul className="list-group">
              {this.state.projects.map(p => {
                return (
                  <li
                    align="left"
                    className="list-group-item list-group-item-action"
                  >
                    <Link
                      key={p.projectId}
                      to={{
                        pathname: "/ProjPanel",
                        state: {
                          project: p
                        }
                      }}
                    >
                      {p.projectUniqueNumber} &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      {p.projectName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MyProjects;
