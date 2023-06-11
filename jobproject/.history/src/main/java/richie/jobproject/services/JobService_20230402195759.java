package richie.jobproject.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import richie.jobproject.models.Job;
import richie.jobproject.repositories.JobRepository;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    public List<Job> findAllJobs() {
        return (List<Job>) jobRepository.findAll();
    }

    public Job findById(Long id) {
        Optional<Job> optionalJob = jobRepository.findById(id);
        return optionalJob.orElse(null);
    }

    public List<Job> findByTitleContainingIgnoreCase(String title) {
        return jobRepository.findByTitleContainingIgnoreCase(title);
    }

    public List<Job> findByDescriptionContainingIgnoreCase(String description) {
        return jobRepository.findByDescriptionContainingIgnoreCase(description);
    }

    public void deleteJobById(Long id) {
        jobRepository.deleteById(id);
    }

    public void updateJob(Job job) {
        jobRepository.save(job);
    }
}
