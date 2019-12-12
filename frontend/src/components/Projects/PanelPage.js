import React from "react";

import ProjectsApi from "./../../api/ProjectsApi";
import EditProject from "./EditProject";


class PanelPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        project: {}
      };
  

    }
  
    async saveProject(projectData) {
        try {
          const response = await ProjectsApi.updateProject(projectData);
          const project = response.data;
          //const newProjects = this.state.projects.concat(project);

          this.setState({
            project: project
          });
        } catch (e) {
          console.error(e);
        }
      }

      componentDidMount() {
        ProjectsApi.getAllProjects()
          .then(({ data }) => this.setState({ projects: data }))
          .catch(err => console.error(err));
      }

      render() {
        const projects = this.state.projects;

        return (
          <div>
            <EditProject
              onSubmit={projectData => this.updateProject(projectData)}
            />
          </div>
        );
      }
    }



  export default PanelPage;