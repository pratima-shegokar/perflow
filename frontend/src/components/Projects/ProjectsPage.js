import React from "react";
import ProjectsApi from "./../../api/ProjectsApi";
import ProjectForm from "./ProjectForm";

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  async createProject(projectData) {
    try {
      const response = await ProjectsApi.createProject(projectData);
      const project = response.data;
      const newProjects = this.state.projects.concat(project);

      this.setState({
        projects: newProjects
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
        <ProjectForm
          onSubmit={projectData => this.createProject(projectData)}
        />
      </div>
    );
  }
}

export default ProjectsPage;
