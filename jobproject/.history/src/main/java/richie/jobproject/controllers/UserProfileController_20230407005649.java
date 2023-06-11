package richie.jobproject.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;

import richie.jobproject.models.User;
import richie.jobproject.models.UserProfile;
import richie.jobproject.services.UserProfileService;
import richie.jobproject.services.UserService;

@Controller
@RequestMapping("/userprofile")
public class UserProfileController {

    @Autowired
    private UserProfileService userProfileService;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public String create(UserProfile userProfile, @RequestParam Long userId) {
        User user = userService.findById(userId);
        if (user != null) {
            userProfile.setUser(user);
            userProfileService.createUserProfile(userProfile);
        }
        return "redirect:/";
    }

        @PostMapping("/edit/{id}")
        public String update(@PathVariable Long id, UserProfile updatedProfile) {
            Optional<UserProfile> existingProfile = userProfileService.getUserProfileById(id);
            if (existingProfile.isPresent()) {
                UserProfile userProfile = existingProfile.get();
                userProfile.setFirstName(updatedProfile.getFirstName());
                userProfile.setLastName(updatedProfile.getLastName());
                userProfile.setPhoneNumber(updatedProfile.getPhoneNumber());
                userProfile.setAddress(updatedProfile.getAddress());
                userProfile.setCity(updatedProfile.getCity());
                userProfile.setState(updatedProfile.getState());
                userProfile.setCountry(updatedProfile.getCountry());
                userProfile.setSummary(updatedProfile.getSummary());
                userProfile.setSkills(updatedProfile.getSkills());
                userProfile.setLanguages(updatedProfile.getLanguages());
                userProfile.setAvailability(updatedProfile.getAvailability());
                userProfileService.updateUserProfile(userProfile);
            }
            return "redirect:/";
        }

    @GetMapping("/{id}")
    public String read(@PathVariable Long id, Model model) {
        Optional<UserProfile> userProfile = userProfileService.getUserProfileById(id);
        userProfile.ifPresent(profile -> model.addAttribute("userProfile", profile));
        return "userprofile";
    }

    @PostMapping("/update")
    public String update(UserProfile userProfile) {
        userProfileService.updateUserProfile(userProfile);
        return "redirect:/";
    }

    @PostMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        userProfileService.deleteUserProfile(id);
        return "redirect:/";
    }
}
