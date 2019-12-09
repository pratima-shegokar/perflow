import Api from "./Api";

class RecordsApi {
<<<<<<< HEAD
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
=======

    getAllRecords() {
        return Api.get('/records');
    }

    createRecord(record) {
        return Api.post('/records', record);
    }

    updateRecord(record) {
        return Api.put('/records', record);
    }
}

export default new RecordsApi();
>>>>>>> Added material table + materia ui core to package.json
