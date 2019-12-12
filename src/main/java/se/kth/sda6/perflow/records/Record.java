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
    private double pcif;

    //This is the earned value achieved every month (or reporting period), considered as credit
    @Column (name = "ev")
    private double ev;

    //This is the actual value cost considered as debit on the work done
    @Column (name = "ac")
    private double ac;

    @Column (name = "cif")
    private double cif;

    @Column (name = "cof")
    private double cof;

    @Column (name = "updated")
    private boolean updated;

    @ManyToOne
    private Project project;

    public Record() {
    }

    public Record(int interval, double pv, double ev, double ac, double pcif, double cif, double cof, boolean updated
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

    public double getEv() {
        return ev;
    }

    public void setEv(double ev) {
        this.ev = ev;
    }

    public double getAc() {
        return ac;
    }

    public void setAc(double ac) {
        this.ac = ac;
    }

    public double getPcif() {
        return pcif;
    }

    public void setPcif(double pcif) {
        this.pcif = pcif;
    }

    public double getCif() {
        return cif;
    }

    public void setCif(double cif) {
        this.cif = cif;
    }

    public double getCof() {
        return cof;
    }

    public void setCof(double cof) {
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
