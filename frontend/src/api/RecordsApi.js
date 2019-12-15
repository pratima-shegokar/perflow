import Api from "./Api";

class RecordsApi {
  getPvList(projectId) {
    return Api.get("/records/pvs/" + projectId);
  }

  getEvList(projectId) {
    return Api.get("/records/evs/" + projectId);
  }

  getAcList(projectId) {
    return Api.get("/records/acs/" + projectId);
  }

  getPcifList(projectId) {
    return Api.get("/records/pcifs/" + projectId);
  }

  getCifList(projectId) {
    return Api.get("/records/cifs/" + projectId);
  }

  getCofList(projectId) {
    return Api.get("/records/cofs/" + projectId);
  }

  getByProjectId(projectId) {
    return Api.get("/records-project-id/" + projectId);
  }

  getLastByProjectId(projectId) {
    return Api.get("/project-latest-record/" + projectId);
  }

  updateRecord(record) {
    return Api.put("/records", record);
  }
}

export default new RecordsApi();
