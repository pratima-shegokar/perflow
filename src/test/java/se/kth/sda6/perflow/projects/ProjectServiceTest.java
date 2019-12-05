package se.kth.sda6.perflow.projectsTest;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.client.RestClientTest;
import org.springframework.boot.test.context.SpringBootTest;
import se.kth.sda6.perflow.projects.Project;
import se.kth.sda6.perflow.projects.ProjectService;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
class ProjectTest {

    @Autowired
    private ProjectService projectService;

    @Test
    void testAddAndGetAll(){

        //define a project obj
        Project project = new Project("P111","Swiss Tower",12,150000000
                ,6,50000,50000,300000,7500000,2,0.08);

        Project addedProject =  projectService.add(project);

        List<Project> projects = projectService.getAll();

        boolean isContained = false;
        for (Project p: projects){
            if (p.getProjectName().equals(addedProject.getProjectName())
                    && p.getProjectUniqueNumber().equals(addedProject.getProjectUniqueNumber())) {
                isContained = true;
                break;
            }
        }

        assertTrue(isContained);
    }

}
