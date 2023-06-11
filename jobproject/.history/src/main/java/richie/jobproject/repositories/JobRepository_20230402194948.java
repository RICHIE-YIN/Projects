package richie.jobproject.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import richie.jobproject.models.Job;

@Repository
public interface JobRepository extends CrudRepository<Job, Long> {

    List<Job> findAll();

    List<Job> findByTitleContainingIgnoreCase(String title);

    List<Job> findByDescriptionContainingIgnoreCase(String description);

}
