package se.kth.sda6.perflow.records;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda6.perflow.projects.Project;

import java.util.List;

public class RecordController {
    @Autowired
    private RecordService recordService;

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
        return recordService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    // get all records by Project, and sorted by interval
    @GetMapping("/records-project")
    public List<Record> getByProject(@RequestBody Project project) {
        return recordService.getByProject(project);
    }

    // get the latest updated records in a Project
    @GetMapping("/project-latest-record")
    public Record getLatestOnProject(@RequestBody Project project) {
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
}
