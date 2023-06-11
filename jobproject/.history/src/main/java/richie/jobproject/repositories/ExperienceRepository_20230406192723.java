package richie.jobproject.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import richie.jobproject.models.Experience;

@Repository
public interface ExperienceRepository extends CrudRepository<Experience, Long> {
}