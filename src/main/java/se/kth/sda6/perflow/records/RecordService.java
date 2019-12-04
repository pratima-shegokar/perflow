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


    //Once the project created the records for all the contract/financial period must be initialized, and PV & PCIF
    //must be filled in, and this is what this method is doing
    List<Record> createPlannedValuesRecords(Project project){

        //get the cum planned values and cum planned CIF calculated
        List<Double> pvList = calcPvList(project);
        List<Double> PcifList = calcPcifList(pvList,project);

        List<Record> records = new ArrayList<>();
        for (int i = 0; i < pvList.size(); i++) {
            Record record = new Record();
            record.setPv(pvList.get(i));
            record.setPcif(PcifList.get(i));

            records.add(record);
        }

        for (int i = pvList.size(); i < PcifList.size(); i++){
            Record record = new Record();
            record.setPcif(PcifList.get(i));

            records.add(record);
        }

        return records;
    }

    List<Double> calcPvList(Project project) {
        double a = project.getBudget();
        double n = (double) project.getDuration();
        double p = (double) project.getPeakInterval();
        double t = n-p-1;
        double y0 = project.getFirstPV();
        double yw = project.getLastPV();

        double c = pow(p, 2) / 3d + p / 3d;
        double c2 = (a-3d/(2d*p)*(yw-y0)* c -y0*(p+1)-yw*t)/(t/p* c +pow(t,2)/3d-t/3d);
        double c1 = c2*t/p+3d/(2d*p)*(yw-y0);

        List<Double> pvList = new ArrayList<>();

        double k = 0;
        double cumK = 0;
        for (int i = 1; i <= n; i++ ){
            if ((i-1)<=p){
                k = y0+c1*(-4d/(3d* pow(p,2))*pow((i-p/2d-1d),3)+(i-p/2d-1d)+p/3d);
            } else {
                k = yw+c2*(4d/(3d*pow(t,2))*pow((i-t/2d-p-1d),3)-(i-t/2d-p-1d)+t/3d);
            }

            cumK = cumK + k;

            pvList.add(cumK);
        }

        return pvList;
    }

    List<Double> calcPcifList(List<Double> pvList, Project project){
        int creditTime = project.getCreditTime();
        int intervals = project.getDuration();
        int totalNumberIntervals = intervals + creditTime;

        //TODO:here we have to check the consistency between pvList and the project, which means that the number of
        // intervals equals the size of the pvList

        double adv = project.getAdvPayment();
        double budget = project.getBudget();
        double advPercent = adv / budget;
        double perBond = project.getPerfBond();

        //add zeros in the first months as per the credit time
        List<Double> pcifList = new ArrayList<>();
        for (int i = 1; i <= creditTime; i++){
            pcifList.add(0d);
        }

        //set the advance payment value to the first months before the credit time comes
        for (int i = 1; i <= creditTime; i++) {
            pcifList.set(i - 1, adv);
        }

        //add the cum PV values reduced by the advance payment percentage to the rest of the months
        for (int i = creditTime + 1; i <= totalNumberIntervals; i++){
            pcifList.add(adv + pvList.get(i-creditTime-1) * (1 - advPercent));
        }

        /* fix the beginning of the cum PCIF and reduce the month before the last month in payment by the percentage of
         *  the performance bond, and all months values with same modified percentage. */
        for (int i = creditTime + 1; i <= totalNumberIntervals-1; i++){
            pcifList.set(i-1, adv + (pcifList.get(i-1) - adv) * ((1 - perBond) * budget -adv) /
                    (pcifList.get(totalNumberIntervals-2) - adv));
        }

        return pcifList;
    }

    Record add(Record record){
        return recordRepo.save(record);
    }

    //not tested yet
    //will be used mainly when the project is created and planned values are calculated and going to be saved in the DB
    List<Record> addList(List<Record> records){
        List<Record> storedRecords= new ArrayList<>();

        for (Record record: records) {
            storedRecords.add(recordRepo.save(record));
        }

        return storedRecords;
    }

    //not tested yet
    //This add all records required for a project in DB, including all planned values and planned cash inflow
    List<Record> addNewProjectRecords(Project project){
        //create the planned values records of the new project without adding to DB
        List<Record> records = createPlannedValuesRecords(project);

        //add the created list of records to the DB
        return addList(records);
    }

    Record update(Record record){
        return recordRepo.save(record);
    }

    void deleteById(long id){
        recordRepo.deleteById(id);
    }

}
