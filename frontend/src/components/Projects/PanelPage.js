import React from "react";
import { Link } from "react-router-dom";
import ProjectsApi from "./../../api/ProjectsApi";


class PanelPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        projects: []
      };
  
      this.getProjects();
    }
  
    async getProjects() {
      try {
        const response = await ProjectsApi.getAllProjects();
        const editProjects = response.data;
        this.setState({
          projects: editProjects
        });
      } catch (e) {
        console.error(e);
      }
    }
  
    render() {
      return (
        // /ProjectForm should be the page where you can create a new project.
        <React.Fragment>

            <ul>
              {this.state.projects.map(p => {
                return (
                  <li align="left">
                    <Link
                      key={p.projectId}
                      to={{
                        pathname: "/EditProject",
                        state: {
                          project: p
                        }
                      }}
                    >
                      
                    </Link>
                  </li>
                );
              })}
            </ul>
          
        </React.Fragment>
      );
    }
  }
  export default PanelPage;