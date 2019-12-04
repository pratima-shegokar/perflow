package se.kth.sda6.perflow.records;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda6.perflow.projects.Project;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static java.lang.Math.pow;

@Service
class RecordService {

    @Autowired
    private RecordRepo recordRepo;

    List<Record> getAll(){
        return recordRepo.findAll();
    }

    Optional<Record> getById(long id){
        return recordRepo.findById(id);
    }

    //Warning: This must be tested
    //get all records belong to a certain project, and sorted by interval
    List<Record> getByProject(Project project){
        return recordRepo.findByProject(project).stream().sorted(new Comparator<Record>() {
            @Override
            public int compare(Record r1, Record r2) {
                return r1.getInterval()-r2.getInterval();
            }
        }).collect(Collectors.toList());
    }

    //Warning: must be tested
    //get the latest updated record on the project if exists
    Record getLatestOnProject(Project project){
        List<Record> allRecordsOnProject = getByProject(project);
        Record currRecord = null;

        //check if the list is empty to return null
        if (allRecordsOnProject.isEmpty()) return null;

        //check the first record if updated by actual values
        for (Record r : allRecordsOnProject) {
            if (r.isUpdated()) {
                currRecord = r;
            } else break;
        }

        return currRecord;
    }

    //To be Tested
    //Once the project created the records for all the contract/financial period must be initialized, and PV & PCIF
    //must be filled in, and this is what this method is doing
    /*List<Record> CreatePlannedValuesRecords(Project project){

        List<Double> cPvList = CalcCPVList(project);

    }*/

    List<Double> calcCPVList(Project project) {
        double a = project.getBudget();
        double n = (double) project.getDuration();
        double p = (double) project.getPeakInterval();
        double t = n-p-1;
        double y0 = project.getFirstPV();
        double yw = project.getLastPV();

        double c = pow(p, 2) / 3d + p / 3d;
        double c2 = (a-3d/(2d*p)*(yw-y0)* c -y0*(p+1)-yw*t)/(t/p* c +pow(t,2)/3d-t/3d);
        double c1 = c2*t/p+3d/(2d*p)*(yw-y0);

        List<Double> cPvList = new ArrayList<>();

        double k = 0;
        double cumK = 0;
        for (int i = 1; i <= n; i++ ){
            if ((i-1)<=p){
                k = y0+c1*(-4d/(3d* pow(p,2))*pow((i-p/2d-1d),3)+(i-p/2d-1d)+p/3d);
            } else {
                k = yw+c2*(4d/(3d*pow(t,2))*pow((i-t/2d-p-1d),3)-(i-t/2d-p-1d)+t/3d);
            }

            cumK = cumK + k;

            cPvList.add(cumK);
        }

        return cPvList;
    }

    Record add(Record record){
        return recordRepo.save(record);
    }

    Record update(Record record){
        return recordRepo.save(record);
    }

    void deleteById(long id){
        recordRepo.deleteById(id);
    }

}
