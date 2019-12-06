package se.kth.sda6.perflow.projects;


import javax.persistence.*;

@Entity
@Table(name = "project")
public class Project {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "projectName")
    private String projectName;
    @Column(name = "duration")
    private int duration;
    @Column(name = "budget")
    private double budget;
    @Column(name = "expectedFirstPayment")
    private double expectedFirstPayment;
    @Column(name = "expectedLastPayment")
    private double expectedLastPayment;
    @Column(name = "peakInterval")
    private double peakInterval;
    @Column(name = "discountRate")
    private double discountRate;

    public Project() {
    }

    public Project( String projectName, int duration, double budget, double expectedFirstPayment, double expectedLastPayment, double peakInterval, double discountRate) {
        this.projectName = projectName;
        this.duration = duration;
        this.budget = budget;
        this.expectedFirstPayment = expectedFirstPayment;
        this.expectedLastPayment = expectedLastPayment;
        this.peakInterval = peakInterval;
        this.discountRate = discountRate;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public double getBudget() {
        return budget;
    }

    public void setBudget(double budget) {
        budget = budget;
    }

    public double getExpectedFirstPayment() {
        return expectedFirstPayment;
    }

    public void setExpectedFirstPayment(double expectedFirstPayment) {
        this.expectedFirstPayment = expectedFirstPayment;
    }

    public double getExpectedLastPayment() {
        return expectedLastPayment;
    }

    public void setExpectedLastPayment(double expectedLastPayment) {
        this.expectedLastPayment = expectedLastPayment;
    }

    public double getPeakInterval() {
        return peakInterval;
    }

    public void setPeakInterval(double peakInterval) {
        this.peakInterval = peakInterval;
    }

    public double getDiscountRate() {
        return discountRate;
    }

    public void setDiscountRate(double discountRate) {
        this.discountRate = discountRate;
    }
}
