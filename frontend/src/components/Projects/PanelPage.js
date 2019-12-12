import React from "react";
import ProjectsApi from "./../../api/ProjectsApi";
import ProjPanel from "./ProjPanel";


class PanelPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects : []
        };
    }

    async getProjectById(projectData) {
        try {
            const response = await ProjectsApi.getProjectById(projectData);
            const project = response.data;
            const getProject = this.state.get.concat(project);

            this.setState({
                projects: getProject,
            });
        } catch (e) {
            console.error(e);
        }
    }

    componentDidMount() {
        ProjectsApi.getProjectById()
            .then(({data}) => this.setState({projects: data}))
            .catch(err => console.error(err));
    }

    render() {
        const projects = this.state.projects;

        return (
            <div>
                <ProjPanel onSubmit={(projectData) => this.getProjectById(projectData)}/>
            </div>
        );
    }
}

export default PanelPage;