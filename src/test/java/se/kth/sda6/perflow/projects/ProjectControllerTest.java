package se.kth.sda6.perflow.projects;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import org.springframework.test.context.junit4.SpringRunner;

import java.nio.charset.StandardCharsets;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
class ProjectControllerTest {
    @Autowired
    private MockMvc mockMvc;

    private static final MediaType APPLICATION_JSON_UTF8 = new MediaType(MediaType.APPLICATION_JSON.getType()
            , MediaType.APPLICATION_JSON.getSubtype(), StandardCharsets.UTF_8);


    //Access is denied
    @Test
    public void add() throws Exception{
        //MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();

        String url = "/projects";

        Project project = new Project("P111","Swiss Tower",12,150000000
                ,6,50000,50000,30000000,0.05,2,0.08);

        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
        ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
        String requestJson=ow.writeValueAsString(project);

        mockMvc.perform(post(url).contentType(APPLICATION_JSON_UTF8)
                .content(requestJson))
                .andExpect(status().isForbidden());


        /*//define a project obj
        Project project = new Project("P111","Swiss Tower",12,150000000
                ,6,50000,50000,30000000,0.05,2,0.08);

        *//* add the project through the project controller, this suppose to add the project data to DB and the planned
        * values records as well *//*
        projectController.add(project);

        //retrieve the projects list from DB to see if our project is contained there
        List<Project> projects = projectController.getAll();

        boolean isContained = false;
        for (Project p: projects){
            if (p.getProjectName().equals(project.getProjectName())
                    && p.getProjectUniqueNumber().equals(project.getProjectUniqueNumber())) {
                isContained = true;
                break;
            }
        }

        assertTrue(isContained);*/

    }
}