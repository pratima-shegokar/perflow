package se.kth.sda6.perflow.projects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepo projectRepo;

    public List<Project> getAll(){
        return projectRepo.findAll();
    }

    public Optional<Project> getById(long id){
        return projectRepo.findById(id);
    }

    public Project add(Project project){
        return projectRepo.save(project);
    }

    public Project update(Project project){
        return projectRepo.save(project);
    }

    public void deleteById(long id){
        projectRepo.deleteById(id);
    }

}
