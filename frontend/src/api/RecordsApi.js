import Api from "./Api";

class RecordsApi {
  getPvList(projectId) {
    return Api.get("/records/pvs/" + projectId);
  }
}

export default new RecordsApi();
