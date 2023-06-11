package richie.jobproject.models;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderColumn;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="job_applications")
public class JobApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String coverLetter;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User applicant;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="job_id")
    private Job job;

    @Temporal(TemporalType.TIMESTAMP)
    private Date appliedDate;

    private String applicationResumeFilePath;

    @Column(nullable = false)
    private String applicationStatus = "undecided";

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_profile_id")
    private UserProfile userProfile;


    public JobApplication() {}


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCoverLetter() {
        return this.coverLetter;
    }
    
    public void setCoverLetter(String coverLetter) {
        this.coverLetter = coverLetter;
    }

    public UserProfile getUserProfile() {
        return this.userProfile;
    }
    
    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

    public User getApplicant() {
        return this.applicant;
    }

    public void setApplicant(User applicant) {
        this.applicant = applicant;
    }

    public Job getJob() {
        return this.job;
    }

    public void setJob(Job job) {
        this.job = job;
    }

    public Date getAppliedDate() {
        return this.appliedDate;
    }

    public void setAppliedDate(Date appliedDate) {
        this.appliedDate = appliedDate;
    }

    public String getApplicationResumeFilePath() {
        return this.applicationResumeFilePath;
    }

    public void setApplicationResumeFilePath(String applicationResumeFilePath) {
        this.applicationResumeFilePath = applicationResumeFilePath;
    }

    public String getApplicationStatus() {
        return this.applicationStatus;
    }

    public void setApplicationStatus(String applicationStatus) {
        this.applicationStatus = applicationStatus;
    }
}
