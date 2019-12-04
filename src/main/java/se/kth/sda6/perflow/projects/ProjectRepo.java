package se.kth.sda6.perflow.projects;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.kth.sda6.perflow.projects.Project;

@Repository
public interface ProjectRepo extends JpaRepository<Project, Long> {
}
