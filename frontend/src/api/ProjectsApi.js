import Api from "./Api";

class ProjectsApi {
  getAllProjects() {
    return Api.get("/projects");
  }

  getProjectById(id) {
    return Api.get("/projects/" + id);
  }

  createProject(project) {
    return Api.post("/projects", project);
  }

  updateProject(project) {
    return Api.put("/projects", project);
  }

  getPv(project) {
    return Api.get("/records/pvs", project);
  }
}

export default new ProjectsApi();
