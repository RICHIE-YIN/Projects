package richie.jobproject.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import richie.jobproject.models.JobApplication;
import richie.jobproject.models.User;

@Repository
public interface JobApplicationRepository extends CrudRepository<JobApplication, Long> {

    List<JobApplication> findAllByApplicant(User applicant);

    List<JobApplication> findAllByJob_Id(Long jobId);

    Optional<JobApplication> findByApplicantAndJob(User applicant, Job job);

}
