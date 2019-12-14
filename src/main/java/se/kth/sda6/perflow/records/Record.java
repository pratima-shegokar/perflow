package se.kth.sda6.perflow.records;

import com.sun.xml.bind.v2.runtime.output.DOMOutput;
import se.kth.sda6.perflow.projects.Project;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table (name = "record")
public class Record {
    @Id
    @Column (name = "record_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long recordId;

    //This is an index representing the intervals like months, weeks, days or hours. In the application we use months
    @Column (name = "interval")
    private int interval;

    //This is the planned value should be calculated from given project information
    @Column (name = "pv")
    private Double pv;

    //This is derived from the planned value and the financial in
    @Column (name = "pcif")
    private Double pcif;

    //This is the earned value achieved every month (or reporting period), considered as credit
    @Column (name = "ev")
    private Double ev;

    //This is the actual value cost considered as debit on the work done
    @Column (name = "ac")
    private Double ac;

    @Column (name = "cif")
    private Double cif;

    @Column (name = "cof")
    private Double cof;

    @Column (name = "updated")
    private boolean updated;

    @ManyToOne
    private Project project;

    public Record() {
    }

    public Record(int interval, Double pv, Double ev, Double ac, Double pcif, Double cif, Double cof, boolean updated
                    , Project project) {
        this.interval = interval;
        this.pv = pv;
        this.ev = ev;
        this.ac = ac;
        this.pcif = pcif;
        this.cif = cif;
        this.cof = cof;
        this.updated = updated;
        this.project = project;
    }


    public long getRecordId() {
        return recordId;
    }

    /*
    public void setRecordId(long recordId) {
        this.recordId = recordId;
    }
    */

    public int getInterval() {
        return interval;
    }

    public void setInterval(int interval) {
        this.interval = interval;
    }

    public Double getPv() {
        return pv;
    }

    public void setPv(Double pv) {
        this.pv = pv;
    }

    public Double getEv() {
        return ev;
    }

    public void setEv(Double ev) {
        this.ev = ev;
    }

    public Double getAc() {
        return ac;
    }

    public void setAc(Double ac) {
        this.ac = ac;
    }

    public Double getPcif() {
        return pcif;
    }

    public void setPcif(Double pcif) {
        this.pcif = pcif;
    }

    public Double getCif() {
        return cif;
    }

    public void setCif(Double cif) {
        this.cif = cif;
    }

    public Double getCof() {
        return cof;
    }

    public void setCof(Double cof) {
        this.cof = cof;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public boolean isUpdated() {
        return updated;
    }

    public void setUpdated(boolean updated) {
        this.updated = updated;
    }
}
