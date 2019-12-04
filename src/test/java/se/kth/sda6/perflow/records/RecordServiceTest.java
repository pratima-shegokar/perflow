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


    @Test
    void calcCPCIFListTest(){
        //define a project obj
        Project project = new Project("P111","Swiss Tower",12,150000000
                ,6,50000,50000,30000000,0.05,2,0.08);

        //use the calcCPVList method to provide the cum PV List
        List<Double> cPvList;
        cPvList = recordService.calcCPVList(project);

        //use the calcCPCIFList method to provide the cum CPCIF List
        List<Double> cPCIFList;
        cPCIFList = recordService.calcCPCIFList(cPvList, project);

        //The cum planned cash inflow are estimated on excel and filled here manually in a compare list
        List<Double> compareList = new ArrayList<>();
        compareList.add(30000000d);
        compareList.add(30000000d);
        compareList.add(30037513d);
        compareList.add(31584620d);
        compareList.add(36905711d);
        compareList.add(47132984d);
        compareList.add(62266438d);
        compareList.add(81173877d);
        compareList.add(101590910d);
        compareList.add(119888472d);
        compareList.add(133131914d);
        compareList.add(140343018d);
        compareList.add(142500000d);
        compareList.add(150000000d);

        //all items in the list should be approximately equivalent with a margin less than 1
        boolean approxEquality = (Math.abs((cPCIFList.get(0) - compareList.get(0))) < 1);
        for (int i = 1; i < cPCIFList.size(); i++){
            approxEquality = approxEquality && (Math.abs((cPCIFList.get(i) - compareList.get(i))) < 1);
        }

        assertTrue(approxEquality);
    }
}