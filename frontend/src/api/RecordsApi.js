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
}

export default new RecordsApi();
