package richie.jobproject.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import richie.jobproject.models.User;
import richie.jobproject.models.UserProfile;
import richie.jobproject.repositories.UserProfileRepository;
import richie.jobproject.repositories.UserRepository;

@Service
public class UserProfileService {
    @Autowired
    private UserProfileRepository userProfileRepository;
    @Autowired
    private UserRepository userRepository;

    // Create
    public UserProfile createUserProfile(UserProfile userProfile) {
        return userProfileRepository.save(userProfile);
    }

    // Read One
    public Optional<UserProfile> getUserProfileById(Long id) {
        return userProfileRepository.findById(id);
    }

    // Read All
    public List<UserProfile> getAllUserProfiles() {
        List<UserProfile> userProfiles = new ArrayList<>();
        userProfileRepository.findAll().forEach(userProfiles::add);
        return userProfiles;
    }

    // Update
    public UserProfile updateUserProfile(UserProfile userProfile) {
        return userProfileRepository.save(userProfile);
    }

    // Delete
    public void deleteUserProfile(Long id) {
        userProfileRepository.deleteById(id);
    }


    
}