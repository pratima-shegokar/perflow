package se.kth.sda6.perflow.records;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import se.kth.sda6.perflow.projects.Project;
import se.kth.sda6.perflow.projects.ProjectService;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class RecordServiceTest {
    @Autowired
    RecordService recordService;

    @Autowired
    ProjectService projectService;

    @Test
    void calcCPVListTest() {
        //define a project obj
        Project project = new Project("P111","Swiss Tower",12,150000000
                ,6,50000,50000,30000000,7500000,2,0.08);

        //use the calcCPVList method to provide the cum PV List
        List<Double> cPvList;
        cPvList = recordService.calcPvList(project);

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
        cPvList = recordService.calcPvList(project);

        //use the calcCPCIFList method to provide the cum CPCIF List
        List<Double> cPCIFList;
        cPCIFList = recordService.calcPcifList(cPvList, project);

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

    @Test
    void createPlannedValuesRecordsTest() {
        //define a project obj
        Project project = new Project("P111","Swiss Tower",12,150000000
                ,6,50000,50000,30000000,0.05,2,0.08);

        //make the records list using the method recordService.CreatePlannedValuesRecords
        List<Record> records = recordService.createPlannedValuesRecords(project);

        //get the planned values from the records
        List<Double> pv = new ArrayList<>();
        List<Double> pcif = new ArrayList<>();
        for (int i = 0; i < project.getDuration(); i++){
            pv.add(records.get(i).getPv());
            pcif.add(records.get(i).getPcif());
        }

        for (int i = project.getDuration(); i < records.size(); i++ ){
            pcif.add(records.get(i).getPcif());
        }

        //get the planned values and planned cash inflow using already tested methods
        List<Double> comparePv = recordService.calcPvList(project);
        List<Double> comparePcif = recordService.calcPcifList(comparePv,project);

        //all items in the list should be approximately equivalent with a margin less than 1
        boolean approxEquality = (Math.abs((pv.get(0) - comparePv.get(0))) < 1);
        for (int i = 1; i < pv.size(); i++){
            approxEquality = approxEquality && (Math.abs((pv.get(i) - comparePv.get(i))) < 1);
        }

        approxEquality = approxEquality && (Math.abs((pcif.get(0) - comparePcif.get(0))) < 1);
        for (int i = 1; i < pcif.size(); i++){
            approxEquality = approxEquality && (Math.abs((pcif.get(i) - comparePcif.get(i))) < 1);
        }

        assertTrue(approxEquality);
    }

    @Test
    void getPvList() {
        //define a project obj
        Project project = new Project("P111","Swiss Tower",12,150000000
                ,6,50000,50000,30000000,0.05,2,0.08);

        project = projectService.add(project);
        List<Double> comparePv = recordService.calcPvList(project);
        recordService.addNewProjectRecords(project);
        List<Double> pvList = recordService.getPvList(project);

        boolean approxEquality = (Math.abs((pvList.get(0) - comparePv.get(0))) < 1);
        for (int i = 1; i < comparePv.size(); i++){
            approxEquality = approxEquality && (Math.abs((pvList.get(i) - comparePv.get(i))) < 1);
        }

        assertTrue(approxEquality);
    }
}