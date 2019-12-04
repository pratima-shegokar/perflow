package se.kth.sda6.perflow.records;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import se.kth.sda6.perflow.projects.Project;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class RecordServiceTest {
    @Autowired
    RecordService recordService;

    @Test
    void calcCPVListTest() {
        //define a project obj
        Project project = new Project("P111","Swiss Tower",12,150000000
                ,6,50000,50000,30000000,7500000,2,0.08);

        //use the calcCPVList method to provide the cum PV List
        List<Double> cPvList;
        cPvList = recordService.calcCPVList(project);

        //The cum planned values are estimated on excel and filled here manually in a compare list
        List<Double> compareList = new ArrayList<>();
        compareList.add(50000d);
        compareList.add(2112122d);
        compareList.add(9204546d);
        compareList.add(22836364d);
        compareList.add(43007576d);
        compareList.add(68209091d);
        compareList.add(95422728d);
        compareList.add(119811346d);
        compareList.add(137463382d);
        compareList.add(147074982d);
        compareList.add(149950000d);
        compareList.add(150000000d);

        //all items in the list should be approximately equivalent with a margin less than 1
        boolean approxEquality = (Math.abs((cPvList.get(0) - compareList.get(0))) < 1);
        for (int i = 1; i < cPvList.size(); i++){
            approxEquality = approxEquality && (Math.abs((cPvList.get(i) - compareList.get(i))) < 1);
        }

        assertTrue(approxEquality);
    }


}