package richie.jobproject.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import richie.jobproject.models.JobApplication;
import richie.jobproject.models.User;
import richie.jobproject.repositories.JobApplicationRepository;

@Service
public class JobApplicationService {

    @Autowired
    private JobApplicationRepository jobApplicationRepository;

    public JobApplication createJobApplication(JobApplication jobApplication) {
        return jobApplicationRepository.save(jobApplication);
    }

    public List<JobApplication> findAllByApplicant(User applicant) {
        return jobApplicationRepository.findAllByApplicant(applicant);
    }

    public List<JobApplication> findAllByJobId(Long jobId) {
        return jobApplicationRepository.findAllByJob_Id(jobId);
    }

    public JobApplication findById(Long id) {
        Optional<JobApplication> optionalJobApplication = jobApplicationRepository.findById(id);
        return optionalJobApplication.orElse(null);
    }

    public void deleteJobApplicationById(Long id) {
        jobApplicationRepository.deleteById(id);
    }

    public void updateJobApplication(JobApplication jobApplication) {
        jobApplicationRepository.save(jobApplication);
    }
}
