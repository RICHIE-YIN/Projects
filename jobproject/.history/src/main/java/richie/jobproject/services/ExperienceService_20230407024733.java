package richie.jobproject.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import richie.jobproject.models.Experience;
import richie.jobproject.repositories.ExperienceRepository;

@Service
public class ExperienceService {
    @Autowired
    private ExperienceRepository experienceRepository;

    // Create
    public Experience createExperience(Experience experience) {
        return experienceRepository.save(experience);
    }

    // Read One
    public Optional<Experience> getExperienceById(Long id) {
        return experienceRepository.findById(id);
    }

    // Read All
    public List<Experience> getAllExperiences() {
        List<Experience> experiences = new ArrayList<>();
        experienceRepository.findAll().forEach(experiences::add);
        return experiences;
    }

    // Update
    public Experience updateExperience(Experience experience) {
        return experienceRepository.save(experience);
    }

    // Delete
    public void deleteExperience(Long id) {
        experienceRepository.deleteById(id);
    }

    public List<Experience> findByUserProfileId(Long userProfileId) {
        return experienceRepository.findByUserProfile_Id(userProfileId);
    }

    public List<Experience> findAllByUserProfileId(Long userProfileId) {
        return experienceRepository.findAllByUserProfileId(userProfileId);
    }
    
}