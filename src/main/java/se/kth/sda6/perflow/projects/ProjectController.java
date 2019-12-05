package se.kth.sda6.perflow.projects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

public class ProjectController {
    @Autowired
    private ProjectService projectService;

    // get all projects
    @GetMapping("/projects")
    public List<Project> getAll() {
        return projectService.getAll();
    }

    // create a post
    @PostMapping("/projects")
    public Project add(@RequestBody Project newProject) {
        return projectService.add(newProject);
    }

    // get a specific project by ID
    @GetMapping("/projects/{id}")
    public Project getById(@PathVariable Long id) {
        return projectService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    // update a project
    @PutMapping("/projects")
    public Project update(@RequestBody Project project) {
        return projectService.update(project);
    }

    // delete a project
    @DeleteMapping("/projects/{id}")
    public void delete(@PathVariable Long id) {
        projectService.deleteById(id);
    }
}
