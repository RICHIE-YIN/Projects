package richie.jobproject.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import richie.jobproject.models.UserProfile;

@Repository
public interface UserProfileRepository extends CrudRepository<UserProfile, Long> {
    UserProfile findByUser_Id(Long userId);

}