import React from "react";
import ProjectsApi from "./../../api/ProjectsApi";
import ProjectForm from "./ProjectForm";

class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
              id: [],
              projectName: [],
              duration: [],
              budget: [],
              expectedFirstPayment: [],
              expectedLastPayment: [],
              peakInterval: [],
              discountRate: [],
        };
    }

    async createProject(projectData) {
        try {
            const response = await ProjectsApi.createProject(projectData);
            const project = response.data;
            const newProjectName = this.state.projects.concat(project);

            this.setState({
                id: newId,
                projectName: newProjectName,
                duration: newDuration,
                budget: newBudget,
                expectedFirstPayment: newExpectedFirstPayment,
                expectedLastPayment: newExpectedLastPayment,
                peakInterval: newPeakInterval,
                discountRate: newDiscountRate,
            });
        } catch (e) {
            console.error(e);
        }
    }


    render() {
        const projects = this.state.projects;

        return (
            <div>
                <ProjectForm onSubmit={(projectData) => this.createProject(projectData)}/>

                }
            </div>
        );
    }
}

export default ProjectPage;