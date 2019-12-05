package se.kth.sda6.perflow.records;

import org.springframework.data.jpa.repository.JpaRepository;
import se.kth.sda6.perflow.projects.Project;

import java.util.List;

public interface RecordRepo extends JpaRepository<Record, Long> {
    List<Record> findByProject(Project project);
}
