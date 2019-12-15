package se.kth.sda6.perflow.records;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda6.perflow.projects.Project;
import se.kth.sda6.perflow.projects.ProjectService;

import java.util.List;

@RestController
public class RecordController {
    @Autowired
    private RecordService recordService;

    @Autowired
    private ProjectService projectService;

    // get all records
    @GetMapping("/records")
    public List<Record> getAll() {
        return recordService.getAll();
    }

    // create a record
    @PostMapping("/records")
    public Record add(@RequestBody Record newRecord) {
        return recordService.add(newRecord);
    }

    // get a specific record by ID
    @GetMapping("/records/{id}")
    public Record getById(@PathVariable Long id) {
        return recordService.getById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    // get all records by Project, and sorted by interval
    @GetMapping("/records-project")
    public List<Record> getByProject(@RequestBody Project project) {
        return recordService.getByProject(project);
    }

    // get all records by Project, and sorted by interval
    @GetMapping("/records-project-id/{projectId}")
    public List<Record> getByProject(@PathVariable Long projectId) {
        Project project = projectService.getById(projectId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        return recordService.getByProject(project);
    }

    // get the latest updated records in a Project
    @GetMapping("/project-latest-record/{projectId}")
    public Record getLatestOnProject(@PathVariable Long projectId) {
        Project project = projectService.getById(projectId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        return recordService.getLatestOnProject(project);
    }

    // update a record
    @PutMapping("/records")
    public Record update(@RequestBody Record record) {
        return recordService.update(record);
    }

    // delete a record
    @DeleteMapping("/records/{id}")
    public void delete(@PathVariable Long id) {
        recordService.deleteById(id);
    }

    // get the planned value list from records
    @GetMapping("/records/pvs/{projectId}")
    public List<Double> getPvList(@PathVariable Long projectId) {
        return recordService.getPvList(projectService.getById(projectId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)));
    }

    // get the planned value list from records
    @GetMapping("/records/evs/{projectId}")
    public List<Double> getEvList(@PathVariable Long projectId) {
        return recordService.getEvList(projectService.getById(projectId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)));
    }

    // get the planned value list from records
    @GetMapping("/records/acs/{projectId}")
    public List<Double> getAcList(@PathVariable Long projectId) {
        return recordService.getAcList(projectService.getById(projectId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)));
    }

    // get the planned cash inflow list from records
    @GetMapping("/records/pcifs/{projectId}")
    public List<Double> getPcifList(@PathVariable Long projectId) {
        return recordService.getPcifList(projectService.getById(projectId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)));
    }
}
