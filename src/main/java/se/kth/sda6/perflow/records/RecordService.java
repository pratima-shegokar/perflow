package se.kth.sda6.perflow.records;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda6.perflow.projects.Project;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
